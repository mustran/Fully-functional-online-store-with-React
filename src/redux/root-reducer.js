//root reducer combines all of the other reducers (states) together
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from './cart/cart.reducer'

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});
