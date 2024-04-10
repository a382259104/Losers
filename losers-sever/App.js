import express from 'express'
import Hello from './API/Hello'

const app = express()
Hello(app)


app.listen(process.env.PORT || 4001)