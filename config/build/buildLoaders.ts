import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'
export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[name]-[local]--[hash:base64:3]' : '[hash:base64:5]',
                    },
                    
                
                }
            },
            "sass-loader",
          ],
    }

    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [typescriptLoaders, cssLoaders]
}