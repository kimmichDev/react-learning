import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import authSlice from "./services/authSlice";
export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        authSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})