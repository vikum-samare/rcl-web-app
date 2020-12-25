import { actions } from "./"
import {COMMENT_POST_FAILURE, COMMENT_POST_SUCCESS} from "./Posts.actions";
const initialState = {
    postsLoading: false,
    postsInitialLoad: true,
    successMessage: "",
    errorMessage: "",
    post: {}
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_POST_REQUEST:
            return {
                ...state,
                postsLoading: true
            }
        case actions.FETCH_POST_SUCCESS: {
            const { post } = action
            return {
                ...state,
                postsLoading: false,
                postsInitialLoad: false,
                post
            }
        }
        case actions.FETCH_POST_FAILURE: {
            const {error} = action
            return {
                ...state,
                postsLoading: false,
                postsInitialLoad: false,
                errorMessage: error
            }
        }

        case actions.FETCH_POST_REQUEST:
            return {
                ...state,
                postsLoading: true
            }
        case actions.FETCH_POST_SUCCESS: {
            const { post } = action
            return {
                ...state,
                postsLoading: false,
                postsInitialLoad: false,
                post
            }
        }
        case actions.FETCH_POST_FAILURE: {
            const {error} = action
            return {
                ...state,
                postsLoading: false,
                postsInitialLoad: false,
                errorMessage: error
            }
        }

        case actions.FETCH_POST_REQUEST:
            return {
                ...state,
                postsLoading: true
            }
        case actions.COMMENT_POST_SUCCESS: {
            return {
                ...state,
                postsLoading: false,
                postsInitialLoad: false
            }
        }
        case actions.COMMENT_POST_FAILURE: {
            const {error} = action
            return {
                ...state,
                postsLoading: false,
                postsInitialLoad: false,
                errorMessage: error
            }
        }

        default:
            return state
    }
}
