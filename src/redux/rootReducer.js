import {Action, combineReducers} from 'redux';
import userReducer from "./reducers/userReducer";
import purchaseReducer from "./reducers/purchaseReducer";
import authReducer from "./reducers/authReducer";
import {ThunkAction} from 'redux-thunk';

export const rootReducer = combineReducers({
    userProfile: userReducer,
    purchases: purchaseReducer,
    auth: authReducer
})

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppState, unknown, A>

export type AppState = ReturnType<typeof rootReducer>;
export type InferAction<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never