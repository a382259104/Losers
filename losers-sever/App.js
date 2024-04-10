import express from "express";
import { mongoose } from "mongoose";
import UserRoutes from "./Users/routes.js";

const app = express();

const CONNECTION_STRING = `mongodb+srv://a382259104:zXu2y332Fxc9olNj@winners.uad2aje.mongodb.net/?retryWrites=true&w=majority&appName=Winners/Winners`

mongoose.connect(CONNECTION_STRING);

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


UserRoutes(app)

app.listen(process.env.PORT);