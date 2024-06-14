import { StateSchema } from 'app/providers/StoreProvider';

export const getLamps = (state: StateSchema) => state.lamp.lamps;
