import {UPDATE_PROFILE} from "./types";
import axios from "axios";
const baseUrl = "https://ga-moviereview.herokuapp.com/api/v1";

export const updateProfileData = data => async dispatch => {
    console.log('updateProfileData', data)
    let token = localStorage.getItem("token")
    try {
        const res = await axios.put(`${baseUrl}/user`, data, {
            headers: {
                auth: token
            }
        })
        console.log("update", res)
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data.profile
        })
    }catch(error){
        console.log(error, error.response)
    }
}

export default updateProfileData;