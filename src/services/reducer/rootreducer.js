import CartItem from "./product-reducer/product-reducer";
import Customer from "./customer-reducer/customer-reducer";
import Login from "./login-reducer/login-reducer";
import { combineReducers } from "redux";

export default combineReducers({
  CartItem,
  Customer,
  Login
});

