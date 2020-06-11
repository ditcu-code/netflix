import {GET_PROFILE} from "../actions/types";

const initialState= {
    name: "",
    image: ""
}

const userdata = (state = initialState, action) => {
    switch(action.type) {
        case GET_PROFILE: return {
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
console.log(userdata)

export default userdata;