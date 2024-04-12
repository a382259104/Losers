import express from "express";
import { mongoose } from "mongoose";
import cors from "cors";
import session from "express-session";


import Hello from "./API/Hello.js";
import Projects from "./API/Teams/Projects.js";
import ProjectStatusAPI from "./API/Teams/ProjectStatusAPI.js";
import UserRoutes from "./API/Users/UserRoutes.js";



const app = express();

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


app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
}));

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "123",
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



Hello(app);
Projects(app);
ProjectStatusAPI(app);

UserRoutes(app)

app.listen(process.env.PORT || 4000);