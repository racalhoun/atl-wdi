//require express package
var express = require('express');
//save an express module as 'app'
var app = express();
// assigning 3000 as our port
const hbs = require('hbs');


app.set("view engine", "hbs");

app.get('/greeting', function(req, res) {
  const hello = "Welcome to Pizza Express!!"
  res.render('greeting', { // must be the file name!
      hello: hello
  })
})

app.get('/topping/:stuff', function(req, res) {
  console.log(req)
  const stuff = req.params.stuff;
  res.render('topping', {
     top: stuff
  })
})
app.get('/order/10/med', function(req, res, next) {
  
       res.send("Your order for 10 medium pizzas will be ready in 1 minute!");
   });



















var port = 3000;
// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});
