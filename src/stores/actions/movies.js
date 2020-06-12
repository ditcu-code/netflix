import {GET_MOVIES} from "./types";
import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com/photos";

export const getMovies = () => async dispatch => {
    try{
        const res = await axios.get(`${baseUrl}?_limit=12`)
        dispatch({
            type: GET_MOVIES,
            payload: res.data
        })
        console.log("photos", res.data)
    }catch(error){
        console.log("error", error)
    }
}

export default getMovies;