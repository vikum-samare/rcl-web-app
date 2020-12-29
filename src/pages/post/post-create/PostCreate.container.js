import React, { memo, useCallback, useState, useEffect } from "react"
import { PostCreateView } from "./index"
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../index"

const titleColors = ["#CF4495", "#44CF89", "#44B3CF"]

const CreatePost = memo(() => {
    const [title, updateTitle] = useState("")
    const [description, updateDescription] = useState("")
    const [color, updateColor] = useState(0)

    const singlePost = useSelector(state => state.post.singlePost)
    const { isLoading } = singlePost

    const dispatch = useDispatch()

    useEffect(() => { // Page title
        document.title = "Create Post"
    })

    const onChangeHandler = useCallback((field) => (event) => {
        switch (field) {
            case "title":
                updateTitle(event.target.value)
                break
            case "description":
                updateDescription(event.target.value)
                break
            default:
        }
    }, [])

    const onColorChangeHandler = useCallback((event) => {
        updateColor(parseInt(event.target.value, 10))
    }, [])


    const handleOnSubmit = () => {
        title !== "" && description !== "" && dispatch(actions.createPost(title, description, titleColors[color]))
    }
    const generateProps = {
        onFieldChange: onChangeHandler,
        onColorChange: onColorChangeHandler,
        onSubmit: handleOnSubmit,
        titleValue: title,
        descriptionValue: description,
        colorIndex: color,
        isLoading,
        titleColors
    }
    return (
        <PostCreateView {...generateProps} />
    )
})
export default CreatePost
