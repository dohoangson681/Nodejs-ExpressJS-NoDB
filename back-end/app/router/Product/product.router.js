const express = require('express') ;
const productRoute = express.Router() ;
const {
    getProductList ,
    getProductDetailt ,
    addProduct ,
    updateProduct ,
    deleteProduct
} = require('../../controllers/product.controller')
// get list
productRoute.get('/products' , getProductList ) ;
// get detail
productRoute.get('/products/:id', getProductDetailt ) ;
// add product
productRoute.post('/products', addProduct ) ;
// update product 
productRoute.put('/products/:id', updateProduct ) ;
// delete product
productRoute.delete('/products/:id', deleteProduct ) ;

module.exports = productRoute ; 