const webpack = require("webpack")
const common = require("./webpack.common.js")
const { version } = require("./package")

const plugins = [
    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("local"),
        "__BUILD__": JSON.stringify(version)
    })
]

// eslint-disable-next-line no-undef
module.exports = {
    ...common,
    mode: "development",
    plugins: common.plugins.concat(plugins),
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        ignored: /node_modules/
    }
}
