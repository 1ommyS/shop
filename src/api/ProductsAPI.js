import {instance} from './API';

export class ProductsAPI {

    static createProduct = (title, description, price) => instance.post(`products`, {
        title,
        description,
        price
    }).then(res => res.data);

    static getProducts = () => instance.get(`products`).then(res => res.data);

    static getProduct = (id) => instance.get(`products/${id}`).then(res => res.data);

    static updateProduct = (id, title, description, price) => instance.put(`products/${id}`, {
        title,
        description,
        price
    }).then(res => res.data);

    static deleteProduct = (id) => instance.delete(`products/${id}`).then(res => res.data);
}