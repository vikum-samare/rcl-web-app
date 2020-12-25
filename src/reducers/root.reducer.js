import { combineReducers } from "redux"
import { loadingBarReducer } from "react-redux-loading-bar"

import session from "./session.reducer"
import {reducer as home} from "../pages/home"
import app from "./app.reducer"

const rootReducer = combineReducers({
    loadingBar: loadingBarReducer,
    session,
    app,
    home
})

export default rootReducer
