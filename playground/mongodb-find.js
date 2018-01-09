// const MongoClient = require('mongodb').MongoClient; // MongoClient lets us connect to a mongo server and issue commands to manipulate the database
const {MongoClient, ObjectID} = require('mongodb'); // destructing objects

// this connects to the database. This is a method that takes 2 arguments: 1st is a string, a URL where your databse lives (in production ie AWS/Heroku URL), localhost URL. 2nd arg is a callback function, it will fire after the connection has either succeeded or failed.
// In the 1st argument, after the port number, we want to specify which database we want to connect to. In MongoDB, if we want to make a new databse, we can simply give it a name e.g. 'TodoApp' or 'Users' just like in line 5. We can connect to it and manipulate it. However, in Robomongo/Robo 3T, Robo is not going to create the database until we start adding data into it
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.'); // return statement will prevent the rest of the function from executing. As soon as you return a function, the program stops, meaning if an error does occur, the message will get logged, the function will stop and we'll never see the 'Connected to MongoDb server.' message. Or you can just use an 'else' statement
  }
  console.log('Connected to MongoDB server.');

  // query our data. we're fetching some data here with .find()
  db.collection('Todos').find({
    _id: new ObjectID('5a4f1407395a39d75b019b6a') // To find data by id, we can't just do _id: '5a4eee3dbe8582221612fa08', it won't work. We have to do it this way instead. We can call a new ObjectID because of line 2, we destructured an object and pulled ObjectID from mongodb and set it equal to variable ObjectID.
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  }); // .find() can be empty: this fetches EVERYTHING. .toArray returns a promise so we can tack on a .then

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({age: 21}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  // https://mongodb.github.io/node-mongodb-native/2.2/api/Cursor.html#count

  // db.close(); // This closes the connection with the MongoDB server.
});

// terminal $ node playground/mongodb-connect.js then check in Robomongo
