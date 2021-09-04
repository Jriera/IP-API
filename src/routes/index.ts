import express from 'express';
import resizeImage from '../imageProcess';
import path from "path";

//import fileCheck from '../fileChecker';

const routes = express.Router();

routes.get('/',async function (req,res){

 
  
  
   let filename=(req.query.filename as string);
   let endName =`assets/images/${filename}Resize.jpg`;
   let height=+(req.query.height as string );
   let width=+(req.query.width as string);

   try{resizeImage(`${filename}.jpg`,width,height,endName);
    }catch(error){
      console.log(error)
    }
setTimeout(() => {
  try {res.sendFile(path.resolve(`./assets/images/${filename}Resize.jpg`));
  } catch(error){
    console.log(error)
  }
}, 1000);
  
         
  });

export default routes; 