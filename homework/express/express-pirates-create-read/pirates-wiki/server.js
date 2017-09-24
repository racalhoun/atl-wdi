var path = require('path');
var express = require('express');
var hbs = require('hbs');
var logger = require('morgan');
const bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();
var pirateController = require('./controllers/pirates.js')


app.set("view engine", "hbs");


app.use("/pirates", pirateController);
app.use(methodOverride('_method'));
app.use( logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));











// app.get('/', function(req,res) {
//   res.send('ARRRRRRGGGGGGG!');
// });




const port = 3000;
app.listen(port, () =>{
    console.log('Ahoy Matie!' + port);
});