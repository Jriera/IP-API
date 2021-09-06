import express from 'express';
import resizeImage from '../imageProcess';
import path from 'path';
import fs from 'fs';

const routes = express.Router();
/**
 * function get for the Router generated
 */
routes.get('/', (req, res) => {
	const filename = req.query.filename as string;
	const height = +(req.query.height as string);
	const width = +(req.query.width as string);
	const endName = `assets/thumbnails/${filename} ${width}x${height}.jpg`;

	if (fs.existsSync(endName)) {
		res.sendFile(
			path.resolve(`./assets/thumbnails/${filename} ${width}x${height}.jpg`)
		);
		console.log('serving cached image');
	} else {
		resizeImage(`${filename}.jpg`, width, height, endName);

		setTimeout(() => {
			res.sendFile(
				path.resolve(`./assets/thumbnails/${filename} ${width}x${height}.jpg`)
			);
		}, 100);
		console.log('new image generated');
	}
});

export default routes;
