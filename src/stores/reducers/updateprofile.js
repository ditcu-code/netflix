import {UPDATE_PROFILE} from "../actions/types";

const initialState={
    status: ""
}

const updateprofile = (state= initialState, action) => {
    switch(action.type) {
        case UPDATE_PROFILE:
            return{
                ...state,
                status: action.payload
            }
        default:
            return{
                ...state
            }
    }
}

export default updateprofile;