// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 4800 ;

const server = app.listen(port, listening);

function listening(){
    console.log(`server running on port:${port}`)
}


//get fun listening
app.get('/allData', sendData);
function sendData(req,res){
    res.send(projectData);
}
//post fun listening
app.post('/addData', addData);
function addData(req , res){
    let data = req.body ;
    console.log('server side data' ,data)

    
    //data
    projectData["date"] = data.date ;
    //temperature
    projectData["temp"] = data.temp ;
    //feel
    projectData["content"] = data.content;

    res.send(projectData);

}