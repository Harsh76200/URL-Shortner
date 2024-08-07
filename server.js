const express = require('express')
require('dotenv').config();
const mongoose = require('mongoose')

const app = express()


const PORT  = process.env.PORT 



mongoose.connect(process.env.MONGOURL)

const db = mongoose.connection;

db.on('error',()=>{
      console.log('Eror');
})
db.once('open',()=>{
    console.log("Mongodb Connected");
})

app.set('view engine' ,'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// link router
const urlRouter = require('./routes/urlRout')
app.use('/', urlRouter)


app.listen(PORT, ()=>{
     console.log("server is running");
})