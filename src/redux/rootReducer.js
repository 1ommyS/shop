import {combineReducers} from 'redux';
import userReducer from "./reducers/userReducer";
import purchaseReducer from "./reducers/productsReducer";
import authReducer from "./reducers/authReducer";

export const rootReducer = combineReducers({
    userProfile: userReducer,
    purchases: purchaseReducer,
    auth: authReducer
})
