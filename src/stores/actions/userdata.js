import {GET_PROFILE} from "./types";
import axios from "axios";
const baseUrl = "https://ga-moviereview.herokuapp.com/api/v1";

export const getProfile = () => async dispatch => {
    let token = localStorage.getItem("token")
    try{
        const res = await axios.get(`${baseUrl}/user`, {
            headers: {
                auth: token
            }
        })
        // console.log('getprofile', res.data.data)
        dispatch({
            type: GET_PROFILE,
            payload: res.data.data
        })
    }catch(error){
        console.log(error, error.response)
    }
}