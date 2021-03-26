
//CRUD OPERATION 
const Item = require('../models/itemModel')

/**
 * @GET all Item 
 */
exports.getAllItem = async (req, res, next) => {
    const items = await Item.find()
    res.status(200).json({
        items
    })
}

/**
 * @GET single Item 
 */
exports.getSingleItem = async (req, res, next) => {
    const item = await Item.findById(req.params.id)
    res.status(200).json({
        item
    })
}

/**
 * @Create an Item 
 */
exports.createItem = async (req, res, next) => {
    const item = await Item.create(req.body)
    
    if (!item) {
        return res.status(400).json({
            status:'fail'
        })
    }
    res.status(201).json({
        item
    })
}

/**
 * @Update an item  
 */
exports.updateItem = async (req, res, next) => {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators:true
    })
    if (!item) {
        return res.status(400).json({
            status:'fail'
        })
    }
    res.status(200).json({
       item
    })
}

/**
 * @Delete Item  
 */
exports.deleteItem = async (req, res, next) => {
    const item = await Item.findByIdAndDelete(req.params.id)
    if (!item) {
        return res.status(404).json({
            status: 'fail',
            message:'No data found'
        })
    }
    res.status(200).json({
        status:'success'
    })
}