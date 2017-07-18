const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/users');

Todo.remove({}).then((result) => {
  console.log(result);
});

Todo.findOneAndRemove({_id: '595c3417be8bc9806d92a644'}).then((todo) => {});
Todo.findByIdAndRemove('595c3417be8bc9806d92a644').then((todo) => {
  console.log(todo);
});
