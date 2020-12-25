const path = require("path")
const webpackCommon = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ReplaceInFileWebpackPlugin = require("replace-in-file-webpack-plugin")
const autoprefixer = require("autoprefixer")
const webpack = require("webpack")

const { name, version } = require("./package")

const appConfigs = require("rc")("service", { // Defaults
    "service": name,
    version,
    enableClientCache: true,
    clientCacheExpirationTime: 604800000
})

// Allowed configs
const allowedConfigs = [
    "service",
    "version",
    "apiEndpoint",
    "logs",
    "environment",
    "defaultDomain",
    "contentServiceEndpoint",
    "contentServiceBasicAuth",
    "enableClientCache",
    "clientCacheExpirationTime",
    "contentServiceProjectCode",
    "iam",
    "defaultListSize",
]

const publicPath = path.join(__dirname, "public")
const srcPath = path.join(__dirname, "src")

const cssRule =  {
    test: /\.css$/,
    use: [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                publicPath
            }
        },
        {
            loader: "css-loader",
            options: {
                modules: false,
                sourceMap: true
            }
        }
    ]
}

const scssRule =  {
    test: /\.scss$/,
    exclude: [
        path.resolve(__dirname, "src/components/legacy"),
        path.resolve(__dirname, "src/pages/legacy")
    ],
    use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath
        }
    }, {
        loader: "css-loader",
        options: {
            modules: false,
            sourceMap: false,
            importLoaders: 2
        }
    }, "postcss-loader", "sass-loader"]
}

const sassRule =  {
    test: /\.sass$/,
    exclude: [
        path.resolve(__dirname, "src/components/legacy"),
        path.resolve(__dirname, "src/pages/legacy")
    ],
    use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath
        }
    }, {
        loader: "css-loader",
        options: {
            modules: false,
            sourceMap: true,
            importLoaders: 2
        }
    }, "postcss-loader", "sass-loader"]
}

// Rules for legacy component lib
const scssRuleLegacy =  {
    test: /\.scss$/,
    include: [
        path.resolve(__dirname, "src/components/legacy"),
        path.resolve(__dirname, "src/pages/legacy")
    ],
    use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath
        }
    }, {
        loader: "css-loader",
        options: {
            modules: true,
            sourceMap: true,
            importLoaders: 2
        }
    }, "postcss-loader", "sass-loader"]
}

const sassRuleLegacy =  {
    test: /\.sass$/,
    include: [
        path.resolve(__dirname, "src/components/legacy"),
        path.resolve(__dirname, "src/pages/legacy")
    ],
    use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath
        }
    }, {
        loader: "css-loader",
        options: {
            modules: true,
            sourceMap: true,
            importLoaders: 2
        }
    }, "postcss-loader", "sass-loader"]
}

const lessRule =  {
    test: /\.less$/,
    use: [
        { loader: MiniCssExtractPlugin.loader, options: { publicPath }},
        { loader: "css-loader", options: { importLoaders: 1 }},
        { loader: "less-loader", options: { javascriptEnabled: true }}
    ]
}

const configs = {
    name: "browser",
    entry: ["@babel/polyfill", srcPath + "/index.js"],
    output: {
        path: publicPath,
        filename: "main.bundle.js"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: "main",
                    test: /\.css$/,
                    chunks: "all",
                    enforce: true
                }
            }
        }
    },
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                include: [
                    path.join(__dirname, "src"),
                    path.join(__dirname, "node_modules")
                ],
                options: {
                    cacheDirectory: true,
                    presets: [
                        ["@babel/preset-env"],
                        "@babel/preset-react"
                    ],
                    plugins: [
                        "@babel/plugin-proposal-object-rest-spread",
                        "@babel/plugin-proposal-class-properties"
                    ]
                }
            },
            cssRule,
            sassRule,
            sassRuleLegacy,
            scssRule,
            scssRuleLegacy,
            lessRule,
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                loader: "file-loader",
                options: {
                    esModule: false,
                    publicPath: "./"
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        publicPath: "/",
        port: 3003,
        historyApiFallback: true,
        index: "index.html"
    },
    plugins: [
        new webpack.DefinePlugin({
            __CONFIGS__: JSON.stringify(allowedConfigs.reduce((acc, configName) => ({ ...acc, [configName]: appConfigs[configName] }), {}))
        }),
        new MiniCssExtractPlugin({
            filename: "styles.css"
        }),
        new webpackCommon.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),
        new CleanWebpackPlugin(["./public/*.js", "./public/*.json", "./public/styles.css"])
    ]
}

// eslint-disable-next-line no-undef
module.exports = configs
