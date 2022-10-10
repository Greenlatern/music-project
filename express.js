// We need to use 'require' in order to tell the computer that we are using a outside module (library) called express
const express = require('express');

// We are activating the express module and renaming it as 'app' for future purposes
// for as easier naming convention 
const app = express();

// Making a GET request
app.get('/', function(req, res, next) {
    console.log('Hey! Your server is working and someone hit the home page!!!!')
})

//Making a GET request that sends back regular html
app.get('/foo', function(req, res, next) {
    console.log('Someone hit foo!!!')
    res.send('Hey! You are accessing this endpoint!!!')
})

//Making a post request that returns json data
app.post('/foo', function(req, res, next) {
    console.log('Our POST WAS HIT')
    res.json({message: 'You are accessing the POST /foo endpoint!'})
})

// We need to make sure that we tell the server where to listen out for requests
// We are telling the server to listen out for requests specifically on port 3001, 
// but we can name any port that is not currently in use
app.listen(3001, function() {
    console.log('Listening on port 3001')
})