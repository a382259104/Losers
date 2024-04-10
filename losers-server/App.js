import express from 'express'
import cors from "cors";
import Hello from './API/Hello.js'
import Projects from './API/TeamAPI.js'
import ProejectStatusAPI from './API/ProjectStatusAPI.js'

const app = express()
app.use(cors());
app.use(express.json());

Hello(app)
Projects(app)
ProejectStatusAPI(app)

app.listen(process.env.PORT || 4001)