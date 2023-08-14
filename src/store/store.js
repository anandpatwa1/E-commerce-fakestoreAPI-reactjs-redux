import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../store/products/productSlice"
import cartReducer from "../store/cart/cartSlice"
const store = configureStore ({
    reducer : {
       product : productReducer ,
       cart : cartReducer
    }
})

export default store