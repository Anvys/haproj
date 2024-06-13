import { StateSchema } from 'app/providers/StoreProvider';

export const getSessionId = (state: StateSchema) => state.user.authData?.session_id || '';
