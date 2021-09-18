import express from 'express';
import imageMiddleware from '../imageMiddleware';

const routes = express.Router();

routes.get('/', imageMiddleware);



export default routes;
