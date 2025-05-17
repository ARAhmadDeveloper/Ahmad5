import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addresses: [], // Store multiple addresses
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    saveAddress: (state, action) => {
      state.addresses.push(action.payload); // Push new address to array
    },
    resetAddress: () => initialState,
  },
});

export const { saveAddress, resetAddress } = addressSlice.actions;
export default addressSlice.reducer;
