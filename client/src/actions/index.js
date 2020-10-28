import { actionTypes } from "./actiontypes";
import { api } from "../api";

const { ADD_URL_REQUEST, ADD_URL_SUCCESS, ADD_URL_FAILURE } = actionTypes;

// adding URl actions
export const addUrlRequest = () => {
  return {
    type: ADD_URL_REQUEST,
  };
};

export const addUrlSuccess = (urls) => {
  return {
    type: ADD_URL_SUCCESS,
    payload: urls,
  };
};

export const addUrlFail = (err) => {
  return {
    type: ADD_URL_FAILURE,
    payload: err,
  };
};

export const getUrlContent = (inputs) => {
  return (dispatch) => {
    // change loading state to true
    dispatch(addUrlRequest());

    // inputs => form inputs (url, title)
    api
      .post("search", inputs)
      .then((res) => {
        console.log(res);
        dispatch(addUrlSuccess(res.data));
      })
      .catch((err) => dispatch(addUrlFail(err)));
  };
};
