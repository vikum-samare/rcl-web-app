import React, { memo, useEffect, useState, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import Shared from "../../../components/shared"
import { actions } from "../index"
import { PostDetailsView } from "./index"

const PostDetails =  memo((props) => {
    const [comment, commentOnChange] = useState("")

    const { match: { params: { postId }}} = props

    const singlePost = useSelector(state => state.post.singlePost)
    const { post, isLoading, initialLoading } = singlePost

    const dispatch = useDispatch()

    useEffect(() => { // For refreshing post detail screen
        initialLoading && dispatch(actions.fetchPost(postId))
        commentOnChange("") // reset comment field
    }, [initialLoading, postId])

    useEffect(() => { // Page title
        document.title = post.postTitle
    })

    const commentOnChangeHandler = useCallback((event) => {
        commentOnChange(event.target.value)
    }, [])

    const commentOnSubmitHandler = (e) => {
        comment !== "" && dispatch(actions.commentPost(postId, comment))
    }

    const generateProps = {
        post,
        comment,
        isLoading,
        commentOnChange: commentOnChangeHandler,
        commentOnSubmit: commentOnSubmitHandler
    }
    return (
        <>
            {
                (initialLoading && isLoading) ? <Shared.AppLoading /> : <PostDetailsView {...generateProps} />
            }
        </>

    )
}, [])
export default PostDetails
