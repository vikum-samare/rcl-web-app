import OperationalError from "./OperationalError"
class PostsNotFoundError extends OperationalError {
    constructor(meta = {}) {
        super("Resource not found.", meta, false, 404)
    }
}

export default PostsNotFoundError
