import { actions } from "./index"

const initialState = {
    postsLoading: false,
    postsInitialLoad: true,
    posts: []
}
const homeScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_POST_LIST_REQUEST:
            return {
                ...state,
                postsLoading: true
            }
        case actions.FETCH_POST_LIST_SUCCESS: {
            const { posts } = action
            return {
                ...state,
                postsLoading: false,
                postsInitialLoad: false,
                posts
            }
        }
        case actions.FETCH_POST_LIST_FAILURE:
            return {
                ...state,
                postsLoading: false,
                postsInitialLoad: false,
            }
        default:
            return state
    }


}
export default homeScreenReducer
