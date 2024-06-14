import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    ILampSchema, TLampAny,
} from '../types/ILamp';

const initialState: ILampSchema = {
    lamps: [],
};
export const sliceName = 'lamp';
export const lampSlice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
        /**
         * ADD
         */
        initLamps: (state, action: PayloadAction<TLampAny[]>) => {
            state.lamps = action.payload;
        },
        addLamps: (state, action: PayloadAction<TLampAny[]>) => {
            state.lamps = [...state.lamps, ...action.payload];
        },

        /**
         * DELETE
         */
        removeLamps: (state, action: PayloadAction<TLampAny[]>) => {
            const lampsToDelete = action.payload;
            state.lamps = state.lamps.filter(
                (stateLamp) => !lampsToDelete.some(
                    (deleteLamp) => deleteLamp.id === stateLamp.id,
                ),
            );
        },
        removeLampsByIds: (state, action: PayloadAction<string[]>) => {
            const lampIdsToDelete = action.payload;
            state.lamps = state.lamps.filter(
                (stateLamp) => !lampIdsToDelete.some(
                    (deleteId) => deleteId === stateLamp.id,
                ),
            );
        },
        removeLamp: (state, action: PayloadAction<TLampAny>) => {
            const lampIdToDelete = action.payload.id;
            state.lamps = state.lamps.filter(
                (stateLamp) => lampIdToDelete !== stateLamp.id,
            );
        },
        removeLampById: (state, action: PayloadAction<string>) => {
            const lampIdToDelete = action.payload;
            state.lamps = state.lamps.filter(
                (stateLamp) => lampIdToDelete !== stateLamp.id,
            );
        },

        /**
         * UPDATE
         */
        updateLamp: (state, action: PayloadAction<TLampAny>) => {
            state.lamps = state.lamps.map(
                (stateLamp) => (stateLamp.id === action.payload.id ? action.payload : stateLamp),
            );
        },
    },
});
