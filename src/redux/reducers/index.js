import { combineReducers } from "redux";
import { cartReducer } from "./cart.reducers";
import { productReducer } from "./products.reducers";


const rootReducer = combineReducers({
    cart: cartReducer,
    products: productReducer
})
export {
    rootReducer
}