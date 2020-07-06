import {instance} from "./API";

export class AuthAPI {
   static authUser = (login, password) => instance.post(`users`, {login, password}).then(res => res.data);
}