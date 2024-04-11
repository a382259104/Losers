import express from "express";
import session from "express-session";
import { mongoose } from "mongoose";
import UserRoutes from "./Users/routes.js";
import cors from "cors";

const app = express();

const CONNECTION_STRING = `mongodb+srv://a382259104:zXu2y332Fxc9olNj@winners.uad2aje.mongodb.net/?retryWrites=true&w=majority&appName=Winners`
// const CONNECTION_STRING = "mongodb://127.0.0.1:27017/winnie"

mongoose.connect(CONNECTION_STRING);
mongoose.use("Winners");

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

app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL,
}));

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}

app.use(session(sessionOptions));
app.use(express.json())


UserRoutes(app)

app.listen(process.env.PORT || 4000);