//import express body-parser and cors modules
var express = require('express')
var bodyparser = require('body-parser')
var cors = require('cors')
var User =require('./controller/user.js');


//create rest object
var app = express()

//set JSON as MIME type
app.use(bodyparser.json())

//client not sending from data -> encoding to JSON
app.use(bodyparser.urlencoded({extended : false}))
app.use(express.static(__dirname + '/html')); //__dir and not _dir

app.use('/logbook', User);
//enable CORS -> Cross Origin Resourse Sharing
app.use(cors())
let port = process.env.PORT || 8080
//import fetch insert update delete modules


//assign port no
app.listen(port,()=>{
    console.log("Server listening port no "+port)
})


