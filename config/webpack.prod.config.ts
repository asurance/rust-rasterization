
import { resolve } from 'path'
import WasmPackPlugin from '@wasm-tool/wasm-pack-plugin'
import Merge from 'webpack-merge'
import BaseConfig from './webpack.base.config'
import { Configuration } from 'webpack'

const config = {
    mode: 'production',
    plugins: [
        new WasmPackPlugin({
            crateDirectory: resolve(__dirname, '..'),
            forceMode: 'production',
        }),
    ],
    output: {
        filename: '[contenthash].js',
        chunkFilename: '[contenthash].js'
    }
} as Configuration

export default Merge(BaseConfig, config)