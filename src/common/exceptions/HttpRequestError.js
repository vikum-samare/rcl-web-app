import OperationalError from "./OperationalError"
class HttpRequestError extends OperationalError {
    constructor(meta = {}, statusCode = 409) {
        super("Http request error", meta, false, statusCode)
    }
}

export default HttpRequestError
