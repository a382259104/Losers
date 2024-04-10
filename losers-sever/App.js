import express from "express";
import { mongoose } from "mongoose";
import UserRoutes from "./Users/routes";

const app = express();

const CONNECTION_STRING = `mongodb+srv://a382259104:zXu2y332Fxc9olNj@winners.uad2aje.mongodb.net/?retryWrites=true&w=majority&appName=Winners/Winners`

mongoose.connect(CONNECTION_STRING);

UserRoutes(app)

app.listen(process.env.PORT);