import Merge from 'webpack-merge'
import { resolve } from 'path'
import WasmPackPlugin from '@wasm-tool/wasm-pack-plugin'
import BaseConfig from './webpack.base.config'
import { Configuration } from 'webpack'
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'

const config = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 10086,
        quiet: true,
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
        new WasmPackPlugin({
            crateDirectory: resolve(__dirname, '..'),
            forceMode: 'development',
        }),
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[id].js',
    }
} as Configuration

export default Merge(BaseConfig, config)