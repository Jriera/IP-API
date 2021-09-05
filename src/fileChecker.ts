import fs from 'fs';
import { promises as fsPromises } from 'fs';
import { constants } from 'fs';

/* const fileCheck = (path: string) => {
	try {
		fsPromises.access(path, constants.F_OK | constants.R_OK);
		console.log('can access');
		return true;
	} catch {
		console.error('cannot access');
		return false;
	}
}; */

/**
 * @param filePath : string
 * @description Waits for 15 seconds for a file to exist.
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
