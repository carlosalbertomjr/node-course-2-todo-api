//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: "Eat launch"}).then((result) => {
  //   console.log(result);
  // }, (err) => {});
  // deleteOne
  // db.collection('Todos').deleteOne({text: "Walk the dog"}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({complete: false}).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log(err);
  // });

  
  db.close();
});
