import { combineReducers } from "redux";
import ProductReducer from "./Product/Product.reducer";
import { CartReducer } from "./Cart/Cart.reducer";
import { UserReducer } from "./User/user.reducer";

const reducers = combineReducers({
  product: ProductReducer,
  Cart: CartReducer,
  User: UserReducer,
});

export default reducers;
