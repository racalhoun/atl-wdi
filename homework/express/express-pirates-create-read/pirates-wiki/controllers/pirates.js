const express = require("express");
const router = express.Router();
const pirates = require('../models/pirates.js');


//getting index route
router.get('/', (req, res) => {
    res.render('pirates/index', {
        pirates: pirates
    })
});
//getting new folder rou 
router.get('/new', (req,res) => {
    res.render('pirates/new');
    
});

//show data
router.get('/:id', (req, res) => {  //This must be last in the get order due to the variable :id in the file path.
     const id = parseInt(req.params.id);
     const pirate = pirates[id];
        res.render('pirates/show', {
         pirate: pirate
        })  
   });

   router.post('/', (req, res) => {
    const newPirates = req.body;
    pirates.push(newPirates);
    res.redirect('/pirates');     
});

//edit- entry form for new
router.get('/:id/edit', (req, res)=>{
    res.render('pirates/edit', {
        pirate:{
            
            id: req.params.id,
            name: pirates[req.params.id].name,
            birthplace: pirates[req.params.id].birthplace,
            death_year: pirates[req.params.id].death_year,
            base: pirates[req.params.id].base,
            nickname: pirates[req.params.id].nickname
        }   
    })
});
//edit-update-to print to index
router.put('/:id', (req, res) => {
    var updatePirate = pirates[req.params.id];
    updatePirate.name = req.body.name;
    updatePirate.birthplace = req.body.birthplace;
    updatePirate.death_year = req.body.death_year;
    updatePirate.base = req.body.base;
    updatePirate.nickname = req.body.nickname;
    res.redirect('/pirates');
});
//deletion
router.delete('/:id', (req, res) => {
    pirates.splice(req.params.id, 0);
    res.redirect('/pirates');
});

//exports
module.exports = router;