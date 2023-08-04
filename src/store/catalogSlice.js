import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCatalogAsync = createAsyncThunk("catalog", async () => {
    try {
        const {data} = await axios({
            method: 'get',
            url: 'https://api.edelweiss.plus/api/v2/catalogs/3843/products?productProperties=images'
        });
        return data;
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