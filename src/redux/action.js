import axios from "axios";

export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const FETCH_PRODUCT_SUCCESS = "FETCH_FETCH_PRODUCT_SUCCESS";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USER_SUCCESS = "FETCH_FETCH_USER_SUCCESS";
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
      "http://localhost:3001/products"
    );
    dispatch({
      type: FETCH_PRODUCT_SUCCESS,
      payload: response.data
    });
  };
};

export const getUsers = () => {
  return async dispatch => {
    const response = await axios.get("http://localhost:3001/users");
    dispatch({
      type: FETCH_USER_SUCCESS ,
      payload: response.data
    })
  }
}