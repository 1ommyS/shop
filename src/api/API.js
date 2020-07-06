import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://cors-anywhere.herokuapp.com/http://shop.api/',
});
