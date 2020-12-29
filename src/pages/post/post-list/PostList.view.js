import React from "react"
import PropTypes from "prop-types"

import "./PostList.stylesheet.sass"

import Shared from "../../../components/shared"


const PostListView = ({ posts, createButtonOnClick }) => (
    <div className="post-list__container">
        <button className="post-list__create-button" onClick={createButtonOnClick}>Create New Post</button>
        {
            posts.map(({ postId, postTitle, postDescription, postColor, postComments }) => (
                <Shared.PostItem
                    postComments={postComments}
                    postDescription={postDescription}
                    postTitle={postTitle}
                    postColor={postColor}
                    postId={postId}
                    key={postId}
                    isClickable
                />
            ))
        }

    </div>
)
PostListView.propTypes = {
    posts: PropTypes.array.isRequired,
    createButtonOnClick: PropTypes.func.isRequired
}
export default PostListView
