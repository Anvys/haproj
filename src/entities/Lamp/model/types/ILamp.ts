export enum ELampStatus{
    OFF = 0,
    ON = 1,
}

type TLampType = 'simple' | 'bright'
export type TLamp = {
    id: string
    name: string
    status: ELampStatus
    type: TLampType
}

export type TSimpleLamp = TLamp & {
    type: 'simple'
}
export type TBrightLamp = TLamp & {
    brightness: number
    type: 'bright'
}

export type TLampAny = TSimpleLamp | TBrightLamp

export interface ILampSchema {
    lamps: TLampAny[]
}
