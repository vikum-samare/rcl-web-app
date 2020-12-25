class ProgrammerError extends Error {

    /**
     * Programmer Error
     * @param message
     * @param meta
     * @param status
     * @param statusCode
     * @param programmerError
     */
    constructor(message = "", meta = {}, status = false, statusCode = false, programmerError = true) {
        super(message)
        const [name] = this.constructor.name.split("_")
        this.name = name
        this.message = message
        this.code = this.name
        this.meta = meta
        this.status = status
        this.statusCode = statusCode
        this.programmerError = programmerError
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
        return Boolean(!this.programmerError)
    }

    get isProgrammerError() {
        return Boolean(this.programmerError)
    }
}

export default ProgrammerError
