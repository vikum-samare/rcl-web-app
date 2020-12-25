import TokenHandler from "../services/TokenHandler.service"
import { redirect } from "../services/history"

export const LOG_OUT = "LOG_OUT"

export const userLogOut = () => ({
    type: LOG_OUT
})

export const logOut = () => (dispatch) => {
    // remove token
    TokenHandler.removeToken()
    dispatch(userLogOut())
    redirect("/")
}

// export const initiateSocket = () => (dispatch) => {
// }
