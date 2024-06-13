import { AxiosRequestConfig } from 'axios';

// export const getSimpleHeader = (sid: string): AxiosRequestConfig<any> => ({
//     headers: {'sessionid': '99875e83-e35f-42ff-9e5a-a31de525bc46', }
// })
export const getSimpleHeader = (sid: string): AxiosRequestConfig<any> => ({
    headers: { sessionid: sid },
});
