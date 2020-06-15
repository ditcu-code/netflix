const initialState = {
    average: null,
    count: null,
    comments: []
}

const review = (state = initialState, action) => {
    const {type, rating, review, comments} = action;
    switch(type ) {
        case "GET_REVIEWS":
        return {
            ...state,
            average: rating,
            count: review.count,
            comments: comments
        }
        default: 
        return {
            ...state
        }
        
    }
}
export default review;