import { createSlice } from "@reduxjs/toolkit"
import {db} from "../Firebaseconfig";
import { addDoc, collection } from "firebase/firestore";


const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            const updatedItem = {...action.payload, cartCount: 1};
            addDoc(collection(db, "cart"), {
                item: updatedItem
            })
        },
        delete: (state, action) => {
            state.cart.items.splice(action.payload, 1);
        }
    }
})

export const cartReducer = cartSlice.reducer;
export const actions = cartSlice.actions;
export const cartSelector = (state) => state.cartReducer.cart;