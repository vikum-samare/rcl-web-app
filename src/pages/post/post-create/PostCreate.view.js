import React from "react"
import PropTypes from "prop-types"
import "./PostCreate.sass"

const ColorBox = ({ color, checked, value, onChange }) => (
    <div className="post-create__color-box" style={{ backgroundColor: color }}>
        <input type="radio" value={value} name="color" className="post-create__color-radio" checked={checked} onChange={onChange} />
    </div>
)
const PostCreateView = ({ onFieldChange, titleValue, descriptionValue, colorIndex, isLoading, titleColors, onColorChange, onSubmit }) => (
    <div className="post-create__container">
        <input type="text" className="post-create__input-field" placeholder="Title" value={titleValue} onChange={onFieldChange("title")} />
        <textarea className="post-create__text-area" placeholder="Description" value={descriptionValue} onChange={onFieldChange("description")} />
        <div className="post-create__color-wrapper">
            <span>Title Color</span>
            <div className="post-create__color-box-wrapper">
                {
                    titleColors.map((titleColor, index) => (
                        <ColorBox color={titleColor} value={index} key={titleColor} onChange={onColorChange} checked={index === colorIndex} />
                    ))
                }
            </div>

        </div>
        <button className="post-create__button" disabled={isLoading} onClick={onSubmit}>
            {
                isLoading ? "Loading...." : "Publish"
            }
        </button>
    </div>
)
PostCreateView.propTypes = {
    onFieldChange: PropTypes.func.isRequired,
    onColorChange: PropTypes.func.isRequired,
    titleValue: PropTypes.string.isRequired,
    descriptionValue: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    titleColors: PropTypes.array,
    colorIndex: PropTypes.number,
    onSubmit: PropTypes.func.isRequired
}
PostCreateView.defaultProps = {
    isLoading: false,
    titleColors: ["black"],
    colorIndex: 0
}

ColorBox.propTypes = {
    color: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default PostCreateView
