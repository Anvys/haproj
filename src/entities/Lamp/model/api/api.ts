import { commonInstance } from 'shared/config/api/axios';
import { getResponseERRObj, getResponseObj } from 'shared/lib/api/getResponseObj';
import { getSimpleHeader } from 'shared/lib/api/getHeaders';
import { TLampAny } from '../../model/types/ILamp';

const endpoints = {
    getLamps: '/lamps',
};
export const api = {
    getLamps: () => commonInstance.get(endpoints.getLamps, getSimpleHeader())
        .then((data) => getResponseObj<TLampAny[]>(data))
        .catch((e) => getResponseERRObj(e)),
};
