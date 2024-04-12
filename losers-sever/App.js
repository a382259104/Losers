import express from "express";
import { mongoose } from "mongoose";
import UserRoutes from "./Users/routes.js";

const app = express();

// const CONNECTION_STRING = "mongodb+srv://a382259104:lyf030920@cluster0.llb0n7s.mongodb.net/kanbas?retryWrites=true&w=majority&appName=Cluster0";
// const CONNECTION_STRING = "mongodb+srv://a382259104:zXu2y332Fxc9olNj@winners.uad2aje.mongodb.net/Winners?retryWrites=true&w=majority";

const CONNECTION_STRING = "mongodb+srv://a382259104:zXu2y332Fxc9olNj@winners.uad2aje.mongodb.net/?retryWrites=true&w=majority&appName=Winners/winnie"
// const CONNECTION_STRING = "mongodb://127.0.0.1:27017/winnie"


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


app.use(express.json())


UserRoutes(app)

app.listen(process.env.PORT || 4000);