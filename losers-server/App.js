import express from "express";
import { mongoose } from "mongoose";
import Hello from "./API/Hello.js";
import Projects from "./API/Teams/Projects.js";
import ProjectStatusAPI from "./API/Teams/ProjectStatusAPI.js";
import UserRoutes from "./API/Users/UserRoutes.js";


const app = express();
app.use(express.json())

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017'
mongoose.connect(CONNECTION_STRING + "/winnie");


// Event listener for successful connection
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

// Event listener for connection error
mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

// Event listener for disconnected
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});




Hello(app);
Projects(app);
ProjectStatusAPI(app);

UserRoutes(app)

app.listen(process.env.PORT || 4000);