import { createSlice } from "@reduxjs/toolkit";
import { data } from "react-router-dom";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        products: data,
    },
    reducers: {
        setProducts: (state, action) => {
            console.log("setProducts called", action.payload);
            state.products = action.payload;
        },
    },
});

export const { setProducts } = appSlice.actions;

export default appSlice.reducer;