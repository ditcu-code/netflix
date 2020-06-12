import { LOGIN_SUCCESS, LOGIN_FAILED, SIGN_OUT, GET_PROFILE} from "./types";
import axios from "axios";
const baseUrl = "https://ga-todoapps.herokuapp.com/api/v1";

export const login = data => async dispatch => {
  
  try{
    const res = await axios.post(`${baseUrl}/user/login`, data)
    localStorage.setItem("token", res.data.token)
    dispatch({
      type: LOGIN_SUCCESS,
    })
    console.log("login", res)
  }catch(error) {
    console.log(error.status)
    dispatch({
      type: LOGIN_FAILED
    })
  }
}

export const getProfile = () => async dispatch => {
    let token = localStorage.getItem("token")
    try{
        const res = await axios.get(`${baseUrl}/user/profile`, {
            headers: {
                auth: token
            }
        })
        console.log(res.data.profile)
        dispatch({
            type: GET_PROFILE,
            payload: res.data.profile
        })
    }catch(error){
        console.log(error, error.response)
    }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const register = data => async dispatch => {
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