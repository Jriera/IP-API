import sharp = require('sharp');

/** Function that resizes an input image and outputs it
 * with the dimensions specified in the parameters
 * @param inFile This is the name of the input image
 * @param widthValue This is the final width of the input image
 * @param heightValue This is the final height if the input image
 * @param outFile This is the path (and name) of the transformed image
*/

const resizeImage = async (
	inFile: string,
	widthValue: number,
	heightValue: number,
	outFile: string
) => {
	sharp(`assets/images/${inFile}`)
		.resize({ width: widthValue, height: heightValue })
		.jpeg()
		.toFile(outFile, (err, info) => {
			console.log(info);
			console.log(err);
		});
};

export default resizeImage;
