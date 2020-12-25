import { applyMiddleware, createStore, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "../reducers"
import { createLogger } from "redux-logger"
const reduxLogger = createLogger({})
import TokenHandler from "../services/TokenHandler.service"

const composeEnhancers =
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose

console.log(TokenHandler.isVerified())
const preloadedState = TokenHandler.isVerified() ? (() => {
    try {
        const user = TokenHandler.decodeToken()
        return {
            session: {
                loginInProgress: false,
                isAuthenticated: true,
                user
            }
        }
    }
    catch (e) {
        return {}
    }
})() : {}

const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, reduxLogger))
)

export default store
