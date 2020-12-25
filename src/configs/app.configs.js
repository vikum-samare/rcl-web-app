// eslint-disable-next-line no-undef
const configs = (typeof __CONFIGS__ !== "undefined") ? __CONFIGS__ : {}
// eslint-disable-next-line no-undef
const build = (typeof __BUILD__ !== "undefined") ? __BUILD__ : ""

const environment = (typeof process !== "undefined" && typeof process.env !== "undefined" && typeof process.env.NODE_ENV !== "undefined") ? process.env.NODE_ENV : "development"
export default {
    environment,
    ...configs,
    build
}
