export interface User {
    login: string;
    html_url: string;
    avatar_url: string;
}
export interface UserApi {
    items: [User];
    total_count: number;
}

export interface AppState {
    users: null | UserApi;
}

export interface SetUsers {
    type: ActionTypes.SET_USERS;
    payload: UserApi | null;
}

export enum ActionTypes {
    SET_USERS = 'SET_USERS',
}
export type AppAction = SetUsers;
