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
    // addToCart: (state, action) => {
    //   state.cartItems.push(action.payload); // Add product to cart
    // },
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find((item) => item.mobileId === action.payload.mobileId);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 }); // Ensure quantity exists
      }
    }, 
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.mobileId === action.payload);
      if (item) {
        item.quantity += 1;
        console.log("Successfully Increases===-=",item)
      }
      else {
        console.log("Item not found in the cart")
      }
    },
  },
});

export const { addToCart , increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
