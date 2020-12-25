import React, {memo, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import PostView from "./Posts.view"
import { actions } from "./index"

const Home =  memo(() => {
    const home = useSelector(state => state.home)
    const { posts } = home
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.fetchPosts())
    }, [])

    return (
        <PostView posts={posts} />
    )
}, [])
export default Home
