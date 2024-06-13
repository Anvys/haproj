import { AxiosResponse } from 'axios';
import { responseHandler } from './responseHandler';

export type TResponse<D = undefined> = {
    status: number
    data: D
    msg: string,
    res: AxiosResponse
}
export const getResponseObj = <TDATA>(res: AxiosResponse): TResponse<TDATA> => {
    // console.log('res normal', res);
    const v: TResponse<TDATA> = {
        status: res.status,
        data: res.data || undefined,
        msg: res.statusText,
        res,
    };
    responseHandler(v);

    return v;
};
export const getResponseERRObj = (e: any): TResponse => {
    // console.log('res error', e);

    const v: TResponse = {
        status: e.response?.status || e.code,
        data: undefined,
        msg: e.message,
        res: e.response,
    };
    responseHandler(v);
    return v;
};
