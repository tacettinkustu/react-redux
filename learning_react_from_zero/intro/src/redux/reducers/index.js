import { combineReducers } from 'redux'
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import getProductReducers from "./getProductReducers"
import cartReducer from "./cartReducer"

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    getProductReducers,
    cartReducer
})

export default rootReducer;