//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
const express = require('express');
const router = express.Router();
const Schema = require('../models/donuts.js');
const DonutModel = Schema.DonutsModel
//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', (req, res) =>{
DonutModel.find({})
    .then((donuts)=>{
    response.render('donuts/index', {
       donuts: donuts 
    })
})
.catch((error) =>{
    console.log(error)
});

//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', (req, res)=>{
    response.render('donuts/new')
})


//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get('/:id', (req, res)=>{
    const donutId = request.params.donutId
    DonutModel.findById(donutId)
    .then((donut)=>{
        response.render('donuts/show', {
            donut: donut
        })
    })
  })



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"
router.post('/', (req, res)=>{
    const newDonut = request.body
    DonutModel.create(newDonut)
    .then(()=>{
        response.redirect('/donuts')
    })
    .catch((error)=>{
        console.log(error)
    })
})


//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it
router.get('/:id/edit', (req, res)=>{
    const donutId = req.params.id
    DonutModel.findById(donutId)
    .then((donut)=>{
        response.render('donuts/edit',{
            donut: donut
        })
        .catch((error)=>{
            console.log(error)
        })
    })
})


//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)
router.put('/:id', (req, res)=>{
    const donutIdToUpdate = req.params.id
    const updatedDonut = req.body
    DonutModel.findByIdAndUpdate({id: donutIdToUpdate}, updatedDonut, {new: true})
    .then(()=>{
    response.redirect(`/donuts/${donutIdToUpdate}`)
    })
    .catch((error)=>{
        console.log(error)
    })
})


//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"
router.delete('/:id/delete', (req, res)=>{
    const donutId = req.params.id
    DonutModel.findByIdAndRemove(donutId)
    .then((donut)=>{
        response.redirect('/donuts')
    })
    .catch((error)=>{
        console.log(error)
    })
})
});
//======================
// EXPORTS
//======================
module.exports = router
