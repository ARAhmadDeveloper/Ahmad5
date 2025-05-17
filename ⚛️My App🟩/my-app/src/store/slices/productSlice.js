import { createSlice } from "@reduxjs/toolkit";

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     console.log("All Products =======>>>>>>>>", data);
//     return data;
//   }
// );

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },

  // extraReducers: (builder) => {
  //   builder.addCase(fetchProducts.fulfilled, (state, action) => {
  //     state.products = action.payload;
  //   });
  // },
});

// export const { setProducts } = productSlice.actions;

export const selectProducts = (state) => state.products.products;

export default productSlice.reducer;
