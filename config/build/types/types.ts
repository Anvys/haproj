export type TBuildMode = 'development' | 'production'
export type TEnv = {
    mode: TBuildMode
    port?: number
}

export type TBuildPaths = {
    html: string
    src: string
    build: string
    entry: string
}

export type TBuildOptions = {
    mode: TBuildMode
    paths: TBuildPaths
    port: number
    isDev: boolean
}
