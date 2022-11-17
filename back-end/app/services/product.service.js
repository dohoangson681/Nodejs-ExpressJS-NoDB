let productList = [
    {
        id : '1' ,
        tenSP : 'Quần lót nữ Modal Air dáng bikini' ,
        img : 'https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/A26BU2103008-SM13.jpg' ,
        soLuong : 100 ,
        giaSP : '169000đ' ,
        sale : '10%'
    },
    {
        id : '2' ,
        tenSP : 'Áo bra nữ' ,
        img : 'https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/16UC22A028.jpg' ,
        soLuong : 100 ,
        giaSP : '169000đ' ,
        sale : '10%'
    },
    {
        id : '3' ,
        tenSP : 'Áo bra ren đẩy ngực có gọng' ,
        img : 'https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/16UC22A030.jpg' ,
        soLuong : 100 ,
        giaSP : '349000đ' ,
        sale : '10%'
    },
    {
        id : '4' ,
        tenSP : 'Áo bra Seamless' ,
        img : 'https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/16UE22A023.jpg' ,
        soLuong : 100 ,
        giaSP : '299000đ' ,
        sale : '10%'
    }
]
const getListService = () => {
    if(productList) {
        return productList ;
    }else return false ;
}
const getDetailService = (id) => {
    let index = productList.findIndex(product => product.id === id) ;
    if(index > -1) return productList[index] ;
    else return false ; 
}
const addProductService = (newProduct) => {
    newProduct = {...newProduct , id : Math.random().toString() }
    productList = [...productList , newProduct ] ;
    return productList ; 
}
const updateProductService = (id , newProduct) => {
    let index = productList.findIndex(product => product.id === id) ;
    if(index > -1) {
        productList[index] = {...productList[index],...newProduct} ; 
        return productList ;
    }else return false ;
}
const deleteProductService = (id) => {
    let index = productList.findIndex(product => product.id === id) ;
    if(index > -1) {
        productList.splice(index , 1) ;
        return productList ;
    }else {
        return false ;
    }
}

module.exports = {
    getListService ,
    getDetailService ,
    addProductService ,
    updateProductService ,
    deleteProductService
}