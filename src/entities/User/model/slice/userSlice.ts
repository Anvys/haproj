import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_USER_DATA_KEY } from 'shared/const/localStorage';
import { IUserSchema, IUser, TLSUser } from '../types/IUser';

const initialState: IUserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        checkLocalStorage: (state) => {
            const userFromLS = JSON.parse(
                localStorage.getItem(LOCAL_STORAGE_USER_DATA_KEY) || 'null',
            ) as TLSUser | null;

            if (userFromLS && userFromLS.user && userFromLS.session_id) {
                state.authData = userFromLS;
            }
        },
        setAuthData: (state, action: PayloadAction<IUser>) => {
            state.authData = action.payload;
            localStorage.setItem(LOCAL_STORAGE_USER_DATA_KEY, JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LOCAL_STORAGE_USER_DATA_KEY);
        },
    },
});

// // Action creators are generated for each case reducer function
// export const { actions: userActions } = userSlice;
// export const { reducer: userReducer } = userSlice;
