import webpack, { Configuration, ProgressPlugin } from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { TBuildOptions } from './types/types';

export const buildPlugins = (options: TBuildOptions): Configuration['plugins'] => {
    const { mode, paths } = options;
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ];

    if (isDev) {
        plugins.push(new ForkTsCheckerWebpackPlugin());
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    if (isProd) {

    }
    return plugins;
};

// import HTMLWebpackPlugin from "html-webpack-plugin";
// import CompressionPlugin from "compression-webpack-plugin";
// import HtmlWebpackInlineSourcePlugin from "@effortlessmotion/html-webpack-inline-source-plugin";
// import {Options as HtmlMinifierOptions} from "html-minifier-terser";

// const minifyOptions: HtmlMinifierOptions = {
//     removeComments: true,
//     collapseWhitespace: true,
//     removeRedundantAttributes: true,
//     useShortDoctype: true,
//     removeEmptyAttributes: true,
//     removeStyleLinkTypeAttributes: true,
//     keepClosingSlash: true,
//     minifyJS: true,
//     minifyCSS: true,
//     minifyURLs: true,
//
// }

// new HTMLWebpackPlugin({
//             title: 'main',
//             inject: "body",
//             template: paths.htmlMain,
//             // inlineSource: '.(css)$',
//             // inlineSource: '.(js|css)$',
//             chunks: ['main'],
//             minify: isDev ? undefined : minifyOptions
//         }),

// plugins.push(new CompressionPlugin({
//     deleteOriginalAssets: !isDev,
//     // asset: "[path].gz[query]",
//     filename: "[path][base].gz",
//     algorithm: "gzip",
//     test: /\.(js|css|html|svg)$/,
//     // test: /\.html$/,
//     threshold: 1,
//     minRatio: 0.5,
// }))
// @ts-ignore
// plugins.push(new HtmlWebpackInlineSourcePlugin())
