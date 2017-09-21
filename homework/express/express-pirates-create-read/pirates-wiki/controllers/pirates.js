//your code below
//requirements
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//all routes for /pirate
router.get('/', function(req, res) {
    res.render('pirates/index',{
        pirates: pirates
    })
    
});
router.get('/new', function(req,res){
    res.render('pirates/new')
    
});
router.get('/:id', function(req, res){  //This must be last in the get order due to the variable :id in the file path.
     const id = parseInt(req.params.id);
     const pirate = pirates[id];
     res.render('pirates/show', {
        pirates: pirate
     })
     
});


router.post('/new', function(req, res) {
    const newPirates =  req.body;
    pirate.pirates.push(newPirates)
    res.redirect('/');     

});


//exports
module.exports = router;