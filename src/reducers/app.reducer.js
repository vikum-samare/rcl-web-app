import { appActions } from "../actions"

const initialState = {
    appLoading: false,
    sidebarCollapsed: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case appActions.APP_LOADING_STARTED:
            return {
                ...state,
                appLoading: true
            }
        case appActions.APP_LOADING_COMPLETED: {
            return {
                ...state,
                appLoading: false
            }
        }
        case appActions.APP_SIDEBAR_TOGGLE: {
            return {
                ...state,
                sidebarCollapsed: !state.sidebarCollapsed
            }
        }
        default:
            return state
    }
}

export default appReducer
