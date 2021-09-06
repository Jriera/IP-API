
import { Request,Response } from 'express';
import resizeImage from './imageProcess';
import path from 'path';
import fs from 'fs';



class AnImage{
    filename:string="";
    width:number=0;
    height:number=0;
    location:string="";
}


/**
 * @typeParam Request from express, for any parameter that handles server requests
 * @typeParam Response from express, for any parameter that handles server responses
 * @param req:Request takes the requests sent to the server
 * @param res:Response sends the responses from the server 
 * @description performs the main work in the image prcess. It creates an image object and assings its properties
 * from the url that calls this middleware. If the image created exists already the module sends the stored image
 * instead of generating a new one. If the image object instance does not exist, it passes it into the imageProcess module
 * and creates the new image and sends it to the client afterwards
 * @returns:void Nothing is return since the image generated is not returned by the module 
 * but sent to client via the res.sendFile property from Response parameter
 */


const imageMiddleware= (req:Request,res:Response)=>{
    const modifyImage= new AnImage;
    modifyImage.filename = req.query.filename as string;
	modifyImage.height = +(req.query.height as string);
	modifyImage.width= +(req.query.width as string);
	modifyImage.location= `assets/thumbnails/${modifyImage.filename} ${modifyImage.width}x${modifyImage.height}.jpg`;

	if (fs.existsSync(modifyImage.location)) {
		res.sendFile(
			path.resolve(`./assets/thumbnails/${modifyImage.filename} ${modifyImage.width}x${modifyImage.height}.jpg`)
		);
		console.log('serving cached image');
	} else {
		resizeImage(`${modifyImage.filename}.jpg`, modifyImage.width, modifyImage.height, modifyImage.location);

		setTimeout(() => {
			res.sendFile(
				path.resolve(`./assets/thumbnails/${modifyImage.filename} ${modifyImage.width}x${modifyImage.height}.jpg`)
			);
		}, 100);
		console.log('new image generated');
	}


}

export default imageMiddleware