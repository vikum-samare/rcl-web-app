import { actions } from "./"

const postList = {
    initialLoading: true,
    isLoading: false,
    posts: []
}
const singlePost = {
    initialLoading: true,
    isLoading: false,
    isSuccess: false,
    successMessage: "",
    isError: false,
    errorMessage: "",
    post: {
        postId: "",
        postTitle: "",
        postDescription: "",
        postColor: "",
        postComments: [],
        postNewComment: ""
    }
}
const initialState = {
    singlePost,
    postList
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_POST_REQUEST:
            return {
                ...state,
                singlePost: {
                    ...state.singlePost,
                    initialLoading: false,
                    isLoading: true
                }
            }
        case actions.FETCH_POST_SUCCESS: {
            const { post } = action
            return {
                ...state,
                singlePost: {
                    ...state.singlePost,
                    isLoading: false,
                    post
                }
            }
        }
        case actions.FETCH_POST_FAILURE: {
            const { error } = action
            return {
                singlePost: {
                    ...state.singlePost,
                    isLoading: false,
                    isError: true,
                    errorMessage: error
                }
            }
        }
        case actions.FETCH_POST_LIST_REQUEST:
            return {
                ...state,
                postList: {
                    ...state.postList,
                    initialLoading: false,
                    isLoading: true,
                }
            }
        case actions.FETCH_POST_LIST_SUCCESS: {
            const { posts } = action
            return {
                ...state,
                postList: {
                    ...state.postList,
                    initialLoading: false,
                    isLoading: false,
                    posts
                }
            }
        }
        case actions.FETCH_POST_LIST_FAILURE:
            return {
                ...state,
                postList: {
                    ...state.postList,
                    initialLoading: false,
                    isLoading: false
                }
            }

        case actions.COMMENT_POST_REQUEST: {
            return {
                ...state,
                singlePost: {
                    ...state.singlePost,
                    isLoading: true,
                    initialLoading: false
                }
            }
        }
        case actions.COMMENT_POST_SUCCESS: {
            return {
                ...state,
                postList: {
                    ...state.postList,
                    initialLoading: true,
                },
                singlePost: {
                    ...state.singlePost,
                    isLoading: false,
                    initialLoading: true
                }
            }
        }
        case actions.COMMENT_POST_FAILURE: {
            return {
                ...state,
                singlePost: {
                    ...state.singlePost,
                    isLoading: false,
                    initialLoading: false
                }
            }
        }
        case actions.CREATE_POST_REQUEST: {
            return {
                ...state,
                singlePost: {
                    ...state.singlePost,
                    isLoading: true
                }
            }
        }
        case actions.CREATE_POST_SUCCESS: {
            return {
                ...state,
                postList: {
                    ...state.postList,
                    initialLoading: true
                },
                singlePost: {
                    ...state.singlePost,
                    isLoading: false
                }
            }
        }
        case actions.CREATE_POST_FAILURE: {
            return {
                ...state,
                singlePost: {
                    ...state.singlePost,
                    isLoading: false
                }
            }
        }
        default:
            return state
    }
}

export default postReducer
