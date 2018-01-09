// Mongoose queries and ID validation section 7, lecture 77
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user'); 

var id = '5a541ce997e084923fda8733';

// ObjectID.isValid returns tru if valid/false if invalid
if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

Todo.find({
  _id: id // find() will find the first data matching this id
}).then((todos) => { // plural because we're getting an array of documents
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo) => { // singular todo because we are getting single document
  console.log('Todos', todo);
});

Todo.findById(id).then((todo) => {
  if (!todo) { // if cannot find id
    return console.log('Id not found');
  }
  console.log('Todo by Id', todo);
}).catch((error) => console.log(error));

// http://mongoosejs.com/docs/queries.html

let userId = '5a4f5d47caee1776273177bb';

User.find({
  _id: userId
}).then((users) => {
  console.log('Users', users);
});

User.findOne({
  _id: userId
}).then((user) => {
  console.log('Users', user);
});

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (error) => {
  console.log(error);
});
