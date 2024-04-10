import express from "express";
import { mongoose } from "mongoose";

const app = express();

const CONNECTION_STRING = `mongodb+srv://a382259104:zXu2y332Fxc9olNj@winners.uad2aje.mongodb.net/?retryWrites=true&w=majority&appName=Winners/Winners`

mongoose.connect(CONNECTION_STRING);


app.listen(process.env.PORT);