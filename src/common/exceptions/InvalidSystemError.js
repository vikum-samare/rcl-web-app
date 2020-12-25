import OperationalError from "./OperationalError"
class InvalidSystemError extends OperationalError {
    constructor(meta = {}) {
        super("Invalid system specified.", meta, false, 400)
    }
}

export default InvalidSystemError
