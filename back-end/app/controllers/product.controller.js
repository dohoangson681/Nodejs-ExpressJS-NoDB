const e = require('express');
const {
    getListService ,
    getDetailService ,
    addProductService ,
    updateProductService ,
    deleteProductService
    } = require('../services/product.service') ; 

// get product list
const getProductList = (req , res)=>{
    let data = getListService() ;
    if(data) res.status(200).send(data) ;
    else res.send(404).send("Data not found !") ;
}
// get product detail
const getProductDetailt = (req , res)=>{
    const id = req.params.id ; 
    let productDetail = getDetailService(id) ;
    if(productDetail) res.status(200).send(productDetail) ;
    else res.status(404).send("Product not found !") ;
}
// add product
const addProduct = (req , res)=>{
    let product = req.body ; 
    // product = {...product , id : Math.random().toString() }
    // productList = [...productList , product ] ;
    // res.status(200).send(productList) ; 
    let newList = addProductService(product) ; 
    res.status(201).send(newList) ; 
}
// update product
const updateProduct = (req , res)=>{
    const id = req.params.id ; 
    const newProduct= req.body ; 
    let listUpdated = updateProductService(id , newProduct ) ;
    if(listUpdated) res.status(200).send(listUpdated) ;
    else res.status(401).send("Cant find the product with ID !") ;
}
// delete product
const deleteProduct = (req , res)=>{
    const id = req.params.id ; 
    let listDeleted = deleteProductService(id) ;
    if(listDeleted) {
        res.status(200).send(listDeleted) ;
    }else {
        res.status(404).send("Cant find the product !") ;
    }
}

module.exports = {
    getProductList ,
    getProductDetailt ,
    addProduct ,
    updateProduct ,
    deleteProduct
}