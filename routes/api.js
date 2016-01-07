var express = require('express');
var router = express.Router();
var Todo = require('../models/todo')

/* GET home page. */
router.get('/', function(req, res, next) {
  Todo.find(function(err, item){
    res.json(item)
  });
});

router.post('/', function(req, res){
  var data = req.body
  var todo = new Todo(data)
  todo.save()
  res.json(todo)
})

module.exports = router;
