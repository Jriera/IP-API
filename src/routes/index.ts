import express from 'express';
import resizeImage from '../imageProcess';
import path from 'path';
import fileCheck from '../fileChecker';

const routes = express.Router();

routes.get('/', (req, res) => {
	const filename = req.query.filename as string;

	const height = +(req.query.height as string);
	const width = +(req.query.width as string);
	const endName = `assets/thumbnails/${filename} ${width}x${height}.jpg`;
	const promise = new Promise((resolve, reject) => {
		resizeImage(`${filename}.jpg`, width, height, endName);
		if (fileCheck(endName)) {
			resolve('file created successfully');
		} else {
			reject('no file was created');
		}
	})
		.then(() => {
			setTimeout(() => {
				res.sendFile(
					path.resolve(`./assets/thumbnails/${filename} ${width}x${height}.jpg`)
				);
			}, 100);
		})
		.catch((error) => {
			console.log(error);
		});
});

export default routes;
