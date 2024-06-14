import { commonInstance } from 'shared/config/api/axios';
import { getResponseERRObj, getResponseObj } from 'shared/lib/api/getResponseObj';
import { TLampAny } from '../../model/types/ILamp';

const endpoints = {
    getLamps: '/lamps',
};
export const api = {
    getLamps: () => commonInstance.get(endpoints.getLamps)
        .then((data) => getResponseObj<TLampAny[]>(data))
        .catch((e) => getResponseERRObj(e)),
};
