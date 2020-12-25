import React, {memo, useCallback, useState} from "react"
import CreatePostView from "./CreatePost.view"
import {redirect} from "../../../services/history";
const colours = ["#fff", "#rre32"]



const CreatePost = memo(() => {
    const [title, updateTitle] = useState("")
    const [description, updateDescription] = useState("")
    const [color, updateColor] = useState("")
    const onChangeHandler = (field) => (value) => {
        switch (field) {
            case "title":
                updateTitle(value)
            case "description":
                updateDescription(value)
            case "color":
                updateColor(value)
        }
    }

    const handleOnSubmit = useCallback(() => {
        redirect("/post/create")
    })
    return (
        <CreatePostView
            onFieldChange={onChangeHandler}
            titleValue={title}
            descriptionValue={description}
            colorValue={color}
        />
    )
})
export default CreatePost
