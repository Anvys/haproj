import { LoginFormSchema } from '../types/loginFormSchema';
import { loginFormSlice } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginFormSchema> = { username: 'admin' };
        expect(loginFormSlice.reducer(
            state as LoginFormSchema,
            loginFormSlice.actions.setUsername('login'),
        )).toEqual({ username: 'login' });
    });

    test('test set password', () => {
        const state: DeepPartial<LoginFormSchema> = { password: 'paswd' };
        expect(loginFormSlice.reducer(
            state as LoginFormSchema,
            loginFormSlice.actions.setPassword('rewrqwer'),
        )).toEqual({ password: 'rewrqwer' });
    });
});
