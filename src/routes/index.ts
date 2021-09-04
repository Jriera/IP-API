import express from 'express';
import resizeImage from '../imageProcess';
import path from "path";
import { dirname } from 'path/posix';
//import fileCheck from '../fileChecker';

const routes = express.Router();

routes.get('/',(req,res)=>{

 
  //res.sendFile(path.resolve("./assets/images/index.html"));
  res.sendFile(path.resolve("./assets/images/ensenadaSmall.jpg"));
   let filename=(req.query.filename as string);
   let originalURL= req.originalUrl
   let endName =`assets/images/ensenadaSmall.jpg`;
   let height=+(req.query.height as string );
   let width=+(req.query.width as string);
   let heightType= typeof(height);
   let filenameType= typeof(filename);
   let widthType = typeof(width);
   let originDir=`assets/images/${filename}`;
   const anAbsolutePath= path.join(__dirname,"src/routes/assets/images/smallensenada.jpg");
   const systemAbsolutePath="C:\Users\idjor\Udacity FS Nanodegree\Backend dev\IP-API\assets\images\smallensenada.jpg"
   const pathCheck = ():boolean =>{

      if (anAbsolutePath==systemAbsolutePath) return true;
      else return false;

   }
    /* res.send({message: 'No blah Found added what is dirname',
    url:originalURL,
    height:height,
    heightType:heightType,
    width:width,
    widthType:widthType,
    filename:filename,
    filenameType:filenameType,
    endName:endName,
    fullPath:anAbsolutePath,
    pathcheck:pathCheck(),
    dirname:__dirname
  });  */
    try{resizeImage(`${filename}.jpg`,width,height,endName);
    }catch(error){
      console.log(error)
    }

   
   //C:\Users\idjor\Udacity FS Nanodegree\Backend dev\IP-API\assets\images\smallensenada.jpg
   //C:\Users\idjor\Udacity FS Nanodegree\Backend dev\IP-API\src\routes\src\routes\assets\\images\\smallensenada.jpg"        
  });

export default routes; 