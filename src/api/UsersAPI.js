import {instance} from "./API";

export class UsersAPI {

    static  getUsers = () => instance.get(`users`).then(res => res.data);
    static  getUser = (id) => instance.get(`users/${id}`).then(res => res.data);
    static  createUser = (login, password) => instance.post(`users`, {
        login,
        password
    }).then(res => res.data);

    static  updateUser = (id, login, password) => instance.put(`users/${id}`, {
        id,
        login,
        password
    }).then(res => res.data);

    static  deleteUser = (id) => instance.delete(`users/${id}`).then(res => res.data);
}
