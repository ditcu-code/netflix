import {GET_MOVIES} from "../actions/types";

const initialState = {
    photo: []
}

const movieImage = (state=initialState, action) => {
    switch(action.type){
        case GET_MOVIES : return{
            ...state,
            photo: action.payload
        }
        default : return{
            ...state
        }
    }
}

export default movieImage;