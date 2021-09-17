import express from 'express';
import resizeImage from '../imageProcess';
import path from 'path';
import fs from 'fs';
import imageMiddleware from '../imageMiddleware';

const routes = express.Router();

routes.get('/', imageMiddleware);

export default routes;
