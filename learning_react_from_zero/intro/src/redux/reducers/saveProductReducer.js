import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function saveProductReducer(state = initialState.post, action) {
  switch (action.type) {
    case actionTypes.SAVE_PRODUCT_SUCCESS:
      return action.payload;
    case actionTypes.UPDATE_PRODUCT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
