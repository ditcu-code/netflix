import { combineReducers } from "redux";
import auth from "./auth";
<<<<<<< HEAD
import userdata from "./userdata";
import movieImage from "./movies";
import updateProfile from "./updateprofile";

export default combineReducers({
  auth, 
  userdata,
  movieImage,
  updateProfile
=======
import movies from './movies'
import userdata from "./userdata"

export default combineReducers({
  auth,
  movies,
  userdata
>>>>>>> 8e66ffa2c8fa7cf1e40ef059c3fe45e11abc16e1
});