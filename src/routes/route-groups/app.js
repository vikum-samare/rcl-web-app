import React from "react"
import {Home} from "../../pages/home"
import { CreatePost } from "../../pages/post/create-post"

export default [
    {
        path: "/",
        exact: true,
        isPrivate: false,
        sidebar: () => null,
        main: () => <Home />,
        footer: () => null
    },
    {
        path: "/post/create",
        exact: true,
        isPrivate: false,
        sidebar: () => null,
        main: () => <CreatePost />,
        footer: () => null
    },
    // {s
    //     path: "/",
    //     exact: true,
    //     isPrivate: true,
    //     sidebar: (props) => <Sidebar {...props} />,
    //     main: (props) => <Dashboard {...props} />,
    //     footer: (props) => <Footer {...props} />
    // }
]
