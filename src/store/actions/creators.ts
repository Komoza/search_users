import { ActionTypes } from './types';

export const setUsers = (users: string) => {
    return {
        type: ActionTypes.SET_USERS,
        payload: users,
    };
};
