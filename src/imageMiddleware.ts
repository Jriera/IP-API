import { Request, Response } from 'express';
import resizeImage from './imageProcess';
import path from 'path';
import fs from 'fs';



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

const imageMiddleware = async (req: Request, res: Response): Promise<void> => {
    try {
        
        const filename = req.query.filename as string;
        let height = +(req.query.height as string);
        let width = +(req.query.width as string);
        const location = `./assets/thumbnails/${filename}_${width}x${height}.jpg`;
        if (typeof filename != 'string') {
            res.send('Your image name should be a string');
            width = 1;
            height = 1;
        }

        if (Number.isNaN(width) === true || width <= 0) {
            res.send(
                'Your width is not a valid value. It must be a positive integer'
            );
            width = 1;
            height = 1;
        }

        if (Number.isNaN(height) === true || height <= 0) {
            res.send(
                'Your height is not a valid value. It must be a positive integer'
            );
            width = 1;
            height = 1;
        }
        if (fs.existsSync(location)) {
            res.sendFile(path.resolve(location));
            console.log('serving cached image');
        } else {
            await resizeImage(
                `${filename}.jpg`,
                width,
                height,
                location
            );

            setTimeout(() => {
                res.sendFile(path.resolve(location));
            }, 100);
            console.log('new image generated');
        }
    } catch (err) {
        console.log(err);
    }
};

export default imageMiddleware;
