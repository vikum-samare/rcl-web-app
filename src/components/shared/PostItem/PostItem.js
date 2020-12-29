import React from "react"
import PropTypes from "prop-types"
import "./PostItem.stylesheet.sass"

const ItemBody = ({ postTitle, postColor, postDescription, postComments }) => (
    <>
        <div className="post__body">
            <h3 className="post__title" style={{ color: postColor }}>{postTitle}</h3>
            <p className="post__details">{postDescription}</p>
        </div>
        <div className="post__footer">
            <span className="footer__span">{postComments} comments</span>
        </div>
    </>
)
const PostItem = ({ postTitle, postColor, postDescription, postComments, postId, isClickable }) => (
    <div className="post__container">
        {
            isClickable ? (
                <a href={`/post/${postId}`}>
                    <ItemBody
                        postTitle={postTitle}
                        postColor={postColor}
                        postDescription={postDescription}
                        postComments={postComments}
                    />
                </a>
            ) : (
                <ItemBody
                    postTitle={postTitle}
                    postColor={postColor}
                    postDescription={postDescription}
                    postComments={postComments}
                />
            )
        }
    </div>
)
PostItem.propTypes = {
    postTitle: PropTypes.string.isRequired,
    postColor: PropTypes.string.isRequired,
    postDescription: PropTypes.string.isRequired,
    postComments: PropTypes.number.isRequired,
    postId: PropTypes.string.isRequired,
    isClickable: PropTypes.bool
}

PropTypes.defaultProps = {
    postTitle: "",
    postColor: "black",
    postDescription: "",
    postComments: 0,
    postId: "#",
    isClickable: false
}

export default PostItem
