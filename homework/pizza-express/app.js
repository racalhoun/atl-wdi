//require express package
var express = require('express');
//save an express module as 'app'
var app = express();
// assigning 3000 as our port
const hbs = require('hbs');


app.set("view engine", "hbs");

app.get('/greeting', function(req, res) {
  const hello = "Welcome to Pizza Express!!"
  res.render('greeting', {
      hello: hello
  })
})





















var port = 3000;
// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});
