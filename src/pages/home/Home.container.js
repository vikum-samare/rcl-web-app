import React, {memo, useEffect, useCallback} from "react"
import { useSelector, useDispatch } from "react-redux"
import HomeView from "./Home.view"
import { actions } from "./index"
import {redirect} from "../../services/history";

const Home =  memo(() => {
    const handleOnClick = useCallback(() => {
        redirect("/post/create")
    })
    const home = useSelector(state => state.home)
    const { posts } = home
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.fetchPosts())
    }, [])

    return (
        <HomeView posts={posts} onClickHandle={handleOnClick} />
    )
}, [])
export default Home
