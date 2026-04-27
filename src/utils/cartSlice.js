import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(val => val.id !== action.payload.id);
        },
        clearItem: (state) => {
            //RTK - either mutate the existing state or return a new state
            state.items.length = 0;

            // return {items: []} // This will replace the original state 
        }
    }
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;