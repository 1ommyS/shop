import {instance} from "./API";

export class AuthAPI {
    static authUser = async (login, password) => {
        return await instance.post(`/auth`, {login, password}).then(res => res.data);
    }
}