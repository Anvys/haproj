import { ELampStatus } from 'entities/Lamp/model/types/ILamp';

export const lampStatus:Record<ELampStatus, string> = {
    [ELampStatus.ON]: 'Вкл',
    [ELampStatus.OFF]: 'Выкл',
};
