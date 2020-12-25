const webpack = require("webpack")
const common = require("./webpack.common.js")
const ReplaceInFileWebpackPlugin = require("replace-in-file-webpack-plugin")
const SentryWebpackPlugin = require("@sentry/webpack-plugin")
const { version } = require("./package")
const time = Number(new Date())
const build = `${version}+${time}`

const plugins = [
    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production"),
        "__BUILD__": JSON.stringify(build)
    }),
    new ReplaceInFileWebpackPlugin([{
        dir: "public",
        test: /\.html$/,
        rules: [{
            search: /#VERSION/ig,
            replace: build
        }]
    }])
]

// eslint-disable-next-line no-undef
module.exports = {
    ...common,
    mode: "production",
    plugins: common.plugins.concat(plugins)
}
