import React from "react"
import PropTypes from "prop-types"
import "./PostDetails.stylesheet.sass"
import Shared from "../../../components/shared"

const Comment = ({ comment }) => (
    <div className="post-view__comment">
        <span>
            {
                comment
            }
        </span>

    </div>
)
const PostDetailsView = ({ post: { postId, postTitle, postDescription, postColor, postComments }, isLoading, commentOnSubmit, commentOnChange, comment }) => (
    <div className="post-view__container">
        <Shared.PostItem
            postComments={postComments.length}
            postDescription={postDescription}
            postTitle={postTitle}
            postColor={postColor}
            postId={postId}
            key={postId}
        />
        <>
            {
                postComments.map(postComment => (
                    <Comment comment={postComment} key={postComment} />
                ))
            }

        </>
        <textarea className="post-view__comment-input" placeholder="New Comment Text" value={comment} onChange={commentOnChange} />
        <button className="post-view__comment-button" disabled={isLoading} onClick={commentOnSubmit}>
            {
                isLoading ? "Loading...." : "Comment"
            }
        </button>
    </div>
)
PostDetailsView.propTypes = {
    post: PropTypes.object.isRequired,
    isLoading: PropTypes.bool,
    comment: PropTypes.string,
    commentOnSubmit: PropTypes.func.isRequired,
    commentOnChange: PropTypes.func.isRequired
}

PostDetailsView.defaultProps = {
    isLoading: false,
    comment: ""
}


Comment.propTypes = {
    comment: PropTypes.string.isRequired
}


export default PostDetailsView
