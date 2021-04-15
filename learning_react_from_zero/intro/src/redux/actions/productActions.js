import * as actionTypes from "./actionTypes";

export function getProductSuccess(products) {
  return {
    type: actionTypes.GET_PRODUCT_SUCCESS,
    payload: products
  };
}

export function getProducts(categoryId) {
  let url = "http://localhost:3000/products"
  if(categoryId){
    url = `http://localhost:3000/products?categoryId=${categoryId}`
  }
  return function (dispatch) {
    return fetch(url)
      .then((response) => response.json())
      .then((products) => dispatch(getProductSuccess(products)));
  };
}
