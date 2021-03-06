"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imageProcess_1 = __importDefault(require("./imageProcess"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class AnImage {
    constructor() {
        this.filename = '';
        this.width = 0;
        this.height = 0;
        this.location = '';
    }
}
/**
 * @param req Takes the requests sent to the server
 * @param res Sends the responses from the server
 * @description performs the main work in the image prcess. It creates an image object and assings its properties
 * from the url that calls this middleware. If the image created exists already the module sends the stored image
 * instead of generating a new one. If the image object instance does not exist, it passes it into the imageProcess module
 * and creates the new image and sends it to the client afterwards
 * @returns:void Nothing is return since the image generated is not returned by the module
 * but sent to client via the res.sendFile property from Response parameter
 */
const imageMiddleware = async (req, res) => {
    try {
        const modifyImage = new AnImage();
        modifyImage.filename = req.query.filename;
        modifyImage.height = +req.query.height;
        modifyImage.width = +req.query.width;
        modifyImage.location = `assets/thumbnails/${modifyImage.filename} ${modifyImage.width}x${modifyImage.height}.jpg`;
        if (typeof modifyImage.filename != 'string') {
            res.send('check your image info');
            modifyImage.width = 1;
            modifyImage.height = 1;
        }
        if (fs_1.default.existsSync(modifyImage.location)) {
            res.sendFile(path_1.default.resolve(`./assets/thumbnails/${modifyImage.filename} ${modifyImage.width}x${modifyImage.height}.jpg`));
            console.log('serving cached image');
        }
        else {
            await (0, imageProcess_1.default)(`${modifyImage.filename}.jpg`, modifyImage.width, modifyImage.height, modifyImage.location);
            setTimeout(() => {
                res.sendFile(path_1.default.resolve(`./assets/thumbnails/${modifyImage.filename} ${modifyImage.width}x${modifyImage.height}.jpg`));
            }, 100);
            console.log('new image generated');
        }
    }
    catch (err) {
        console.log(err);
    }
};
exports.default = imageMiddleware;
