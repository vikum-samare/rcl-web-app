import PostsService from "../../services/Posts.service"
import { appActions } from "../../actions"
import { redirect } from "../../services/history"

export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST"
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS"
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE"

export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST"
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS"
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE"

export const COMMENT_POST_REQUEST = "COMMENT_POST_REQUEST"
export const COMMENT_POST_SUCCESS = "COMMENT_POST_SUCCESS"
export const COMMENT_POST_FAILURE = "COMMENT_POST_FAILURE"

export const FETCH_POST_LIST_REQUEST = "FETCH_POST_LIST_REQUEST"
export const FETCH_POST_LIST_SUCCESS = "FETCH_POST_LIST_SUCCESS"
export const FETCH_POST_LIST_FAILURE = "FETCH_POST_LIST_FAILURE"
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

// Create post
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

// Comment post
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

// Fetch post list
const fetchPostsRequest = () => ({
    type: FETCH_POST_LIST_REQUEST
})

const fetchPostsSuccess = (posts) => ({
    type: FETCH_POST_LIST_SUCCESS,
    posts
})

const fetchPostsFailure = () => ({
    type: FETCH_POST_LIST_FAILURE
})

export const fetchPosts = () => async(dispatch) => {
    dispatch(fetchPostsRequest())
    dispatch(appActions.appLoadingStarted())
    try {
        const posts = await PostsService.getAllPosts()
        dispatch(fetchPostsSuccess(posts))
        dispatch(appActions.appLoadingCompleted())

    }
    catch (error) {
        dispatch(fetchPostsFailure(error))
        dispatch(appActions.appLoadingCompleted())
    }

}

export const fetchPost = (urn) => async(dispatch) => {
    dispatch(fetchPostRequest())
    dispatch(appActions.appLoadingStarted())
    try {
        const post = await PostsService.getPost(urn)
        dispatch(fetchPostSuccess(post))
        dispatch(appActions.appLoadingCompleted())

    }
    catch (error) {
        dispatch(fetchPostFailure(error))
        dispatch(appActions.appLoadingCompleted())
    }

}

export const createPost = (title, description, color) => async(dispatch) => {
    dispatch(createPostsRequest())
    dispatch(appActions.appLoadingStarted())
    try {
        const posts = await PostsService.createPost({ title, description, color })
        dispatch(createPostsSuccess())
        dispatch(appActions.appLoadingCompleted())
        redirect("/")

    }
    catch (error) {
        dispatch(createPostsFailure(error))
        dispatch(appActions.appLoadingCompleted())
    }

}

export const commentPost = (urn, comment) => async(dispatch) => {
    dispatch(commentPostsRequest())
    dispatch(appActions.appLoadingStarted())
    try {
        const posts = await PostsService.createPostComment({ urn, comment })
        dispatch(commentPostsSuccess())
        dispatch(appActions.appLoadingCompleted())
    }
    catch (error) {
        dispatch(commentPostsFailure(error))
        dispatch(appActions.appLoadingCompleted())
    }

}
