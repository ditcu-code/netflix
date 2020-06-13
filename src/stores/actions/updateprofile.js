import {UPDATE_PROFILE} from "./types";
import axios from "axios";
const baseUrl = "https://ga-todoapps.herokuapp.com/api/v1";
let token = localStorage.getItem("token")

export const updateProfileData = data => async dispatch => {
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