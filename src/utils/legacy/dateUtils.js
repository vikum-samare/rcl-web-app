export const prettify = (millis) => {
    if (millis) {
        const date = new Date(millis)
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
    }
    else return ""
}
