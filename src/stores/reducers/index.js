import { combineReducers } from "redux";
import auth from "./auth";
import userdata from "./userdata";
import movieImage from "./movies";
import updateProfile from "./updateprofile";

export default combineReducers({
  auth, 
  userdata,
  movieImage,
  updateProfile
});