import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    status: null,
    error: null
}

// export const productsFetch = createAsyncThunk(("products/productsFetch"), 
// async ({rejectWithValue}) =>{
//     try {
//         const response =  await axios.get("http://localhost:7000/products");
//         return response?.data;
//     } catch (error) {
//         return rejectWithValue("An error occurred while fetching products");
//     }
// })

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(productsFetch.pending, (state) => {
    //             state.status = "pending";
    //         })
    //         .addCase(productsFetch.fulfilled, (state, action) => {
    //             state.status = "succeeded";
    //             state.items = action.payload;
    //         })
    //         .addCase(productsFetch.rejected, (state, action) => {
    //             state.status = "failed";
    //             state.error = action.payload
    //         });
    // }
})

  
export default productsSlice.reducer;