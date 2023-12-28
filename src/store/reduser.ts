import { ActionTypes, AppAction, AppState } from "./actions/types";

const initialState: AppState = {
    users: null,
};

const appReducer = (state = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case ActionTypes.SET_USERS:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
};

export default appReducer;