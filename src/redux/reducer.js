import { FETCH_PRODUCT_SUCCESS,
  FETCH_ADD_PRODUCT_SUCCESS,
  FETCH_EDIT_PRODUCT_SUCCESS,
  FETCH_DELETE_PRODUCT_SUCCESS,
  LOGIN_SUCCESS } from "./action";

const initialState = {
  users: [],
  userlogined: {}
};

const rootReducer = (state = initialState, action) => {
  
  if(action.type === LOGIN_SUCCESS){
    return { ...state, userlogined: action.payload };
  }
  if(action.type === FETCH_PRODUCT_SUCCESS){
    return { ...state, products: action.payload };
  }
  if(action.type === FETCH_ADD_PRODUCT_SUCCESS){
    return { ...state, products: action.payload };
  }
  if(action.type === FETCH_EDIT_PRODUCT_SUCCESS){
    return { ...state, products: action.payload };
  }
  if(action.type ===  FETCH_DELETE_PRODUCT_SUCCESS){
    return { ...state, products: action.payload };
  }

  return state;
};

export default rootReducer;