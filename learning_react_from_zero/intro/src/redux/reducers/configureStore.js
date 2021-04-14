import {createStore} from "redux"
import rootReducer from "./index"

export default function configureStore(){
    createStore(rootReducer)
}