import { createSlice } from "@reduxjs/toolkit";

export const uploadSlice = createSlice({
    name: "upload",
    initialState: {
        files: [],
        coupon: null
    },
    reducers: {
        addToFiles: (state, action) => {
            const item = action.payload;
            console.log(files);
           
        }
    }
})

