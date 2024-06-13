import { createAsyncThunk } from '@reduxjs/toolkit';
import { userSlice } from 'entities/User';
import { getAuthStatusMsg } from '../../../lib/getAuthStatusMsg';
import { api } from '../../api/api';
import { TAuthResponse } from '../../types/api';

interface IAuthMeInput {
    user: string
    password: string
}

export const authMe = createAsyncThunk<
    TAuthResponse,
    IAuthMeInput
>(
    'loginForm/authMe',
    async (authData, thunkApi) => {
        const { dispatch, rejectWithValue } = thunkApi;
        try {
            const res = await api.auth(authData.user, authData.password);

            if (res.status === 200 && res.data) {
                const sid = res.data.sessionid.replaceAll('-', '');
                // dispatch(authSlice.actions.setStatusStr(''));
                // dispatch(authSlice.actions.setSessionId({ sid: res.data.sessionid.replaceAll('-', ''), user: authData.user }));
                // dispatch(authSlice.actions.setUser(authData.user));
                const authResponse = {
                    user: authData.user,
                    session_id: sid,
                };
                dispatch(userSlice.actions.setAuthData(authResponse));
            } else {
                throw new Error(getAuthStatusMsg(res.status) || res.msg);
            }

            return res.data;
        } catch (e) {
            // console.log(e);
            return rejectWithValue((e as Error).message);
        }
    },
);
