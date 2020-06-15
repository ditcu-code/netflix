import { LOGIN_SUCCESS, LOGIN_FAILED, SIGN_OUT} from "./types";
import axios from "axios";
const baseUrl = "https://ga-moviereview.herokuapp.com/api/v1";

export const login = data => async dispatch => {
  
  try{
    const res = await axios.post(`${baseUrl}/user/login`, data)
    localStorage.setItem("token", res.data.data.token)
    dispatch({
      type: LOGIN_SUCCESS,
    })
    // console.log("login called", res)
  }catch(error) {
    console.log(error.status)
    dispatch({
      type: LOGIN_FAILED
    })
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const register = data => async dispatch => {
  console.log('reg called')
  try{
    const res = await axios.post(`${baseUrl}/user/register`, data)
    localStorage.setItem("token", res.data.token)
    dispatch({
      type: LOGIN_SUCCESS
    })
  }catch(error) {
    console.log(error.status)
    dispatch({
      type: LOGIN_FAILED
    })
  }
}