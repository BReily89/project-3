require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UsersController = require('./routes/UsersController');
const RoutinesController = require('./routes/RoutinesController');
const ExerciseController = require('./routes/ExerciseController');

mongoose.Promise = global.Promise;

const app = express()

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true})
const connection = mongoose.connection


connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
}); 
app.use(express.static(`${__dirname}/client/build/`));
app.use(bodyParser.json());
app.use('/api/users', UsersController)
app.use('/api/routines', RoutinesController)
app.use('/api/routines/:id/exercise', ExerciseController)
app.get('/', (req,res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port ", PORT);
})