import { createSlice } from "@reduxjs/toolkit";

const initialRouterState = {
  page: "home",
};

const routerSlice = createSlice({
  name: "router",
  initialState: initialRouterState,
  reducers: {
    toggle(state, page) {
      state.page = page.payload;
    },
  },
});

export const routerActions = routerSlice.actions;

export default routerSlice.reducer;
