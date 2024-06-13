// export type TThunkApi = { state: TAppState, dispatch: TAppDispatch, extra?: unknown, rejectValue?: unknown, serializedErrorType?: unknown, pendingMeta?: unknown, fulfilledMeta?: unknown, rejectedMeta?: unknown }

import { statusCode } from 'shared/config/api/statusCodes';
import { _STORE_ } from 'app/providers/StoreProvider/ui/StoreProvider';
import { userSlice } from 'entities/User';
import { TResponse } from './getResponseObj';

export const responseHandler = (res: TResponse<unknown>) => {
    // eslint-disable-next-line no-console
    // __IS_DEV__ && console.log('RESPONSE HANDLER', res);
    const store = _STORE_;
    if (!res.res) {
        return false;
    }
    const endpoint = res.res.request.responseURL.split('/').pop();
    // const newMsg = `${endpoint} ${res.res.config.method}: ${res.res.status} / ${res.res.statusText}`
    // store.dispatch(globalSlice.actions.setMsg(newMsg))

    // confirmationChangesHandler(!!res.res.headers['unsaved'], store.getState().global.unConfirmedChanges)

    // if (endpoint !== 'ping' || res.res.config.data === 'yo') {
    //     // console.log(`reloadSessionTimeOut`, res)
    //     reloadSessionTimeOut()
    // }
    // if (res.res.headers['confirmation-time'] && !((endpoint === 'sett_eth' || endpoint === 'sett_ipv4') && res.res.request.response.byteLength === 2)) {
    //     const time = res.res.headers['confirmation-time']
    //     console.log(`Confirmation-Time:`, confirmationTimerHandler(time),)
    // }
    // if (store.getState().global.unConfirmedTimer && !res.res.headers['confirmation-time']) {
    //     console.log(`Есть активный таймер но нету хидера`)
    //     confirmationTimerHandler(0)
    // }
    if (!res && __IS_DEV__) {
        // eslint-disable-next-line no-console
        console.log(':::::::::::::::::EMPTY RES');
    }
    switch (res.status) {
    case statusCode.NO_CONTENT:
    case statusCode.OK: {
        // console.log(`${endpoint} : OK`,res.res.config.method, res)
        if (endpoint === 'ping') {
            // const isAuth = store.getState().auth.isAuth
            // if(!isAuth && res.res.headers.get){
            //     const nsid = res.res.config.headers.get('sessionid') as string
            //     console.log(res.res.config.headers)
            //     console.log(res.res.headers)
            //     console.log(`SID FROM HEADER: `, nsid, `set?`, nsid?.length > 0)
            //     if(nsid?.length > 0){
            //         store.dispatch(authSlice.actions.setUpakAuth(nsid))
            //     }
            // }else{
            //     // console.log(`ping with auth`)
            // }
        }
        if (endpoint === 'confirm') {
            // console.log('confirm success');
            // confirmationTimerHandler(0, true)
        }
        return true;
    }
    // case statusCode.NO_ACCESS_RIGHTS: {
    //     if (endpoint === 'logout') {
    //         console.log(`already logout`)
    //         return true
    //     } else {
    //         console.log(`session time out, logging out`)
    //         store.dispatch(authSlice.actions.logOut())
    //         store.dispatch(sidebarSlice.actions.clearInterval())
    //         return false
    //     }
    //
    // }
    // case statusCode.INVALID_ACCOUNT:{
    //     console.log(`400`)
    //     store.dispatch(authSlice.actions.setStatusStr('Введено неверное имя пользователя или пароль'))
    //
    //     return false
    // }
    case statusCode.NOT_FOUND: {
        return false;
    }
    case statusCode.VALIDATION_ERROR: {
        return false;
    }
    case statusCode.INVALID_CREDENTIALS: {
        store.dispatch(userSlice.actions.logout());
        return false;
    }
    case 500: {
        // eslint-disable-next-line no-console
        __IS_DEV__ && console.log('Неподтвержденный таймер');
        return false;
    }
    default: {
        // eslint-disable-next-line no-console
        __IS_DEV__ && console.log(`ERR ${res.status}:`, res.msg, res);
    }
    }
};
