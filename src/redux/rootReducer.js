import {combineReducers} from 'redux';
import userReducer from "./reducers/userReducer";
import purchaseReducer from "./reducers/productsReducer";
import authReducer from "./reducers/authReducer";
import productsReducer from "./reducers/productsReducer";

export const rootReducer = combineReducers({
    profile: userReducer,
    products: productsReducer,
    auth: authReducer
})
