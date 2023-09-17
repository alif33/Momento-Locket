import { uploadSlice } from "./slice";
const { actions: slice } = uploadSlice;

export const addToCart = __ => (dispatch) => {
    dispatch(slice.addToFiles(__));
}
