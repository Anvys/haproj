import { commonInstance } from 'shared/config/api/axios';
import { getResponseERRObj, getResponseObj } from 'shared/lib/api/getResponseObj';
import { getSimpleHeader } from 'shared/lib/api/getHeaders';
import { TAuthResponse, TPingResponse } from '../types/api';

export const endpoints = {
    auth: '/login',
    session: '/api/session',
};

export const api = {
    auth: (user: string, password: string) => commonInstance.post(endpoints.auth, { user, password })
        .then((data) => getResponseObj<TAuthResponse>(data))
        .catch((e) => getResponseERRObj(e)),
    session: () => commonInstance.get(endpoints.session, getSimpleHeader())
        .then((data) => getResponseObj<TPingResponse>(data))
        .catch((e) => getResponseERRObj(e)),
};
