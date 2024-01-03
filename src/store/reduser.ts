import { ActionTypes, AppAction, AppState } from './actions/types';

const initialState: AppState = {
    users: null,
    searchInfo: null,
};

const appReducer = (state = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case ActionTypes.SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        case ActionTypes.SET_SEARCH_INFO:
            return {
                ...state,
                searchInfo: action.payload,
            };
        default:
            return state;
    }
};

export default appReducer;
