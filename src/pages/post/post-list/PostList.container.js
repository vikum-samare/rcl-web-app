import React, { memo, useEffect, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"

import { PostListView } from "./index"
import Shared from "../../../components/shared"
import { actions } from "../index"
import { redirect } from "../../../services/history"

const PostList =  memo(() => {
    const postList = useSelector(state => state.post.postList)
    const dispatch = useDispatch()

    const { posts, initialLoading, isLoading } = postList

    const handleOnCreate = useCallback(() => {
        redirect("/post/create")
    }, [])

    useEffect(() => {
        initialLoading && dispatch(actions.fetchPosts())
    }, [initialLoading])

    useEffect(() => {
        document.title = "Home"
    }, [])

    const generateProps = {
        posts,
        createButtonOnClick: handleOnCreate
    }
    return (
        <>
            {
                initialLoading || isLoading ? <Shared.AppLoading /> : <PostListView {...generateProps} />
            }

        </>
    )
}, [])
export default PostList
