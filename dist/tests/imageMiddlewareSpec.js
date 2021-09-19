"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args:T[]));

const node_fetch_1 = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const fs_1 = __importDefault(require("fs"));


const url = 'http://localhost:3000/api?filename=palmtunnel&width=350&height=291';
const outputFile = 'assets/thumbnails/palmtunnel 350x291.jpg';
describe('Confirm that when an Image is requested a resized image is returned', () => {
    it('checks the api url is accessible', async () =>  {
        const body = await node_fetch_1(url);
        const status = body.status;
        expect(status).toEqual(200);
    });
    it('checks the url displays an image ', async () => {
        const data = await node_fetch_1(url);
        const contentType = data.headers.get('Content-Type');
        expect(contentType).toEqual('image/jpeg');
    });
    it('checks the output file is created', () => {
        const fileCreated = fs_1.default.existsSync(outputFile);
        expect(fileCreated).toBe(true);
    });
});
