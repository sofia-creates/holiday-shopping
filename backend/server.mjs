//imports
import express from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';

//start up access to env file configuration
dotenv.config();

// get express app
const app = express();

//activate middleware
app.use(cors());


//setup routing endpoints
// app.get('/', (req,res)=>{
//     res.send('<h1>Node is running!!<h1>')
// }) //first argument is which url to listen to

//endpoint for get
app.get('/', async(req, res)=> {
    // res.status(200).json({success:true, message: 'It is working'})
    const response = await fetch('http://localhost:5021/products')

    if(response.ok){
        const result = await response.json();
        res.status(200).json({success:true, data: result});
    }
})



//start up server and listen 
app.listen(5001, ()=> {console.log("Server is started and running on port 5001")});
