import { createBrowserHistory } from "history"

const history = createBrowserHistory()
const redirect = (path, state = {}) => history.push(path, state)
const back = () => history.back()

export {
    redirect,
    back
}
export default history
