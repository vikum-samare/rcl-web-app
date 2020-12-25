import React from "react"
import PropTypes from "prop-types"
import "./PostItem.stylesheet.sass"

const PostItem = ({ title, titleColor, description, comments, urn }) => {
    const color = { color: titleColor}
     return (
         <div className="post-container">
             <a className="anchor-wrapper">
             <div className="post-body">
                 <h3 className="post-title" style={{ color: titleColor}}>{title}</h3>
                 <p className="post-details">{description}</p>
             </div>
             <div className="post-footer">
                 <span className="footer-span">{comments} comments</span>
             </div>
             </a>
         </div>
     )
}
PostItem.propTypes = {
    title: PropTypes.string.isRequired,
    titleColor: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    urn: PropTypes.string.isRequired
}

PropTypes.defaultProps = {
    title: "",
    titleColor: "black",
    description: "",
    comments: "",
    urn: "#"
}

export default PostItem
