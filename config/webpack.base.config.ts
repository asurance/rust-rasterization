
import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration } from 'webpack'

const config = {
    entry: {
        index: resolve(__dirname, '../ts/index.ts')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /[\\/]node_modules[\\/]/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: resolve(__dirname, '../dist')
    }
} as Configuration

export default config