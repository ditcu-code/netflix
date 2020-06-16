import axios from "axios";
const baseUrl = 'https://ga-moviereview.herokuapp.com/api/v1';

export const reviewList = id => async dispatch => {
    
    try {
        // var data = JSON.stringify({})
        const res = await axios.get(`${baseUrl}/review/${id}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }); 
        console.log("review", res.data.data)
        dispatch({
            type:"GET_REVIEWS",
            rating: res.data.data.average,
            review: res.data.data.review,
            comments: res.data.data.review.rows
        })
    }catch (error) {
    console.log(error);
  }
}

export const postReview = (id, data) => async dispatch => {
    let token = localStorage.getItem("token")
    console.log("data", data)
    try {
        const res = await axios.post(`${baseUrl}/review/new/${id}`, data, {
            headers: {
                auth: token
            }
        });
        console.log("post", res)
    }catch (error) {
        // if(res.status === "fail")
        alert("you can only give review one time!")
        console.log(error);
    }
}

export const postRating = (id, rating) => async dispatch => {
    let token = localStorage.getItem("token")
    console.log("data", rating)
    try {
        const res = await axios.post(`${baseUrl}/review/new/${id}`, rating, {
            headers: {
                auth: token
            }
        });
        console.log("post", res)
    }catch (error) {
        // if(res.status === "fail")
        alert("you can only give review one time!")
        console.log(error);
    }
}

       