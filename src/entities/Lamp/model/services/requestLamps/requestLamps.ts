import { createAsyncThunk } from '@reduxjs/toolkit';
import { lampSlice, sliceName } from '../../slice/lampSlice';
import { api } from '../../api/api';

export const requestLamps = createAsyncThunk<
    void,
    void
>(
    `${sliceName}/requestLamps`,
    async (authData, thunkApi) => {
        const { dispatch, rejectWithValue } = thunkApi;
        try {
            const res = await api.getLamps();

            if (res.status === 200 && res.data) {
                dispatch(lampSlice.actions.initLamps(res.data));
            } else {
                throw new Error(res.msg);
            }
        } catch (e) {
            return rejectWithValue((e as Error).message);
        }
    },
);
