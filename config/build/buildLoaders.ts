import { ModuleOptions } from 'webpack';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { TBuildOptions } from './types/types';
import { buildCssLoader } from './loaders/buildCssLoader';

export const buildLoaders = (options: TBuildOptions): ModuleOptions['rules'] => {
    const isDev = options.mode === 'development';

    const scssLoader = buildCssLoader();
    const tempScss = {
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader',
        ],
    };
    const cssLoader = {
        test: /\.css$/i,
        use: [
            'style-loader',
            'css-loader',
        ],
    };
    const svgrLoader = {
        test: /\.svg$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true,
                },
            },
        ],
    };

    // const imageLoader = {
    //     test: /\.(jpg|png|gif|avif|ttf)$/,
    //     type: 'asset/inline',
    // }
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: isDev,
                    getCustomTransformers: () => ({
                        before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                    }),
                },
            },
        ],
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    return [

        fileLoader,
        svgrLoader,
        babelLoader,
        tsLoader,
        tempScss,
        // scssLoader,
        // cssLoader,
    ];
};
