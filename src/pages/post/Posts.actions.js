import PostsService from "../../services/Posts.service"
import {appActions} from "../../actions";
export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST"
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS"
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE"

export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST"
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS"
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE"

export const COMMENT_POST_REQUEST = "COMMENT_POST_REQUEST"
export const COMMENT_POST_SUCCESS = "COMMENT_POST_SUCCESS"
export const COMMENT_POST_FAILURE = "COMMENT_POST_FAILURE"
// fetch post
const fetchPostRequest = () => ({
    type: FETCH_POST_REQUEST
})

const fetchPostSuccess = (post) => ({
    type: FETCH_POST_SUCCESS,
    post
})

const fetchPostFailure = (error) => ({
    type: FETCH_POST_FAILURE,
    error
})

const createPostsRequest = () => ({
    type: CREATE_POST_REQUEST
})

const createPostsSuccess = () => ({
    type: CREATE_POST_SUCCESS
})

const createPostsFailure = (error) => ({
    type: CREATE_POST_FAILURE,
    error
})

const commentPostsRequest = () => ({
    type: COMMENT_POST_REQUEST
})

const commentPostsSuccess = () => ({
    type: COMMENT_POST_SUCCESS
})

const commentPostsFailure = (error) => ({
    type: COMMENT_POST_FAILURE,
    error
})
export const fetchPost = (urn) => async (dispatch) => {
    dispatch(fetchPostRequest())
    dispatch(appActions.appLoadingStarted())
    try {
        const posts = await PostsService.getPost(urn)
        dispatch(fetchPostSuccess(posts))
        dispatch(appActions.appLoadingCompleted())

    }catch (error) {
        dispatch(fetchPostFailure(error))
        dispatch(appActions.appLoadingCompleted())
    }

}

export const createPost = (title, description, color) => async (dispatch) => {
    dispatch(createPostsRequest())
    dispatch(appActions.appLoadingStarted())
    try {
        const posts = await PostsService.createPost({title, description, color})
        dispatch(createPostsSuccess())
        dispatch(appActions.appLoadingCompleted())

    }catch (error) {
        dispatch(createPostsFailure(error))
        dispatch(appActions.appLoadingCompleted())
    }

}

export const commentPost = (urn, comment) => async (dispatch) => {
    dispatch(commentPostsRequest())
    dispatch(appActions.appLoadingStarted())
    try {
        const posts = await PostsService.createPostComment({urn, comment})
        dispatch(commentPostsSuccess())
        dispatch(appActions.appLoadingCompleted())

    }catch (error) {
        dispatch(commentPostsFailure(error))
        dispatch(appActions.appLoadingCompleted())
    }

}
