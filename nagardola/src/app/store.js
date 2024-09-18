import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import favoriteReducer from "./features/favoriteSlice";
import { productApi } from "./features/productApi";
import { setupListeners } from "@reduxjs/toolkit/query";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorite: favoriteReducer,
        [productApi.reducerPath] : productApi.reducer,
    },    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
    })

setupListeners(store.dispatch)

export default store;

