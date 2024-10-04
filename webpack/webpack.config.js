const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common")

module.exports = (vars) =>  {
    const { env } = vars
    const envConfig = require(`./webpack.${env}.js`)
    const config = merge(commonConfig, envConfig)
    return config
}