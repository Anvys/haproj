import { TCommonEntity } from './common';

/**
 * Лампочки
 */
export type TLight_All = TLight | TLight_bri

export type TLight = TCommonEntity & {
    power: boolean
}

/**
 * Подтипы
 */

export type TLight_bri = TLight & {
    brightness: number
}
