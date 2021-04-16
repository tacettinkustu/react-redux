import { combineReducers } from 'redux'
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import getProductReducers from "./getProductReducers"
import cartReducer from "./cartReducer"
import saveProductReducer from "./saveProductReducer"

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    getProductReducers,
    cartReducer,
    saveProductReducer
})

export default rootReducer;