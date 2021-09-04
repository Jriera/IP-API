import {promises as fs} from "fs";
import {constants} from "fs";


const fileCheck= (path:string) =>{

    try {
        fs.access(path, constants.F_OK | constants.R_OK);
        console.log('can access');
        return true;
      } catch {
        console.error('cannot access');
        return false;
      }

}


export default fileCheck;