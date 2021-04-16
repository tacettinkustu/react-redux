import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function cartReducer(state=initialState.cart,action){
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            if(state.find(element=>action.payload.product.id===element.product.id)){
                let newState = state.map(cartItem=>{
                    if(cartItem.product.id===action.payload.product.id){
                        return Object.assign({},state.find(element=>action.payload.product.id===element.product.id),{quantity:state.find(element=>action.payload.product.id===element.product.id).quantity+1})
                    }
                    return cartItem;
                })
                return newState;
            }else{
                return [...state,{...action.payload}];
            }
        case actionTypes.REMOVE_FROM_CART:
            let newState = state.filter(item=>item.product.id!==action.payload.product.id);
            return newState
        default:
            return state;
    }

}