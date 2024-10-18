const express = require('express');
const router = express.Router();
const data = require('../config/db');
const ProductController=require('../controller/productController')

router.get('/', ProductController.getproducts);
router.post('/',ProductController.postproducts);
router.put('/:id',ProductController.putproducts);
router.delete('/:id',ProductController.deleteproducts);
router.get('/:id',ProductController.singleproducts)

module.exports = router;
