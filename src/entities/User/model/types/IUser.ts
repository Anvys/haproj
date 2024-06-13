export interface IUser {
    session_id: string;
    user: string;
}

export interface IUserSchema {
    authData?: IUser;
}

export type TLSUser = Omit<IUser, 'password'>
