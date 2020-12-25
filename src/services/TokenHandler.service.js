import base64Url from "base64-url"
import CookieHandler from "./CookieHandler.service"
import InvalidTokenError from "../common/exceptions/InvalidTokenError"
import NoTokenExistError from "../common/exceptions/NoTokenExistError"

class TokenHandler {

    token = false

    setToken(token) {
        this.token = token
        CookieHandler.set(token, "auth")
    }

    removeToken() {
        CookieHandler.destroy("auth")
    }

    isVerified() {
        try {
            let tokenToVerify = false
            if (this.token) tokenToVerify = this.token
            else if (CookieHandler.get("auth")) tokenToVerify = CookieHandler.get("auth")
            if (!tokenToVerify) {
                throw new NoTokenExistError()
            }
            else {
                const tokenData = this.decodeToken(tokenToVerify)
                const { exp } = tokenData
                if (exp <= Number(new Date())) {
                    throw new InvalidTokenError()
                }
            }
            this.token = tokenToVerify
            return true
        }
        catch (e) {
            this.token = false
            return false
        }
    }

    decodeToken(token) {
        let tokenToDecode = false
        if (typeof token !== "undefined") tokenToDecode = token
        else if (this.token) tokenToDecode = this.token
        else if (CookieHandler.get("auth")) tokenToDecode = CookieHandler.get("auth")
        if (tokenToDecode) {
            try {
                this.token = tokenToDecode
                return JSON.parse(base64Url.decode(tokenToDecode.split(".")[1]))
            }
            catch (e) {
                this.token = false
                throw new InvalidTokenError()
            }
        }
        else {
            this.token = false
            throw new NoTokenExistError()
        }
    }

    getToken() {
        if (this.isVerified()) return this.token
        throw new InvalidTokenError()
    }
}

const tokenHandler = new TokenHandler()
export default tokenHandler
