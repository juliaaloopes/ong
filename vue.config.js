/*const ManifestPlugin = require('webpack-manifest-plugin')
const nodeExternals = require('webpack-node-externals')

exports.chainWebpack = (webpackConfig) => {
    if(!ProcessingInstruction.env.SSR) return;

    webpackConfig.target('node');
    webpackConfig.output.libraryTarget('commonjs2')

    webpackConfig
        .plugin('manifest')
        .use(new ManifestPlugin({fileName: "ssr-manifest.json"}))

    webpackConfig.externals(nodeExternals())
}*/

const path = require('path');

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:6000'
            }
        }
    }
}