var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/todoList')

var todoSchema = new mongoose.Schema({
  subject: String,
  notes: String,
  author: String
  })

module.exports = mongoose.model('Todo', todoSchema)
