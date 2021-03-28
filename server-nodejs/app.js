const express = require('express')
const path = require('path')
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

// serve static file for production 
if (process.env.NODE_ENV = 'production') {
    // serve the vue app
    app.use(express.static(__dirname + '/public'))

    // serve as single page application 
    app.get(/.*/, (req, res, next) => {
        res.sendFile(__dirname + '/public/index.html')
    })
}

module.exports = app

