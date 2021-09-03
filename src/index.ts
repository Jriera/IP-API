import express from 'express';

const app = express();
const port = 3000;


//endpoint set up 
//TODO: refactor to make use of routes
app.get('/api',(req,res)=>{
	res.send('Connected to api');
});

//server initilize on port 3000;
app.listen(port,()=>{
	console.log(`server running on localhost:${port}`);
});