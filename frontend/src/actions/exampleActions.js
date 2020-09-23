import axios from "axios";
import {
  POST_SUCCESS,
  POST_FAIL,
  GET_SUCCESS,
  GET_FAIL,
  PUT_SUCCESS,
  PUT_FAIL,
  DELETE_SUCCESS,
  DELETE_FAIL,
} from "../constants/exampleConstants";
import { push } from "connected-react-router";
const postExampleAction = (title, body, userId) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: title,
        body: body,
        userId: userId,
      }
    );
    console.log("post action", data)
    dispatch({ type: POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: POST_FAIL, payload: error });
  }
};

const getExampleAction = () => async (dispatch) => {
  try { 
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log("get action", data)
    dispatch({ type: GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_FAIL, payload: error });
  }
};

const putExampleAction = (userName, name, email, password) => async (dispatch) => {
  try {

    dispatch({ type: PUT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PUT_FAIL,
      payload: error,
    });
  }
};

const deleteExampleAction = () => async (dispatch) => {
  try {
    
    dispatch({ type: DELETE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: DELETE_FAIL, payload: error });
  }
};
export { postExampleAction, getExampleAction, putExampleAction, deleteExampleAction };
