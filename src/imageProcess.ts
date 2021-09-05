import sharp =require('sharp') ;



const resizeImage = async (inFile:string,widthValue:number,heightValue:number,outFile:string) => {
    
	sharp(`assets/images/${inFile}`)
		.resize({ width: widthValue,height:heightValue})
		.jpeg()
		.toFile(outFile, (err, info) => {
			console.log(info);
			console.log(err);
		});};
    
        


export default resizeImage;
