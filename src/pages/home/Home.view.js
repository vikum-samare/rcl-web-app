import React from "react"
import "./Home.stylesheet.sass"
import PostItem from "../../components/shared/PostItem"
import Reusable from "../../components/reusable"
import PropTypes from "prop-types"

const HomeView = ({ posts, onClickHandle }) => (
    <div className="home-container">
        <Reusable.Button onClick={onClickHandle}>Create New Post</Reusable.Button>
        {
            posts.map(({urn, postTitle, postDescription, postColor, postComments}) => (
                <PostItem
                    comments={postComments}
                    description={postDescription}
                    title={postTitle}
                    titleColor={postColor}
                    urn={urn}
                    key={urn}
                />
            ))
        }

    </div>
)
HomeView.propTypes = {
    posts: PropTypes.array.isRequired,
    onClickHandle: PropTypes.func.isRequired
}
export default HomeView
