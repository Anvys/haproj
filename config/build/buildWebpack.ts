import { Configuration } from 'webpack';
import { buildPlugins } from './buildPlugins';
import { TBuildOptions } from './types/types';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';
import { buildResolves } from './buildResolves';

export const buildWebpack = (options: TBuildOptions): Configuration => {
    const { mode, paths } = options;
    const isDev = mode === 'development';

    return {
        mode,
        entry: paths.entry,
        // entry: {
        //     main: paths.entryMain,
        // },
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            // publicPath: '/',
            clean: true,
        },
        resolve: buildResolves(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
    };
};

// yarn add -D @babel/core @babel/preset-env @babel/preset-typescript @svgr/webpack @types/jest @types/node @types/react @types/react-dom @types/react-router-dom @types/webpack @types/webpack-dev-server @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-loader babel-plugin-i18next-extract css-loader eslint eslint-config-airbnb eslint-plugin-i18next eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks file-loader html-webpack-plugin jest mini-css-extract-plugin sass sass-loader style-loader stylelint stylelint-config-standard-scss ts-loader ts-node typescript webpack webpack-cli webpack-dev-server @pmmmwh/react-refresh-webpack-plugin fork-ts-checker-webpack-plugin react-refresh react-refresh-typescript
// yarn add i18next i18next-browser-languagedetector i18next-http-backend react react-dom react-i18next react-router-dom

// yarn add -D stylelint-config-standard-scss@3.0.0 stylelint@14.5.3 -D

// yarn add -D stylelint stylelint-config-standard-scss
