// express is a framework for Node.js to make it faster, easier and more simplistic.
const express = require('express');

// cross origin resource sharing, allowing us to access data from different sites
const cors = require('cors');
const mongoose = require('mongoose');

//loads environment variables from .env files to process.env
//it is considered bad practice to couple environment variables inside your application.
require('dotenv').config();

//creating an instance of express
const app = express();

// get the port from the process.env.port property. (process.env is the state of the system application at runtime)
const port = process.env.PORT || 5000;

//app.use middleware. used been request and response operations.
app.use(cors());

//recognise incoming request object as a JSON object
app.use(express.json());

const uri = process.env.ATLAS_URI;
//connect to MongoDB with the mongoose.connect() method.
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

//once there is a connection, console log it being successfully connected.
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// middleware mounted on the '/exercises' route, so when url '/exercises' is requested, we run the exercisesRouter route
app.use('/exercises', exercisesRouter);
// middleware mounted  on the '/users' route
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
