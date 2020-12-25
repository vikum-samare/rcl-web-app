import { sessionActions } from "../actions"

const initialState = {
    loginInProgress: false,
    isAuthenticated: false,
    user: {}
}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {

        case sessionActions.LOG_OUT:
            return {
                ...initialState
            }
        default:
            return state
    }
}

export default sessionReducer
