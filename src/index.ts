import express from 'express';
import routes from './routes';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

const app = express();
const port = 3000;

//endpoint set up using a route

app.use('/api', routes);

app.use(express.static('Public'));

//server initilize on port 3000;
app.listen(process.env.PORT || port, () => {
    console.log(`server running on localhost:${port}`);
});
export default app;
