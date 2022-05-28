import { configureStore } from "@reduxjs/toolkit";
import uiSlice from './ui-slice';
import shopSlice from "./shop-slice";

const store = configureStore({
    reducer: { ui: uiSlice.reducer, shop: shopSlice.reducer }
})

export default store;