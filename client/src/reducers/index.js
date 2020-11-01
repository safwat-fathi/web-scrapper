import { actionTypes } from "../actions/actiontypes";
import initState from "./initState";

export const rootReducer = (state = initState, action) => {
  const { urls } = state;
  // action types
  const {
    // get urls
    GET_URLS_REQUEST,
    GET_URLS_SUCCESS,
    GET_URLS_FAILURE,
    // add urls
    ADD_URL_REQUEST,
    ADD_URL_SUCCESS,
    ADD_URL_FAILURE,
  } = actionTypes;

  switch (action.type) {
    // ----------------
    // get url reducer
    // ----------------
    case GET_URLS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_URLS_SUCCESS:
      return {
        loading: false,
        feedBackMsg: "URLs fetched successfully",
        response: action.payload,
        urls: [...urls, action.payload],
      };
    case GET_URLS_FAILURE:
      return {
        loading: false,
        feedBackMsg: "Not able to fetch URLs",
        response: action.payload,
        urls,
      };
    // ----------------
    // add url reducer
    // ----------------
    case ADD_URL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_URL_SUCCESS:
      return {
        response: action.payload,
        urls: [...urls, action.payload],
        feedBackMsg: "URL added successfully",
        loading: false,
      };
    case ADD_URL_FAILURE:
      return {
        response: action.payload,
        urls,
        feedBackMsg: "Adding URL failed",
        loading: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
