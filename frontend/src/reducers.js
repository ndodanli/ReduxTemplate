import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {
  postExampleReducer,
  getExampleReducer,
  putExampleReducer,
  deleteExampleReducer,
} from "./reducers/exampleReducers";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    postContent: postExampleReducer,
    getContent: getExampleReducer,
    putContent: putExampleReducer,
    deleteContent: deleteExampleReducer
  });
