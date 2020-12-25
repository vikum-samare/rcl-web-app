import OperationalError from "./OperationalError"
class PostsNoAccessError extends OperationalError {
    constructor(meta = {}) {
        super("You don't have permission to access.", meta, false, 403)
    }
}

export default PostsNoAccessError
