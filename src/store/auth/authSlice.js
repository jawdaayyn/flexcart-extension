import { createSlice } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";
const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

var userInfo = token ? jwt_decode(token) : null;
const initialAuthState = {
  logged: token,
  infos: userInfo,
  token: token,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setToken(state, token) {
      state.token = token.payload;
    },
    logout(state) {
      localStorage.removeItem("token");
      state.logged = false;
      state.infos = null;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
