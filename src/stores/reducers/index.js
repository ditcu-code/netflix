import { combineReducers } from "redux";
import auth from "./auth";
import userdata from "./userdata";
import movies from "./movies";
import updateProfile from "./updateprofile";
import review from "./review"

export default combineReducers({
  auth, 
  userdata,
  movies,
  updateProfile,
  review
});