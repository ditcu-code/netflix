import { combineReducers } from "redux";
import auth from "./auth";
import movies from './movies'
import userdata from "./userdata"

export default combineReducers({
  auth,
  movies,
  userdata
});