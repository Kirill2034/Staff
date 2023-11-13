import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from "./products/productsSlice";
import { apiSice } from "./api/apiSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        user: userSlice,
        [apiSice.reducerPath]: apiSice.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSice.middleware),
    devTools: true
})