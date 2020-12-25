import OperationalError from "./OperationalError"
class NoTokenExistError extends OperationalError {
    constructor(meta = {}) {
        super("No Tokens exist.", meta, false, 400)
    }
}

export default NoTokenExistError
