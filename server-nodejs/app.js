const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(morgan('dev'))

const itemRouter = require('./routes/itemRoute')

// serve static file 
//app.use(express.static(path.join(__dirname,'public')))
console.log(path.join(__dirname,'../client-vue/dist'));
// body parser, reads data from body into req.body
app.use(express.json())

// allow cors
app.use(cors())

// Route for the API
app.use('/api/items', itemRouter)



module.exports = app

