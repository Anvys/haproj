import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { NavigateOptions } from 'react-router';
import { Reducer } from 'redux';
import { To } from 'react-router-dom';
import { userSlice } from 'entities/User';
import { useDispatch } from 'react-redux';
import { commonInstance } from 'shared/config/api/axios';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userSlice.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: commonInstance,
        navigate,
    };
    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<StateSchema>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}
// export type TAppDispatch = typeof store.dispatch
export type TAppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export const useAppDispatch = () => useDispatch<TAppDispatch>();
