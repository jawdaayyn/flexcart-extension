import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cart: {
    brand: null,
    description: null,
    image: null,
    name: null,
    price: null,
    url: null,
  },
};

const cartSlice = createSlice({
  name: "router",
  initialState: initialCartState,
  reducers: {
    editCart(state, cart) {
      state.cart = cart.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
