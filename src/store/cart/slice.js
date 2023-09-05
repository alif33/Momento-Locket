import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        coupon: null
    },
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const targetItem = state.items.find(__ => __._id === item._id);
            if (targetItem) {
                targetItem.qty += 1;
            }else{
                state.items.push({ ...item, qty: 1 });
            }
        },

        incQty: (state, action) => {
            const _id = action.payload;
            const targetItem = state.items.find(__ => __._id === _id);
            if (targetItem) {
                targetItem.qty += 1;
            }
        },

        decQty: (state, action) => {
            const _id = action.payload;
            const targetItem = state.items.find(__ => __._id === _id);
            if (targetItem) {
                if (targetItem.qty > 1) {
                    targetItem.qty -= 1;
                } else {
                    state.items = state.items.filter(__ => __._id !== _id);
                }
            }
        },

        applyCoupon: (state, action) => {
            state.coupon = action.payload;
        },
        
        removeCoupon: (state, action) => {
            state.coupon = null;
        },
    }
})


