import { combineReducers } from 'redux'
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import getProductReducers from "./getProductReducers"

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    getProductReducers
})

export default rootReducer;