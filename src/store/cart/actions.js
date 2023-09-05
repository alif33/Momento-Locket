import { cartSlice } from "./slice";
const { actions: slice } = cartSlice;

export const addToCart = __ => (dispatch) => {
    dispatch(slice.addToCart(__));
}

export const incQty = __ => (dispatch) => {
    dispatch(slice.incQty(__));
}

export const decQty = __ => (dispatch) => {
    dispatch(slice.decQty(__));
}

export const applyCoupon = __ => (dispatch) => {
    dispatch(slice.applyCoupon(__));
}

export const removeCoupon = () => (dispatch) => {
    dispatch(slice.removeCoupon());
}


