//require express package
var express = require('express');
//save an express module as 'app'
var app = express();
// assigning 3000 as our port
const hbs = require('hbs')
app.set("view engine", "hbs");

app.get('/greeting', function(req, res) {
  const hello = "Welcome to Pizza Express!!"
  res.render('greeting', { // must be the file name!
      hello: hello
  })
})

app.get('/topping/:stuff', function(req, res) {
  const stuff = req.params.stuff
  res.render('topping', {
     top: stuff
  })
})
app.all('/order/:amount/:size', function(req, res, next) {
  const size = req.params.size;
  const amount = req.params.amount;
    res.render('order', {// need to make a third variable and assign the size and ampunt to an array.
    many: amount,
    size: size // this should be the name of the array variabe.
  })
})



















var port = 3000;
// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});
