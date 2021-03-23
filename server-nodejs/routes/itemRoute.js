const express = require('express')
const itemController = require('../controllers/itemController')
const router = express.Router()


router
    .route('/') // api/items
    .get(itemController.getAllItem)
    .post(itemController.createItem)

router
    .route('/:id') // api/items/123ABC
    .get(itemController.getSingleItem)
    .patch(itemController.updateItem)
    .delete(itemController.deleteItem)

module.exports = router