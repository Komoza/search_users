export interface User {
    login: string;
    html_url: string;
    avatar_url: string;
}
export interface UserApi {
    items: [User];
    total_count: number;
}
export interface SearchInfo {
    nowPage: number;
    searchQuery: string;
    sort:null | string;
    order: null | string;
}

export interface AppState {
    users: null | UserApi;
    searchInfo: null | SearchInfo;
}

export interface SetUsers {
    type: ActionTypes.SET_USERS;
    payload: UserApi | null;
}

export interface SetSearchInfo {
    type: ActionTypes.SET_SEARCH_INFO;
    payload: SearchInfo;
}

export enum ActionTypes {
    SET_USERS = 'SET_USERS',
    SET_SEARCH_INFO = 'SET_SEARCH_INFO',
}
export type AppAction = SetUsers | SetSearchInfo;
