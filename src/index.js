import express from "express";
import dotenv from  'dotenv'
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors'

import movieRouter from './routes/movie.js'

dotenv.config()

const app = express()

app.use(cors());
app.use(bodyParser.json({limit: "30mb"}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));


const connectToDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        app.listen(process.env.PORT)
        console.log(`Connected To DB And Listening To Server On Port : ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
}


const listening = (req, res) => {
    res.send('Working')
}


// Routes 
app.use('/', movieRouter)


connectToDB()
