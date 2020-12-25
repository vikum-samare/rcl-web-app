class OperationalError extends Error {

    /**
     * Operational Error
     * @param message
     * @param meta
     * @param status
     * @param statusCode
     * @param isOperational
     */
    constructor(message = "", meta = {}, status = false, statusCode = false, isOperational = true) {
        super(message)
        const [name] = this.constructor.name.split("_")
        this.name = name
        this.message = message
        this.code = this.name
        this.meta = meta
        this.status = status
        this.statusCode = statusCode
        this.isOperational = isOperational
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor)
        }
    }

    toString() {
        return `${super.toString()} ${JSON.stringify(this.meta)}`
    }

    get isApiError() {
        return Boolean(this.statusCode)
    }

    get isOperationalError() {
        return Boolean(this.isOperational)
    }

    get isProgrammerError() {
        return Boolean(!this.programmerError)
    }
}

export default OperationalError
