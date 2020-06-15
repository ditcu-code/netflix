const initialState = {
    average: null,
    count: null
}

const review = (state = initialState, action) => {
    const {type, rating, review} = action;
    switch(type ) {
        case "GET_REVIEWS":
        return {
            ...state,
            average: rating,
            count: review.count
        }
        default: 
        return {
            ...state
        }
        
    }
}
export default review;