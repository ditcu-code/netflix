import {GET_PROFILE} from "../actions/types";

const initialState= {
    // name: "",
    // image: ""
    profile: null
}

const userdata = (state = initialState, action) => {
    switch(action.type) {
        case GET_PROFILE: return {
            ...state,
            // name: action.payload.name,
            // image: action.payload.image
            profile: action.payload
        }
        default:
        return{
            ...state
        }
    }
}
console.log(userdata)

export default userdata;