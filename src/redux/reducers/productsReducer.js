import {UsersAPI} from "../../api/UsersAPI";


const initialState = {
    products: [],
    error: ""
}

const purchaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOP/USERS/UPDATE":
            return {
                ...state,
                users: [
                    ...state.users.filter((user) => user.id === action.payload.id),
                    {...action.payload}
                ]
            }
        case "SHOP/USERS/GET_ALL":
            return {
                ...state,
                users: [...action.users]
            }
        case "SHOP/USERS/CREATE_USER":
            return {
                ...state,
                users: [...state.users, ...action.payload]
            }
        case "SHOP/USERS/DELETE_USER":
            return {
                ...state,
                users: [...state.users.filter(({id}) => id === action.id)]
            }
        case "SHOP/USERS/GET_USER":
            return {
                ...state,
                users: [...state.users.filter(({id}) => id !== action.id)]
            }
        case "SHOP/USERS/ON_ERROR":
            return {
                ...state.users,
                error: action.error
            }
        default:
            return state
    }
}


export const updateUser = (payload) => ({type: "SHOP/USERS/UPDATE", payload});
export const getUsers = () => ({type: "SHOP/USERS/GET_ALL"});
export const createUser = (payload) => ({type: "SHOP/USERS/CREATE_USER", payload});
export const deleteUser = (id) => ({type: "SHOP/USERS/DELETE_USER", id});
export const getUser = (id) => ({type: "SHOP/USERS/GET_USER", id});
export const onError = (error) => ({type: "SHOP/USERS/ON_ERROR", error})


export const updateOneUser = (id, login, password) => async (dispatch) => {
    let data = await UsersAPI.updateUser(id, login, password);
    data.responseCode === 200 ? dispatch(updateUser({
            id: data.id,
            login: data.login,
            password: data.password
        }))
        : dispatch(onError(data.message));
}
export const createNewUser = (login, password) => async (dispatch) => {
    let data = await UsersAPI.createUser(login, password);
    data.responseCode === 200 ? dispatch(createUser({login: data.login, password: data.password}))
        : dispatch(onError(data.message));
}
export const deleteUserByID = (id) => async (dispatch) => {
    let data = await UsersAPI.deleteUser(id);
    data.responseCode === 200 ? dispatch(deleteUser(data.id)) : dispatch(onError(data.message));
}
export const getUsersList = () => async (dispatch) => {
    let data = await UsersAPI.getUsers();
    data.responseCode === 200 ? dispatch(getUsers(data.data)) : dispatch(onError(data.message));
}
export const getUserByID = (id) => async (dispatch) => {
    let data = await UsersAPI.getUser(id);
    data.responseCode === 200 ? dispatch(getUser(data.data.id)) : dispatch(onError(data.message));
}

export default userReducer;