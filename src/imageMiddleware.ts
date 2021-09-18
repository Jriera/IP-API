import { Request, Response } from 'express';
import resizeImage from './imageProcess';
import path from 'path';
import fs from 'fs';

class AnImage {
  filename = '';
  width = 0;
  height = 0;
  location = '';
}

/**
 * @param req Takes the requests sent to the server
 * @param res Sends the responses from the server
 * @description performs the main work in the image prcess. It creates an image object and assings its properties
 * from the url that calls this middleware. If the image created exists already the module sends the stored image
 * instead of generating a new one. If the image object instance does not exist, it passes it into the imageProcess module
 * and creates the new image and sends it to the client afterwards
 * @returns:void Nothing is return since the image generated is not returned by the module
 * but sent to client via the res.sendFile property from Response parameter
 */

const imageMiddleware = async (req: Request, res: Response) => {
	try {
		const modifyImage = new AnImage();
		modifyImage.filename = req.query.filename as string;
		modifyImage.height = +(req.query.height as string);
		modifyImage.width = +(req.query.width as string);
		modifyImage.location = `assets/thumbnails/${modifyImage.filename} ${modifyImage.width}x${modifyImage.height}.jpg`;
		if( typeof((modifyImage.filename))!='string'){
			res.send('check your image info');
			modifyImage.width=1;
			modifyImage.height=1;

		}
		if (fs.existsSync(modifyImage.location)) {
			res.sendFile(
				path.resolve(
					`./assets/thumbnails/${modifyImage.filename} ${modifyImage.width}x${modifyImage.height}.jpg`
				)
			);
			console.log('serving cached image');
		} else {
			await resizeImage(
				`${modifyImage.filename}.jpg`,
				modifyImage.width,
				modifyImage.height,
				modifyImage.location
			);

			
	
			setTimeout(() => {
				res.sendFile(
					path.resolve(
						`./assets/thumbnails/${modifyImage.filename} ${modifyImage.width}x${modifyImage.height}.jpg`
					)
				);
			}, 100);
			console.log('new image generated');
		}
	} catch (err) {
		return res.status(404).send({ message: 'Route'+req.url+' Not found.' });
		console.log(err);
	}
   
};

export default imageMiddleware;
