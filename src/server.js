//Imports express
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const routes = require('./routes')
const cors = require('cors')

require('dotenv').config()

app.use(cors())//telling express to use cors
app.use(express.json())//tell server to use json as well
app.use(routes)//tells server to use routes in routes.js

//connects to database
mongoose.connect(process.env.DATABASE_UrL,{useNewurlParser: true, useUnifiedTopology: true})
const db = mongoose.connection 
db.on('error',(error)=> console.error(error)) 
db.once('open',() => console.log('database connected'))

//get port num from env var. telling app to listen to port number
app.listen(process.env.PORT,()=>{
    console.log("The API is running")
})