import { ActionTypes, UserApi } from './types';

export const setUsers = (users: UserApi | null) => {
    return {
        type: ActionTypes.SET_USERS,
        payload: users,
    };
};
