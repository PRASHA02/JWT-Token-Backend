require('dotenv').config()

require('express-async-errors')

const express = require('express');

const connectDB = require('./config/db')

const notFoundMiddleware = require('./middlewares/notFound')

const errorHandlerMiddleware = require('./middlewares/error-handler')

const router = require('./routes/router')

const app = express()

app.use(express.static('./public'))

app.use(express.json())

app.use('/api/v1',router)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5001

const start = async()=>{
    try{
        await connectDB()
        app.listen(port,()=>{
            console.log(`Listening to port ${port}...`)
        })
    }catch(err){
        console.log("Something error occured while connecting to DB")
        process.exit(1)
    }
}

start()