import { authResponseMessage } from '../const/responseMsg';

export const getAuthStatusMsg = (status: number) => {
    switch (status) {
    case 400:
        return authResponseMessage.wrong;
    case 403:
        return authResponseMessage.busy;
    default:
        return '';
    }
};
