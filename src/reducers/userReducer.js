const USER_STORAGE_KEY = "user";
const INITIAL_STATE = JSON.parse(localStorage.getItem(USER_STORAGE_KEY)) || { user: null, error: null };

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(action.payload));
            return { user: action.payload, error: null };
        case "LOGOUT":
            localStorage.removeItem(USER_STORAGE_KEY);
            return { user: null, error: null };
        case "LOGIN_ERROR":
            return { user: null, error: action.error}
        default:
            return state;
    };
}