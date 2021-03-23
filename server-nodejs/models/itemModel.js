const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    text: {
        type:String,
    },
    description: {
        type: String
    },
    reminder: {
        type: Boolean
    }
})

const Item = mongoose.model('Item', itemSchema)

module.exports = Item