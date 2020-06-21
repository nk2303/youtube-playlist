const USER_STORAGE_KEY = "user";
const INITIAL_STATE = JSON.parse(localStorage.getItem(USER_STORAGE_KEY)) || { user: null, loginError: null, signupError: null };

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(action.payload));
            localStorage.setItem("token", action.payload.jwt);
            return { user: action.payload.user , loginError: null, signupError: null };
        case "LOGOUT":
            localStorage.removeItem("token");
            localStorage.removeItem(USER_STORAGE_KEY);
            return { user: null, loginError: null, signupError: null };
        case "LOGIN_ERROR":
            return { user: null, loginError: action.error, signupError: null}
        case "SIGNUP":
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(action.payload));
            localStorage.setItem("token", action.payload.jwt);
            return { user: action.payload, signupError: null, loginError: null, };
        case "SIGNUP_ERROR":
            return { user: null, signupError: action.error, loginError: null}
        default:
            return state;
    };
}