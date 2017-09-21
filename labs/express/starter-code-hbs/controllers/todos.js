const express = require('express');
const router = express.Router();
const data = require('../data.js');
router.get('/', function(req,res) {  // always use router.get- NOT app.get!
   res.render('todos/index', {
      todos: data.seededTodos//data here and the variable data above are linked and must carry the same name.
    });
  });
  /*NEW TODOS*/
  router.get('/new', (req, res) =>{
    res.render('todos/new');
})
/*SHOW TODOS*/
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id); //route parameter
    const todo = data.seededTodos[id];
    
    if (!todo){
        res.render('todos/show', {
            error: "No todo found with this id"
        })
    }  else{
        res.render('todos/show', {
            todo: todo
        })
    }
})
router.post('/', (req, res)=>{
 console.log(req.body);
 const newTodo = req.body;

 data.seededTodos.push(newTodo);
 res.redirect('/todos');
});



  module.exports = router;