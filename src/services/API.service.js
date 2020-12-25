import axios from "axios"
import HttpRequestError from "../common/exceptions/HttpRequestError"
import TokenHandler from "./TokenHandler.service"

class APIService {

    serviceEndpoint = ""
    timeout = 60000
    sendWithJWT = true

    getJWTokenHeader() {
        if (!this.sendWithJWT) return {}
        try {
            const token = TokenHandler.getToken()
            return {
                Authorization: `Bearer ${token}`
            }
        }
        catch (e) {
            return {}
        }
    }

    formatError(error) {
        if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            const { response: { data, status }} = error
            throw new HttpRequestError({
                hasResponse: true,
                data,
                status
            }, status)
        }
        else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            const { request } = error
            throw new HttpRequestError({
                hasResponse: false
            })
        }
        else {
            // Something happened in setting up the request and triggered an Error
            const { message } = error
            throw new HttpRequestError({
                hasResponse: false,
                message
            })
        }
    }

    async post(path, data = {}, headers = {}) {
        try {
            const tokenHeader = this.getJWTokenHeader()
            const { data: response } = await axios({
                url: `${this.serviceEndpoint}/${path}`,
                method: "POST",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                    ...tokenHeader,
                    ...headers
                },
                data,
                timeout: this.timeout
            })
            return response
        }
        catch (error) {
            return this.formatError(error)
        }
    }

    async put(path, data = {}, headers = {}) {
        try {
            const tokenHeader = this.getJWTokenHeader()
            const { data: response } = await axios({
                url: `${this.serviceEndpoint}/${path}`,
                method: "PUT",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                    ...tokenHeader,
                    ...headers
                },
                data,
                timeout: this.timeout
            })
            return response
        }
        catch (error) {
            return this.formatError(error)
        }
    }

    async get(path, headers = {}) {
        try {
            const tokenHeader = this.getJWTokenHeader()
            const { data: response } = await axios({
                url: `${this.serviceEndpoint}/${path}`,
                method: "GET",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                    ...tokenHeader,
                    ...headers
                },
                timeout: 600000
            })
            return response
        }
        catch (error) {
            return this.formatError(error)
        }
    }

    async delete(path, headers = {}) {
        try {
            const tokenHeader = this.getJWTokenHeader()
            const { data: response } = await axios({
                url: `${this.serviceEndpoint}/${path}`,
                method: "DELETE",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                    ...tokenHeader,
                    ...headers
                },
                timeout: this.timeout
            })
            return response
        }
        catch (error) {
            return this.formatError(error)
        }
    }
}

export default APIService
