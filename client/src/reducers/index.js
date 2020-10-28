import { actionTypes } from "../actions/actiontypes";

const initState = {
  response: null,
  loading: false,
  feedBackMsg: "",
  urls: [],
};

export const rootReducer = (state = initState, action) => {
  const { ADD_URL_REQUEST, ADD_URL_SUCCESS, ADD_URL_FAILURE } = actionTypes;
  const { urls } = state;

  switch (action.type) {
    case ADD_URL_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ADD_URL_SUCCESS:
      return {
        ...state,
        response: action.payload,
        urls: [...urls, action.payload],
        feedBackMsg: "URL added successfully",
        loading: false,
      };
    case ADD_URL_FAILURE:
      return {
        ...state,
        response: null,
        urls,
        feedBackMsg: "Adding URL failed",
        loading: false,
      };
    default:
      return state;
  }
};
