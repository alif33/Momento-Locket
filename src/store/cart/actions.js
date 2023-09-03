import { cartSlice } from "./slice";
const { actions: slice } = cartSlice;

export const userLogin = user => (dispatch) => {
    dispatch(slice.userLogin(user))
}

export const userLogout = () => (dispatch) => {
    dispatch(slice.userLogout())
}


