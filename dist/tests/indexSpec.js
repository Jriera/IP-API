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
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const codeGetter = async (url)=>{
    const serverCode =(await fetch(url)).status
    
    return serverCode;
}
describe('server running correctly', () => {
    it('checks the server is up', async () =>  {
        expect(await codeGetter('http://localhost:3000')).toEqual(200);
    })
    it('checks the endpoint is up', async () =>  {
        expect(await codeGetter('http://localhost:3000/api')).toEqual(200);
    })
});
