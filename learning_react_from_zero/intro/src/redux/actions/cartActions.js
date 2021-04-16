import * as actionTypes from "./actionTypes"

export function addToCart(product){
    return {
        type : actionTypes.ADD_TO_CART,
        payload : product
    }
}

export function removeFromCart(product){
    return {
        type : actionTypes.REMOVE_FROM_CART,
        payload : product
    }
}