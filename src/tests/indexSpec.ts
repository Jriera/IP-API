
import supertest from 'supertest';
import app from '..';


const coder = async(endpoint:string) =>{
    const appResponse =await supertest(app).get(endpoint)
    const code = appResponse.statusCode;
    return code;
}


describe('Confirm that server and endpoint are reachable', () => {
    it('Should return Ok status for server', async () => {
        expect(await coder('/')).toEqual(200);
    });

    it('Should return OK status for endpoint', async () => {
        expect(await coder('/api')).toEqual(200);
    })
});
