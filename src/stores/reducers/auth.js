import {LOGIN_SUCCESS} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    errors: null
}

const auth = (state = initialState, action) => {
    switch(action.type) {
        default:
            return {
                ...state
            }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isAuthenticated: true
            }
        }
    }
}

export default auth;