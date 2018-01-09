var mongoose = require('mongoose');

// Here we're creating a mongoose.model so mongoose knows how to store our data.
// validators: http://mongoosejs.com/docs/validation.html
var Todo = mongoose.model('Todo', {
  text: {
    type: String, // if user enters number or boolean, it'll still work; mongoose will wrap them in quotes
    required: true, //this and below are validators, making sure we have valid data
    minlength: 1,
    trim: 1 // trims any white space before and after first&last character
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({ // we're creating a new instance of the Todo model from line 9
//   text: 'Cook dinner'
// });
// // Creating an instance will not update the database, we need to use .save which returns a promise
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc); //success promise (ie resolve)
// }, (error) => {
//   console.log('Unable to save todo'); // failed promise (ie reject)
// });


// new todo instance
// let anotherTodo = new Todo({
//   text: 'Send a cute message to babe',
//   completed: true,
//   completedAt: 1900
// });
//
// anotherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (error) => {
//   console.log('Unable to save todo');
// });

module.exports = {
  Todo
};
