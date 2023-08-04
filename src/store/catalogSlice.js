import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCatalogAsync = createAsyncThunk("catalog", async () => {
    try {

    } catch (err) {
        console.error(err)
    }
});

export const catalogSlice = createSlice({
    name: "catalog", 
    initialState: {},
    reducers:{}, 
    extraReducers: (builder) => {
        builder.addCase(fetchCatalogAsync.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

export const selectCatalog = (state) => state.catalog;

export default catalogSlice.reducer;