import {AuthAPI} from "../../api/AuthAPI";

const initialState = {
    login: "",
    password: "",
    isAuth: document.cookie !== "",
    error: ""
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOP/AUTH/AUTH_USER":
            return {
                login: action.payload.login,
                password: action.payload.password,
                isAuth: true
            }
        case "SHOP/AUTH/LOGOUT":
            return {
                login: "",
                password: "",
                isAuth: false
            }
        case "SHOP/AUTH/ON_ERROR":
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export const auth = (payload) => ({type: "SHOP/AUTH/AUTH_USER", payload})
export const logout = () => ({type: "SHOP/AUTH/LOG_OUT"})
export const onError = error => ({type: "SHOP/AUTH/ON_ERROR", error});

export const authUser = (login, password, rememberMe) => async (dispatch) => {
    let resp = await AuthAPI.authUser(login, password);

    if (resp.responseCode === 200) {
        dispatch(auth({login: resp.data.login, password: resp.data.password,}))
        if (rememberMe)  document.cookie = `login=${resp.data.login}`;
    } else dispatch(onError(resp.message));
}

export default authReducer;