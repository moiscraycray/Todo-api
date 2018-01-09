// const MongoClient = require('mongodb').MongoClient; // MongoClient lets us connect to a mongo server and issue commands to manipulate the database
const {MongoClient, ObjectID} = require('mongodb'); // destructing objects

// this connects to the database. This is a method that takes 2 arguments: 1st is a string, a URL where your databse lives (in production ie AWS/Heroku URL), localhost URL. 2nd arg is a callback function, it will fire after the connection has either succeeded or failed.
// In the 1st argument, after the port number, we want to specify which database we want to connect to. In MongoDB, if we want to make a new databse, we can simply give it a name e.g. 'TodoApp' or 'Users' just like in line 5. We can connect to it and manipulate it. However, in Robomongo/Robo 3T, Robo is not going to create the database until we start adding data into it
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.'); // return statement will prevent the rest of the function from executing. As soon as you return a function, the program stops, meaning if an error does occur, the message will get logged, the function will stop and we'll never see the 'Connected to MongoDb server.' message. Or you can just use an 'else' statement
  }
  console.log('Connected to MongoDB server.');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => { // 'Todos' is the name of the database collection you want to query into
  //   console.log(result);
  // });

  //deleteOne - works the same as deleteMany, except it only deletes the first item it sees that matches the criteria and then it stops.
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });


  //findOneAndDelete - this returns the deleted value so you can tell the user what got deleted. Usually used with id
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Olivia'}).then((result) => {
  //   console.log(result); // you don't have to use a promise, we're using one here because we want to see the results in the terminal
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID('1234')}).then((result) => {
    console.log(result);
  });

  // db.close(); // This closes the connection with the MongoDB server.
});

// terminal $ node playground/mongodb-connect.js then check in Robomongo
