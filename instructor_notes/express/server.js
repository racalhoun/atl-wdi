const express = require('express');// - Line 1 and 2 are  tying the express package into the .js file
const app = express();
const hbs = require('hbs');
const mathController = require('./controllers/math.js');
app.use('/math', mathController);

app.set("view engine", "hbs");
app.get('/greeting', function(req, res) {
    console.log(req.query);
    
    res.render('greeting', {
      data: req.query.saying
    });
});












const port = 3001;
app.listen(port, ()=>{
    console.log("hello, shows_app is listening on port" + port);
})