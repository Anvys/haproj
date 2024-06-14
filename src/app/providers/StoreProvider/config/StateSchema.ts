import { IUserSchema } from 'entities/User';
import {
    EnhancedStore, Reducer, ReducersMapObject, UnknownAction,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions } from 'react-router';
import { To } from 'react-router-dom';
import { LoginFormSchema } from 'features/AuthByUsername';
import { ILampSchema } from 'entities/Lamp';

/**
 * OLD REDUX
 */
declare const $CombinedState: unique symbol;
interface EmptyObject {
    readonly [$CombinedState]?: undefined
}
export type CombinedState<S> = EmptyObject & S

// =====================

export interface StateSchema {
    user: IUserSchema;
    lamp: ILampSchema

    // Async reducers
    loginForm?: LoginFormSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type StateAsyncSchemaKey = Exclude<(keyof StateSchema), 'user' >;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: UnknownAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
}
