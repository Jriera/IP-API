import express from "express";
//const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args:T[]));
import fetch from 'node-fetch'

const statusGetter = async (url:string)=>{
    const serverCode =(await fetch(url)).status;
    return serverCode;
}

describe('Confirm that server and endpoint are reachable',()=>{
    it('checks if the server is up',async ()=>{
      
     
        expect(await statusGetter('http://localhost:300')).toEqual(200) 
    })

    it('checks the endpoint is up', async () =>  {
        expect(await statusGetter('http://localhost:3000/api')).toEqual(200);
    })
})




            
        