import React from "react"
import { PostList } from "../../pages/post/post-list"
import { PostCreate } from "../../pages/post/post-create"
import { PostDetails } from "../../pages/post/post-details"

export default [
    {
        path: "/",
        exact: true,
        isPrivate: false,
        main: () => <PostList />
    },
    {
        path: "/post/create",
        exact: true,
        isPrivate: false,
        main: () => <PostCreate />
    },
    {
        path: "/post/:postId",
        exact: true,
        isPrivate: false,
        main: (props) => <PostDetails {...props} />
    }
]
