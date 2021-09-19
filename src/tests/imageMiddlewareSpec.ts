import express from "express";
//const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args:T[]));
import fetch from 'node-fetch'
import fs from 'fs';

const statusGetter = async (url:string)=>{
    const serverCode =(await fetch(url)).status;
    return serverCode;
}
const url ='http://localhost:3000/api?filename=palmtunnel&width=350&height=291';
const outputFile='assets/thumbnails/palmtunnel 350x291.jpg';


describe('Confirm that when an Image is requested a resized image is returned',()=>{
    it('checks the api url is accessible',async ()=>{
      
     
        expect(await statusGetter(url)).toEqual(200) 
    })

    it('checks the url displays an image ', async () =>  {
        const data = await fetch(url);
        const contentType = data.headers.get('Content-Type');
        expect(contentType).toEqual('image/jpeg');
    })

    it('checks the output file is created'),()=>{
        const fileCreated =fs.existsSync(outputFile)
        expect(fileCreated).toBe(true);
    }
})

