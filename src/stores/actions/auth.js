import { LOGIN_SUCCESS, LOGIN_FAILED } from "./types";
import axios from "axios";
const baseUrl = "https://ga-todoapps.herokuapp.com/api/v1";

export const login = data => async dispatch => {
  try{
    const res = await axios.post(`${baseUrl}/user/login`, data)
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