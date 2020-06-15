import {GET_PROFILE} from "../actions/types";

const initialState= {
    profile: null
}

const userdata = (state = initialState, action) => {
    switch(action.type) {
        case GET_PROFILE:
            return {
            ...state,
            profile: action.payload
            }
        default:
        return{
            ...state
        }
    }
}
// console.log(userdata)

export default userdata;