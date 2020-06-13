import {UPDATE_PROFILE} from "../actions/types";

const initialState={
    name: "",
    image: ""
}

const updateProfile = (state=initialState, action) => {
    switch(action.type) {
        case UPDATE_PROFILE:
            return{
                ...state,
                name: action.payload.name,
                image: action.payload.image
            }
        default:
            return{
                ...state
            }
    }
}

export default updateProfile;