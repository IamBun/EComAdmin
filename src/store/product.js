import { createSlice } from "@reduxjs/toolkit";

const productChange = true;

const productSlice = createSlice({
  name: "productSlice",
  initialState: { productChange },
  reducers: {
    change(state) {
      state.productChange = !state.productChange;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
