import supertest from 'supertest';
import fs from 'fs';
import app from '..';

describe('It checks a file is resized and saved', () => {
    it('should render an image at the endpoint', async () => {
        const appResponse = await supertest(app)
            .get('/api')
            .query({ filename: 'test', height: '100', width: '66' });
        expect(appResponse.type).toBe('image/jpeg');
    });

    it('should find an image stored', async () => {
        const appResponse = await supertest(app)
            .get('/api')
            .query({ filename: 'test', height: '100', width: '66' });

        const exists = fs.existsSync('./assets/thumbnails/test 66x100.jpg');
        expect(exists).toBe(true);
        fs.unlinkSync('./assets/thumbnails/test 66x100.jpg');
    });
});
