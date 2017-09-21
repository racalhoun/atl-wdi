var path = require('path');
var express = require('express');
var hbs = require('hbs');
var app = express();


var pirateController = require('./controllers/pirates.js');
app.set("view engine", "hbs");
app.use("/pirates", pirateController);












app.get('/', function(req,res) {
  res.send('ARRRRRRGGGGGGG!');
});




const port = 3000;
app.listen(port, () =>{
    console.log('Ahoy Matie!' + port);
});