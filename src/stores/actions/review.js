import axios from "axios";
const baseUrl = 'https://ga-moviereview.herokuapp.com/api/v1';

export const reviewList = (id, data) => async dispatch => {
    
    try {
        let token = localStorage.getItem("token")
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
            review: res.data.data.review,
            comments: res.data.data.review.rows
        })
        const respost = await axios.post(`${baseUrl}/review/new/${id}`, data, {
            headers : {
                auth: token
            }
        })
        console.log("respost", respost)
    }catch (error) {
    console.log(error);
  }
}