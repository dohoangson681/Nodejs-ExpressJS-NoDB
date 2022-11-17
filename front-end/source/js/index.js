import { productService } from "../service/index.js";
import { validation } from "../validation/Validation.js";
if (!localStorage.getItem("userLogin")) {
  location.href = "./login.html";
}

const renderTable = (arr) => {
  let innerContent = "";
  arr.map((product) => {
    const { id, tenSP, img, soLuong, giaSP, sale } = product;
    innerContent += `
        <tr>
                <td>${id}</td>
                <td>${tenSP}</td>
                <td>${soLuong}</td>
                <td>${giaSP}</td>
                <td>
                <img style="width: 80px ;" src=${img} alt="">
                </td>
                <td>${sale}</td>
        <td>
          <button onclick = 'deleteProduct(${id})' class="btn btn-outline-danger">
            <i class="fa-solid fa-trash"></i>
          </button>
          <button onclick = 'openModalUpdate(${id})' data-bs-toggle="modal"
          data-bs-target="#exampleModal" class="btn btn-outline-primary">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </td>
      </tr>
        `;
  });
  document.getElementById("tbody").innerHTML = innerContent;
};
const getAPI = () => {
  let promise = productService.getProductList();
  promise
    .then((res) => {
      console.log(res);
      renderTable(res.data);
      document.querySelector(".btn-close").click();
    })
    .catch((err) => console.log(err));
};
getAPI();
const renderFormAddProduct = () => {
  document.getElementById("modal-body").innerHTML = `
    <form class="row">
                
    <div class="col-12">
      <label for="tenSP" class="form-label">Tên sản phẩm</label>
      <input type="text" class="form-control my-input" id="tenSP" />
    </div>
    
    <div class="col-12">
      <label for="soLuong" class="form-label">Số lượng</label>
      <input type="text" class="form-control my-input" id="soLuong" />
    </div>
    
    <div class="col-12">
      <label for="giaSP" class="form-label">Giá sản phẩm</label>
      <input type="text" class="form-control my-input" id="giaSP" />
    </div>
    
    <div class="col-12">
      <label for="img" class="form-label">Link sản phẩm</label>
      <input   type="text" class="form-control my-input" id="img" />
    </div>
    
    <div class="col-12">
      <label for="sale" class="form-label">Sale</label>
      <select id="sale" class="form-select my-input">
        <option value="0" >Chọn mức sale sản phẩm</option>
        <option value="10%">10%</option>
        <option value="20%">20%</option>
        <option value="30%">30%</option>
      </select>
    </div>
  </form>
    `;
};
document.getElementById('btn-open-modal-add').onclick = renderFormAddProduct ; 
const addProduct = () => {
    
  let inputEles = document.querySelectorAll(".my-input");

  let newProduct = {};
  for (let i = 0; i < inputEles.length; i++) {
    let { id, value } = inputEles[i];

      newProduct = { ...newProduct, [id]: value };

  }
  let isValid = true ; 
 if(!validation.checkEmpty(newProduct)) isValid = false ; 
if(isValid) {
    productService
    .addProductList(newProduct)
    .then((res) => {
      console.log(res);
      getAPI(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}else {
    alert("Dữ liệu không được để trống !") ;  
}

};
document.getElementById("btn-themSP").onclick = addProduct;
const deleteProduct = (id) => {
  let promise = productService.deleteProductService(id);
  promise
    .then((res) => {
      console.log(res);
      getAPI(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
window.deleteProduct = deleteProduct;
const renderFormDetail = (id) => {
  let promise = productService.getProductDetailService(id);
  promise
    .then((res) => {
      console.log(res);
      let { id, giaSP, img, sale, soLuong, tenSP } = res.data;
      document.getElementById("modal-body").innerHTML = `
        <form class="row" >
                    <div class="col-6">
                      <img id = 'img-detail' class="img-fluid" src = ${img} alt="quan lot">
                    </div>
                    <div class="col-6">
                      <div class="product-name">
                        <p style="font-weight: bold; font-size: 18px;">
                        <input id = 'tenSP' style="width:700px ;" class="input-detail" type="text" value = '${tenSP}' >
                        </p>
                        <hr>
                      </div>
                      <div class="product-detail">
                        <p>Mã sản phẩm : <input id = 'id' disabled class="input-detail" type="text" value = ${id}> </p>
                        <hr>
                        <p>Giá bán : <input id = 'giaSP' class="input-detail" type="text" value = ${giaSP}> </p>
                        <hr>
                        <p>Số lượng : <input id = 'soLuong' class="input-detail" type="text" value = ${soLuong}> </p>
                        <hr>
                        <p>Giảm giá : <input id = 'sale' class="input-detail" type="text" value = ${sale}> </p>
                        <hr>
                      </div>
                    </div>
                  </form>
        `;
    })
    .catch((err) => console.log(err));
};
const renderButtonUpdate = (id) => {
  document.querySelector(".modal-footer").innerHTML = `
            <button onclick = 'updateProduct(${id})' id="btn-update" type="button" class="btn btn-primary">
                Cập nhật sản phẩm
              </button>
    `;
};
const openModalUpdate = (id) => {
  renderFormDetail(id);
  renderButtonUpdate(id);
};
window.openModalUpdate = openModalUpdate;
const updateProduct = (id) => {
  let inputEles = document.querySelectorAll(".input-detail");
  let newProduct = {};
  for (let i = 0; i < inputEles.length; i++) {
    let { id, value } = inputEles[i];
    console.log(id, value);
    newProduct = { ...newProduct, [id]: value };
  }
  let img = document.getElementById("img-detail").src;
  newProduct = { ...newProduct, img };
  //    console.log(img) ;
  // console.log(newProduct) ;
  let promise = productService.updateProductService(id, newProduct);
  promise
    .then((res) => {
      console.log(res);
      getAPI(res.data);
      document.querySelector("btn-close").click();
    })
    .catch((err) => {
      console.log(err);
    });
};
window.updateProduct = updateProduct;
