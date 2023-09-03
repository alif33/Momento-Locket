import { combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from "./cart/slice";

export const rootReducer = combineReducers({
  cart: cartSlice.reducer,
});