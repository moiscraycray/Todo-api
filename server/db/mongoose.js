var mongoose = require('mongoose');

// line 6 connects to database
// The difference between MongoClient and Mongoose is that the MongoClient connect method takes a callback and that is when we have access to the database. Mongoose is a lot more complex. This is good because it means our code can be a lot simpler. Mongoose is maintaining this connection over time. We don’t have to micromanage the order things happen in, mongoose takes care of that for us.
mongoose.Promise = global.Promise; // only need to set line5&6 once, no need to put it in any other file. line 5 lets us use promise in mongoose
mongoose.connect('mongodb://localhost: 27017/TodoApp');

module.exports = {
  mongoose
};// we need to export line 1
