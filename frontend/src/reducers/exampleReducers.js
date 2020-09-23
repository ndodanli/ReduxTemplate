const {
  POST_SUCCESS,
  POST_FAIL,
  GET_SUCCESS,
  GET_FAIL,
  PUT_SUCCESS,
  PUT_FAIL,
  DELETE_SUCCESS,
  DELETE_FAIL,
} = require("../constants/exampleConstants.js");

function postExampleReducer(state = {}, action) {
  switch (action.type) {
    case POST_SUCCESS:
      console.log("post reducer", action.payload);
      return { loading: false, content: action.payload };
    case POST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function getExampleReducer(state = {}, action) {
  switch (action.type) {
    case GET_SUCCESS:
      console.log("get reducer", action.payload);
      return { loading: false, content: action.payload };
    case GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function putExampleReducer(state = {}, action) {
  switch (action.type) {
    case PUT_SUCCESS:
      return { loading: false, content: action.payload };
    case PUT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function deleteExampleReducer(state = {}, action) {
  switch (action.type) {
    case DELETE_SUCCESS:
      return { loading: false, content: action.payload };
    case DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export {
  postExampleReducer,
  getExampleReducer,
  putExampleReducer,
  deleteExampleReducer,
};
