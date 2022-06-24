import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const FETCH_PRODUCT_SUCCESS = "FETCH_FETCH_PRODUCT_SUCCESS";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_FETCH_USER_SUCCESS";
export const FETCH_ADD_PRODUCT = "FETCH_ADD_PRODUCT";
export const FETCH_ADD_PRODUCT_SUCCESS = "FETCH_ADD_PRODUCT_SUCCESS";
export const FETCH_EDIT_PRODUCT = "FETCH_EDIT_PRODUCT";
export const FETCH_EDIT_PRODUCT_SUCCESS = "FETCH_EDIT_PRODUCT_SUCCESS";
export const FETCH_DELETE_PRODUCT = "FETCH_DELETE_PRODUCT";
export const FETCH_DELETE_PRODUCT_SUCCESS = "FETCH_DELETE_PRODUCT_SUCCESS";

export const fakeLogin = payload => {
  return async dispatch => {
    const { username, password } = payload;
    if (username === "admin" && password === "letmein") {
      dispatch({
        type: LOGIN_SUCCESS,
        payload
      });
      dispatch(getProducts());
    } else {
      alert("login failure!");
    }
  };
};

export const getProducts = () => {
  return async dispatch => {
    const response = await axios.get(
      "https://json-server-api-product.herokuapp.com/products"
    );
    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: response.data
    });
  };
};

export const getUsers = () => {
  return async dispatch => {
    const response = await axios.get("https://json-server-api-product.herokuapp.com/users");
    dispatch({
      type: FETCH_USER_SUCCESS ,
      payload: response.data
    })
  }
}


export const addNewProduct = (product) => {
  return async dispatch => {
    const response = await axios.post("https://json-server-api-product.herokuapp.com/products/", product);
    dispatch({
      type: FETCH_ADD_PRODUCT_SUCCESS,
      payload: response.data
    });
    dispatch(getProducts());
  }
}


export const editProduct = (product) => {
  return async dispatch => {
    const response = await axios.put(`https://json-server-api-product.herokuapp.com/products/${product.id}`, product);
    dispatch({
      type: FETCH_EDIT_PRODUCT_SUCCESS,
      payload: response.data
    });
    dispatch(getProducts());
  }
}

export const deleteProduct = (productId) => {
  return async dispatch => {
    const response = await axios.delete(`https://json-server-api-product.herokuapp.com/products/`+ productId);
    dispatch({
      type: FETCH_DELETE_PRODUCT_SUCCESS,
      payload: response.data
    });
    // dispatch(getProducts());
  }
}