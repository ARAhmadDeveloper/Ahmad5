// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     addToCart: []
// };

// const cartSlice = createSlice({
//     name: "cart",
//     initialState: [],
//     reducers: {
//         addToCart: (state, action) => {
//             state.push(action.payload);
//         }
//     }

// });

// export const { addToCart } = cartSlice.actions;

// console.log("cartSlice ====", cartSlice)

// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [], // Ensure it's an array
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload); // Add product to cart
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
