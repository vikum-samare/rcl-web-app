import OperationalError from "./OperationalError"
class HttpRequestFailedError extends OperationalError {
    constructor(meta = {}) {
        super("Http request failed", meta, false, 409)
    }
}

export default HttpRequestFailedError
