import axios from 'axios';

const isDev = __IS_DEV__;
const devIP = '10.80.1.56';
export const HOST_URL = isDev ? `http://${devIP}:8000/` : '';

export const commonInstance = axios.create({
    baseURL: `${HOST_URL}`,
});
