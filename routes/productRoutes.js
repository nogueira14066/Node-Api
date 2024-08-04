const express = require('express');
const Product = require('../models/productModel')
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/productController')


const router = express.Router();


//get/fetch a product from the database
router.get('/', getProducts);

//get/fetch a single product from the database
router.get('/:id', getProduct)

//update or edit a product from database
router.put('/:id', updateProduct)

//delete a product from data
router.delete('/:id', deleteProduct)

//save cdata into database
router.post('/', createProduct)


module.exports = router;