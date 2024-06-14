import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';
import { lampSlice, sliceName } from '../../slice/lampSlice';

interface IGetLampsInput {
}

interface IGetLampsReturn {

}

export const getLamps = createAsyncThunk<
    IGetLampsReturn,
    IGetLampsInput
>(
    `${sliceName}/getLamps`,
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
