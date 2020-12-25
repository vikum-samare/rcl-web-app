import PostsService from "../../services/Posts.service"
import {appActions} from "../../actions";
export const FETCH_POST_LIST_REQUEST = "FETCH_POST_LIST_REQUEST"
export const FETCH_POST_LIST_SUCCESS = "FETCH_POST_LIST_SUCCESS"
export const FETCH_POST_LIST_FAILURE = "FETCH_POST_LIST_FAILURE"

const fetchPostsRequest = () => ({
    type: FETCH_POST_LIST_REQUEST
})

const fetchPostsSuccess = (posts) => ({
    type: FETCH_POST_LIST_SUCCESS,
    posts: posts
})

const fetchPostsFailure = () => ({
    type: FETCH_POST_LIST_FAILURE
})

export const fetchPosts = () => async (dispatch) => {
    dispatch(fetchPostsRequest())
    dispatch(appActions.appLoadingStarted())
    try {
        const posts = await PostsService.getAllPosts()
        dispatch(fetchPostsSuccess(posts))
        dispatch(appActions.appLoadingCompleted())

    }catch (error) {
        dispatch(fetchPostsFailure())
        dispatch(appActions.appLoadingCompleted())
    }

}
