export {
    userSlice,
} from './model/slice/userSlice';
export type {
    IUserSchema,
    IUser,
} from './model/types/IUser';

export { getSessionId } from './model/selectors/getSessionId/getSessionId';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
