//Configuración y dependencias
const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')

// Configuración de Mongoose
console.log('Starting connection to MONGODB')
mongoose.connect(config.MONGODB_URI)
    .then(console.log('Connected succesfully'))
    .catch(error => console.error(error))

// MIDDLEWARE global
app.use(cors())
app.use(express.json())

// ROUTES
app.use('/api/blogs', blogsRouter)

module.exports = app