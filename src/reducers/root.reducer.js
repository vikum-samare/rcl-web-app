import { combineReducers } from "redux"
import { loadingBarReducer } from "react-redux-loading-bar"

import session from "./session.reducer"
import { reducer as post } from "../pages/post"
import app from "./app.reducer"

const rootReducer = combineReducers({
    loadingBar: loadingBarReducer,
    session,
    app,
    post
})

export default rootReducer
