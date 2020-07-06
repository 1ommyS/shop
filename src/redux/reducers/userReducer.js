import {UsersApi} from "../../api/userApi";


const initialState = {
    users: [],
}

const userReducer = (state = initialState, action) => {
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
                users: [...state.users]
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
        case "SHOP/USERS/SET_USERS":
            return {
                users: [...action.users]
            }
        default:
            return state
    }
}


export const actions = {
    updateUser: (payload) => ({type: "SHOP/USERS/UPDATE", payload}),
    getUsers: () => ({type: "SHOP/USERS/GET_ALL"}),
    createUser: (payload) => ({type: "SHOP/USERS/CREATE_USER", payload}),
    deleteUser: (id) => ({type: "SHOP/USERS/DELETE_USER", id}),
    getUser: (id) => ({type: "SHOP/USERS/GET_USER", id}),
    setUsers: (users) => ({type: "SHOP/USERS/SET_USERS", users})
}

export const updateUser = (id, login, password) => async (dispatch) => {
    let data = await UsersApi.updateUser(id, login, password);
    dispatch(actions.updateUser({id: data.id, login: data.login, password: data.password}));
}
export const createUser = (login, password) => async (dispatch) => {
    let data = await UsersApi.createUser(login, password);
    dispatch(actions.createUser({login: data.login, password: data.password}));
}
export const deleteUser = (id) => async (dispatch) => {
    let data = await UsersApi.deleteUser(id);
    if (data.responseCode === 200) dispatch(actions.deleteUser(data.id));
}
export const getUsers = () => async (dispatch) => {
    let data = await UsersApi.getUsers();
    dispatch(actions.getUsers(data.data));
}

export default userReducer;