import { ActionTypes, SearchInfo, UserApi } from './types';

export const setUsers = (users: UserApi | null) => {
    return {
        type: ActionTypes.SET_USERS,
        payload: users,
    };
};

export const setSearchInfo = (info: SearchInfo) => {
    return {
        type: ActionTypes.SET_SEARCH_INFO,
        payload: info,
    };
};
