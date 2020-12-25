import configs from "../configs/app.configs"
import { getCurrentDomain } from "./domains"

export const getDefaultSystemId = () => {

    if (localStorage.getItem("defaultSystemId")) {
        return localStorage.getItem("defaultSystemId")
    }
    else {
        const currentDomain = getCurrentDomain()
        const { iam: { domains }} = configs
        const { defaultSystemId } = domains[currentDomain]
        return defaultSystemId
    }
}

export const setDefaultSystemId = (system) => {
    const { id } = system
    if (localStorage.getItem("defaultSystemId") !== id) {
        localStorage.setItem("defaultSystemId", id)
    }
}
