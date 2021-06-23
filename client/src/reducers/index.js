import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import property from "./property";
import comment from "./comment"
import admin from "./adminReducer"
export default combineReducers({
  auth,
  message,
  property,
  comment,
  admin
});