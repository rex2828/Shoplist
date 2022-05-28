import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
    name: 'shoplist',
    initialState: { shops: [] },
    reducers: {
        addShop(state, action) {
            const newShop = action.payload;
            state.shops.push(newShop)
        },
        removeShop(state, action) {
            const id = action.payload;
            state.shops = state.shops.filter(shop => shop.id !== id)
        },
    }
})

export const shopActions = shopSlice.actions;

export default shopSlice;