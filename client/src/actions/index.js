import { actionTypes } from "./actiontypes";
import { api } from "../utils/api";

const {
  ADD_URL_REQUEST,
  ADD_URL_SUCCESS,
  ADD_URL_FAILURE,
  GET_URL_REQUEST,
  GET_URL_SUCCESS,
  GET_URL_FAILURE,
} = actionTypes;

// -------------------
// adding URL actions
// -------------------
const addUrlRequest = () => {
  return {
    type: ADD_URL_REQUEST,
  };
};

const addUrlSuccess = (url) => {
  return {
    type: ADD_URL_SUCCESS,
    payload: url,
  };
};

const addUrlFail = (err) => {
  return {
    type: ADD_URL_FAILURE,
    payload: err,
  };
};

export const getUrlContent = (inputs) => {
  return (dispatch) => {
    // change loading state to true
    dispatch(addUrlRequest());

    const headers = {
      "Content-Type": "application/json",
    };
    // post inputs => form inputs (url, title)
    api
      .post("/search", inputs, { headers })
      .then((res) => {
        console.log(res.data);
        dispatch(addUrlSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(addUrlFail(err));
      });
  };
};

// -------------------
// get URL actions
// -------------------
const getUrlRequest = () => {
  return {
    type: GET_URL_REQUEST,
  };
};

const getUrlSuccess = (urls) => {
  return {
    type: GET_URL_SUCCESS,
    payload: urls,
  };
};

const getUrlFailed = (err) => {
  return {
    type: GET_URL_FAILURE,
    payload: err,
  };
};

export const getAllUrls = () => {
  return (dispatch) => {
    dispatch(getUrlRequest);

    // fetch all URLS
    api
      .get("/urls")
      .then((res) => {
        console.log(res.data);
        dispatch(getUrlSuccess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getUrlFailed(err));
      });
  };
};
