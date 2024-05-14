import path from 'path';

import { TBuildOptions, TBuildPaths, TEnv } from './config/build/types/types';
import { buildWebpack } from './config/build/buildWebpack';

export default (env: TEnv) => {
    const paths: TBuildPaths = {
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        build: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),

    };

    const mode = env.mode ?? 'development';
    const port = env.port ?? 2999;

    const isDev = mode === 'development';

    const options: TBuildOptions = {
        mode,
        paths,
        port,
        isDev,
    };

    console.log('Webpack run in MODE: ', env.mode);

    return buildWebpack(options);
};
