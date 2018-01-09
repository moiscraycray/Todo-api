var mongoose = require('mongoose');

// User
// email -require, trim, type, minlength 1
var User = mongoose.model('User', { // Originally UserEmail but we required it as 'User' in mongoose-quries in /playground
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

// creating new instance of UserEmail
// var newUser = new UserEmail({
//   email: '     olivia@example.com.au    '
// })

// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (error) => {
//   console.log('Unable to save new user');
// });

module.exports = {
  User
};
