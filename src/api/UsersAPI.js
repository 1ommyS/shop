import {instance} from "./API";

export const UsersApi = {
    getUsers: () => instance.get(`users`).then(res => res.data),
    getUser: (id) => instance.get(`users/${id}`).then(res => res.data),
    createUser: (login, password) => instance.post(`users`, {
        login,
        password
    }).then(res => res.data),
    updateUser: (id, login, password) => instance.put(`users/${id}`, {
        id,
        login,
        password
    }).then(res => res.data),
    deleteUser: (id) => instance.delete(`users/${id}`).then(res => res.data)
}