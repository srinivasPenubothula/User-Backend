require('dotenv').config()

const express=require('express')
const app=express()
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true})
const db=mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to Database'))
app.use(express.json())
const usersRouter=require('./routes/users')
app.use('/users',usersRouter)
app.listen(1500, () => console.log('Server Started'))