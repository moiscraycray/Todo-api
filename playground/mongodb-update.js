// const MongoClient = require('mongodb').MongoClient; // MongoClient lets us connect to a mongo server and issue commands to manipulate the database
const {MongoClient, ObjectID} = require('mongodb'); // destructing objects

// this connects to the database. This is a method that takes 2 arguments: 1st is a string, a URL where your databse lives (in production ie AWS/Heroku URL), localhost URL. 2nd arg is a callback function, it will fire after the connection has either succeeded or failed.
// In the 1st argument, after the port number, we want to specify which database we want to connect to. In MongoDB, if we want to make a new databse, we can simply give it a name e.g. 'TodoApp' or 'Users' just like in line 5. We can connect to it and manipulate it. However, in Robomongo/Robo 3T, Robo is not going to create the database until we start adding data into it
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.'); // return statement will prevent the rest of the function from executing. As soon as you return a function, the program stops, meaning if an error does occur, the message will get logged, the function will stop and we'll never see the 'Connected to MongoDb server.' message. Or you can just use an 'else' statement
  }
  console.log('Connected to MongoDB server.');

  // findOneAndUpdate - similar to findOneAndDelete, it lets us update an item and get the new document back. So if I update a todo, set it to complete: true, I will get that document back in the response.
  // https://docs.mongodb.com/manual/reference/operator/update/
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a4f2f8e395a39d75b01a05c')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a4ef7102a8f06232f2f63b4')
  }, {
    $set: {
      name: 'Olivia'
    },
    $inc: {
      age: 4
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close(); // This closes the connection with the MongoDB server.
});

// terminal $ node playground/mongodb-connect.js then check in Robomongo
