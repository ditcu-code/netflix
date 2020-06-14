import axios from "axios";
const baseUrl = 'https://ga-moviereview.herokuapp.com/api/v1';

export const reviewList = id => async dispatch => {
    
    try {
        const res = await axios.get(`${baseUrl}/review/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }); 
        console.log("review", res.data.data.review)
        dispatch({
            type:"GET_REVIEWS",
            rating: res.data.data.average,
            review: res.data.data.review
        })
    }catch (error) {
    console.log(error);
  }
}