import Cookies from "js-cookie"

class CookieHandler {

    defaultCookie = "auth"

    set(value, name) {
        let cookieName = ""
        if (typeof name === "undefined") {
            cookieName = this.defaultCookie
        }
        else {
            cookieName = name
        }
        Cookies.set(cookieName, value, { expires: 365 })
    }

    get(cookieName) {
        const name = (typeof cookieName === "undefined") ? this.defaultCookie : cookieName
        let data = Cookies.get(name)
        try {
            data = JSON.parse(data)
        }
        catch (e) { /* NNothing here */ }
        return (typeof data === "undefined") ? false : data
    }

    destroy(cookieName) {
        const name = (typeof cookieName === "undefined") ? this.defaultCookie : cookieName
        Cookies.remove(name)
    }
}

const cookieHandler = new CookieHandler()
export default cookieHandler
