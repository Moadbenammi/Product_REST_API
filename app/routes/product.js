const express = require('express');
const { getAllProducts, getOneProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.js');
const router = express.Router();
const {auth} =  require("../middleware/auth.js");


router.get('/', getAllProducts);
router.get('/:id', getOneProduct);
router.post('/',auth, createProduct);
router.patch('/:id', auth, updateProduct);
router.delete('/:id', auth, deleteProduct);


module.exports = router;