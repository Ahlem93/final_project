import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import property from "./property";
import comment from "./comment"

export default combineReducers({
  auth,
  message,
  property,
  comment
});