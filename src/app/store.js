import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/Auth/userSlice";
import cartReducer from "/Beecube-Shop/beecube/src/features/Cart/cartSlice";

const rootReducer = {
  user: userReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
