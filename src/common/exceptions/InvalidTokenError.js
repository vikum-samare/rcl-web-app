import OperationalError from "./OperationalError"
class InvalidTokenError extends OperationalError {
    constructor(meta = {}) {
        super("Invalid token specified.", meta, false, 400)
    }
}

export default InvalidTokenError
