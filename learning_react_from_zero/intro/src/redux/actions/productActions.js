import * as actionTypes from "./actionTypes";

export function getProductSuccess(products) {
  return {
    type: actionTypes.GET_PRODUCT_SUCCESS,
    payload: products,
  };
}

export function saveProductSuccess(product) {
  return {
    type: actionTypes.SAVE_PRODUCT_SUCCESS,
    payload: product,
  };
}
export function updateProductSuccess(product) {
  return {
    type: actionTypes.UPDATE_PRODUCT_SUCCESS,
    payload: product,
  };
}

export function saveProduct(product) {
  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function savedProduct(product) {
  return function (dispatch) {
    return saveProduct(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(saveProductSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function getProducts(categoryId) {
  let url = "http://localhost:3000/products";
  if (categoryId) {
    url = `http://localhost:3000/products?categoryId=${categoryId}`;
  }
  return function (dispatch) {
    return fetch(url)
      .then((response) => response.json())
      .then((products) => dispatch(getProductSuccess(products)));
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }else {
    const error = await response.text();
  throw new Error(error);
  }
}

export function handleError(error) {
  console.error("Error in actions");
  throw error;
}
