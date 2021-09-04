import sharp =require('sharp') ;



const resizeImage =  (inFile:string,widthValue:number,heightValue:number,outFile:string):void  => {
    
	sharp(`assets/images/${inFile}`)
		.resize({ width: widthValue,height:heightValue})
		.jpeg()
		.toFile(outFile, (err, info) => {
			console.log(info);
			console.log(err);
		});};
    
        


export default resizeImage;
