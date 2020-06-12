import { combineReducers } from "redux";
import auth from "./auth";
import userdata from "./userdata";
import movieImage from "./movies"

export default combineReducers({
  auth, 
  userdata,
  movieImage
});