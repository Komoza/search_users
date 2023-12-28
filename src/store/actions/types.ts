interface User {
    login: string;
    html_url: string;
}
export interface AppState {
    users: null | [User];
}

export interface SetUsers {
    type: ActionTypes.SET_USERS;
    payload: [string] | null;
}

export enum ActionTypes {
    SET_USERS = 'SET_USERS',
}
export type AppAction = SetUsers;
