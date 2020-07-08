import {ProductsAPI} from "../../api/ProductsAPI";


const initialState = {
    products: [],
    error: ""
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOP/PRODUCTS/UPDATE":
            return {
                ...state,
                products: [
                    ...state.products.filter((product) => product.id === action.payload.id),
                    {...action.payload}
                ]
            }
        case "SHOP/PRODUCTS/GET_ALL":
            return {
                ...state,
                products: [...action.products]
            }
        case "SHOP/PRODUCTS/CREATE_PRODUCT":
            return {
                ...state,
                products: [...state.products, ...action.payload]
            }
        case "SHOP/PRODUCTS/DELETE_PRODUCT":
            return {
                ...state,
                products: [...state.products.filter(({id}) => id === action.id)]
            }
        case "SHOP/PRODUCTS/GET_PRODUCT":
            return {
                ...state,
                products: [...state.products.filter(({id}) => id !== action.id)]
            }
        case "SHOP/PRODUCTS/ON_ERROR":
            return {
                ...state.products,
                error: action.error
            }
        default:
            return state
    }
}


export const updateProduct = (payload) => ({type: "SHOP/PRODUCTS/UPDATE", payload});
export const getProducts = () => ({type: "SHOP/PRODUCTS/GET_ALL"});
export const createProduct = (payload) => ({type: "SHOP/PRODUCTS/CREATE_PRODUCT", payload});
export const deleteProduct = (id) => ({type: "SHOP/PRODUCTS/DELETE_PRODUCT", id});
export const getProduct = (id) => ({type: "SHOP/PRODUCTS/GET_PRODUCT", id});
export const onError = (error) => ({type: "SHOP/PRODUCTS/ON_ERROR", error})


export const updateOneProduct = (id, login, password) => async (dispatch) => {
    let data = await ProductsAPI.updateProduct(id, login, password);
    data.responseCode === 200 ? dispatch(updateProduct({
            id: data.id,
            login: data.login,
            password: data.password
        }))
        : dispatch(onError(data.message));
}
export const createNewProduct = (login, password) => async (dispatch) => {
    let data = await ProductsAPI.createProduct(login, password);
    data.responseCode === 200 ? dispatch(createProduct({login: data.login, password: data.password}))
        : dispatch(onError(data.message));
}
export const deleteProductByID = (id) => async (dispatch) => {
    let data = await ProductsAPI.deleteProduct(id);
    data.responseCode === 200 ? dispatch(deleteProduct(data.id)) : dispatch(onError(data.message));
}
export const getProductsList = () => async (dispatch) => {
    let data = await ProductsAPI.getProducts();
    data.responseCode === 200 ? dispatch(getProducts(data.data)) : dispatch(onError(data.message));
}
export const getProductByID = (id) => async (dispatch) => {
    let data = await ProductsAPI.getProduct(id);
    data.responseCode === 200 ? dispatch(getProduct(data.data.id)) : dispatch(onError(data.message));
}

export default productsReducer;