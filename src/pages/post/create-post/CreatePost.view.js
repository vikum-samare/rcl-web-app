import React from "react"
import Reusable from "../../../components/reusable"
import PropTypes from "prop-types"

const CreatePostView = ({ onFieldChange, title, description, color }) => (
    <div className="create-post-container">
        <Reusable.TextInput
            onChange={onFieldChange("title")}
            value={title}
            placeholder="Title"
        />
        <Reusable.TextInput
            onChange={onFieldChange("description")}
            value={description}
            placeholder="Description"
        />
        <Reusable.TextInput
            onChange={onFieldChange("color")}
            value={color}
            placeholder="Color"
        />
    </div>
)
CreatePostView.propTypes = {
    onFieldChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
}

export default CreatePostView

// TOdo: Finish create post screen
