var express = require('express');
var bodyParser = require('body-parser');

const {ObjectID} = require('mongodb');

var {
  mongoose
} = require('./db/mongoose');
var {
  Todo
} = require('./models/todos');
var {
  User
} = require('./models/users');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo(req.body);

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send('ID is invalid');
  }

  Todo.findById(req.params.id).then((todo) => {
    if (!todo) {
      return res.status(404).send({});
    }
    res.status(200).send({todo});
  }, (e) => {
    res.status(400).send({});
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
