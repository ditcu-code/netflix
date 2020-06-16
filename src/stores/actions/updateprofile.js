import {UPDATE_PROFILE} from "./types";
import axios from "axios";
const baseUrl = "https://ga-moviereview.herokuapp.com/api/v1";

export const editProfile = name => async dispatch => {
    console.log('editProfile', name)
    let token = localStorage.getItem("token")
    try {
        const res = await axios.put(`${baseUrl}/user`, name, {
            headers: {
                auth: token
            }
        })
        console.log("update", res)
        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data.profile
        })
        window.location.reload()
    }catch(error){
        console.log(error, error.response)
    }
}

export default editProfile;