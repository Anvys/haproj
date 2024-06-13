import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authMe } from '../services/authMe/authMe';
import { LoginFormSchema } from '../types/loginFormSchema';

const initialState: LoginFormSchema = {
    isLoading: false,
    username: 'admin',
    password: '123',
};

export const loginFormSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authMe.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(authMe.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(authMe.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});
