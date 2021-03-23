const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
app.use(morgan('dev'))

const itemRouter = require('./routes/itemRoute')

// body parser, reads data from body into req.body
app.use(express.json())

// allow cors
app.use(cors())

// Route for the API
app.use('/api/items', itemRouter)



module.exports = app

