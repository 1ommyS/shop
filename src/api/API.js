import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'shop.api',

});

export enum ResultCodes {
    Success = 200,
    Created = 202,
    BadRequest = 400,
    DoesntExist = 404
}

export type APIResponse<D = {}, RC = ResultCodes> = {
    responseCode: RC
    data: D,
    message: string
}
export type GetUsers<RC = ResultCodes> = {
    responseCode: RC,
    data: [],
    message: string
}

