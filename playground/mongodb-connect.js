// const MongoClient = require('mongodb').MongoClient; // MongoClient lets us connect to a mongo server and issue commands to manipulate the database
const {MongoClient, ObjectID} = require('mongodb'); // destructing objects

// this connects to the database. This is a method that takes 2 arguments: 1st is a string, a URL where your databse lives (in production ie AWS/Heroku URL), localhost URL. 2nd arg is a callback function, it will fire after the connection has either succeeded or failed.
// In the 1st argument, after the port number, we want to specify which database we want to connect to. In MongoDB, if we want to make a new databse, we can simply give it a name e.g. 'TodoApp' or 'Users' just like in line 5. We can connect to it and manipulate it. However, in Robomongo/Robo 3T, Robo is not going to create the database until we start adding data into it
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.'); // return statement will prevent the rest of the function from executing. As soon as you return a function, the program stops, meaning if an error does occur, the message will get logged, the function will stop and we'll never see the 'Connected to MongoDb server.' message. Or you can just use an 'else' statement
  }
  console.log('Connected to MongoDB server.');

  // db.collection('Users').insertOne({
  //   name: 'Olivia',
  //   age: 23,
  //   location: 'Australia'
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Unable to insert todo', err);
  //   } else {
  //     console.log(result.ops[0]._id.getTimestamp());
  //   }
  // });

  // db.collection('Todos').insertOne({
  //   text: 'Somthing to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   } else {
  //     console.log(JSON.stringify(result.ops, undefined, 2)); // .ops is going to store all of the docs that were inserted, ie insertOne so it's just going to be our one document. It's an array of all the documents that got inserted
  //   }
  // }); // We can start adding some data to the collection by calling db.collection(). It takes only 1 argument, the string name of the collection you want to insert into. Like the collection itself 'TodoApp' on line 5, you don't need to create this collection first; you can simply give it a name 'Todos' and you can start inserting into it. You don't need to run any command to create it.
  // .insertOne is a method available on our collection. It lets you insert a new document into your collection. 2 args: 1st object, which stores various key/value pairs; 2nd callback function, it will get fired when things either fail or go well. Line 14, You're going to get an error arg which may/may not exist and you'll also get the result argument which is going to be provided if things went well inside of the arrow callback function itself.

  db.close(); // This closes the connection with the MongoDB server.
});

// terminal $ node playground/mongodb-connect.js then check in Robomongo
