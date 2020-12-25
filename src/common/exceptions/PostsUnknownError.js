import OperationalError from "./OperationalError"
class PostsUnknownError extends OperationalError {
    constructor(error = {}, meta = {}) {
        super(typeof error.message !== "undefined" ? error.message : "An unknown error occurred in posts service.", meta, false, 500)
    }
}

export default PostsUnknownError
