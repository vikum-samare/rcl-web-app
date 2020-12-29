import configs from "../configs/app.configs"
import APIService from "./API.service"
import HttpRequestError from "../common/exceptions/HttpRequestError"
import PostsNoAccessError from "../common/exceptions/PostsNoAccessError"
import PostsUnknownError from "../common/exceptions/PostsUnknownError"
import PostsNotFoundError from "../common/exceptions/PostsNotFoundError"


class PostsService extends APIService {
    serviceEndpoint = configs.apiEndpoint

    static handleError = (error) => {
        if (error instanceof HttpRequestError) {
            if (error.statusCode === 401) throw new PostsNoAccessError()
            else if (error.statusCode === 404) throw new PostsNotFoundError()
        }
        throw new PostsUnknownError(error)
    }

    async getAllPosts() {
        try {
            const { data } = await this.get("v1/api/posts/all")
            return data
        }
        catch (error) {
            // todo: Should handle errors
            return PostsService.handleError(error)
        }
    }

    async getPost(urn) {
        try {
            const { data } = await this.get(`v1/api/posts/${urn}`)
            return data
        }
        catch (error) {
            // todo: Should handle errors
            return PostsService.handleError(error)
        }
    }

    async createPost({ title, description, color }) {
        try {
            const { data } = await this.post("v1/api/posts", {
                title,
                description,
                color
            })
            return data
        }
        catch (error) {
            // todo: Should handle errors
            return PostsService.handleError(error)
        }
    }

    async createPostComment({ urn, comment }) {
        try {
            const { data } = await this.post(`v1/api/posts/${urn}/comment`, {
                comment
            })
            return data
        }
        catch (error) {
            return PostsService.handleError(error)
        }
    }
}

const postsService = new PostsService()
export default postsService
