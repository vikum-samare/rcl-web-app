import configs from "../configs/app.configs"

const getDomainFromHostName = (url) => {
    let result = null
    let match = []
    // eslint-disable-next-line no-cond-assign
    if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?=]+)/im)) {
        [, result] = match
        // eslint-disable-next-line no-cond-assign
        if (match = result.match(/^[^.]+\.(.+\..+)$/)) {
            [, result] = match
        }
    }
    return result
}

export const getCurrentDomain = () => {
    const { defaultDomain } = configs
    const { hostname } = window.location
    switch (hostname) {
        case "localhost":
            return defaultDomain
        default:
            return getDomainFromHostName(hostname)
    }
}
export const getQueryParams = (param) => new URLSearchParams(window.location.search).get(param)

export const getCurrentPath = () => window.location.pathname

export const getDefaultSystemId = () => {
    const currentDomain = getCurrentDomain()
    const { iam: { domains }} = configs
    const { defaultSystemId } = domains[currentDomain]
    return defaultSystemId
}

// Todo: Fix es-lint disabled codes
