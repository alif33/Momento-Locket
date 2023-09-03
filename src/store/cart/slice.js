import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
    },
    reducers: {

        userLogin: (state, action) => {
            return {
                ...state,
                isUser: true,
                token: action.payload.token,
                user: action.payload.user
            }
 
        },

        userLogout: (state, action) => {
            return {
                ...state,
                isUser: false,
                token: '',
                user: null
            }
        }
    }
})