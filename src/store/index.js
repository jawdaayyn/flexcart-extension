import { configureStore } from "@reduxjs/toolkit";
import routerReducer from "./router/routerSlice";
import authReducer from "./auth/authSlice";
import cartReducer from "./cart/cartSlice";
import { authApi } from "./auth/authActions";
import { cartApi } from "./cart/cartActions";
const store = configureStore({
  reducer: {
    router: routerReducer,
    auth: authReducer,
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, cartApi.middleware),
});

export default store;
