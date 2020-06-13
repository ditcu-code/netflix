import {GET_PROFILE} from "./types";
import axios from "axios";
const baseUrl = "https://ga-todoapps.herokuapp.com/api/v1";
let token = localStorage.getItem("token")

export const getProfile = () => async dispatch => {
    console.log('token:', token)
    if (token === null) {        
        window.location.reload()
    }
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