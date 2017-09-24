/* packages */
var path        = require('path');
// above we are requiring the path package to communicate across files- assigned to variable
var logger      = require('morgan');
//
var express     = require('express');

var hbs         = require('hbs');

const bodyParser = require('body-parser');

var methodOverride = require('method-override');

/* app settings*/

var app         = express();

var port        = process.env.PORT || 3001;

/* set up the application params*/

const todosController = require('./controllers/todos');

// log
app.use(methodOverride('_method'));//the _method corresponds to the method in the middleware in the index.hbs
app.use( logger('dev'));
app.use (bodyParser.urlencoded({
  extended: true
}));
/*Views*/
app.set('view engine', 'hbs');

/*CONTROLLERS*/
app.use('/todos', todosController);
/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});

/* INDEX TODOS */
/*app.get('/todos', function(req,res) {
  var seededTodos = [
    {
      description: "get beer",
      urgent: true
    }, {
      description: "dry cleaning",
      urgent: false
    }
  ];

  res.render('todos/index', {
    todos: seededTodos
  });
});*/

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
