import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isError : false,
    isSuccess : false,
    isLoading : false,
    products : []
}

const productSlice = createSlice({
    name : "products",
    initialState,
    reducers : {

    },
    extraReducers : (builder)=> {
        builder
        .addCase(fatchProducts.pending , (state)=>{
            state.isLoading = true
        })
        .addCase(fatchProducts.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.products = action.payload
        })
        .addCase(fatchProducts.rejected , (state)=>{
            state.isLoading = false
            state.isError = true
        })

    }
})

export const fatchProducts =  createAsyncThunk('fatch/product' , async()=>{
    // const response = await fetch('https://fakestoreapi.com/products')
    // const response = await fetch('https://prashant-store.onrender.com/estore/products')
    const response = await fetch('https://estore-gdn3.onrender.com/estore')
    const data = await response.json()
    console.log(data);
    return data

})

export default productSlice.reducer