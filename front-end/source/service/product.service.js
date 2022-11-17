import { http } from "../setting/setting.js";
export default class ProductService  {
    getProductList () {
        return http.get('/products') ; 
    }
    addProductList (newProduct) {
        return http.post('/products' , newProduct ) ; 
    }
    deleteProductService (id) {
        return http.delete(`/products/${id}`) ; 
    }
    getProductDetailService (id) {
        return http.get(`/products/${id}`) ; 
    }
    updateProductService (id , newProduct) {
        return http.put(`/products/${id}` , newProduct) ;
    }
}