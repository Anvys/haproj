import { AxiosRequestConfig } from 'axios';
import { _STORE_ } from 'app/providers/StoreProvider/ui/StoreProvider';

// export const getSimpleHeader = (sid: string): AxiosRequestConfig<any> => ({
//     headers: {'sessionid': '99875e83-e35f-42ff-9e5a-a31de525bc46', }
// })
export const getSimpleHeader = (): AxiosRequestConfig<any> => ({
    headers: { sessionid: _STORE_?.getState()?.user?.authData?.session_id || 'unauthorized' },
});
