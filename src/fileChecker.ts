import fs from 'fs';
import { promises as fsPromises } from 'fs';
import { constants } from 'fs';

/**
 * @param filePath : string
 * @description checks for the duration of 1 second
 * for the existence of a file
 */
const watchFile = (filePath: string): boolean => {
    const watchStartTime = Date.now();
    while (!fs.existsSync(filePath)) {
        if (Date.now() - watchStartTime > 1) {
            return false;
        }
    }
    return true;
};

export default watchFile;
