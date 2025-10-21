import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api/api";

export const fetchInventory = createAsyncThunk(
    "inventory/fetch",
    async (params) => {
        const response = await api.get("/inventory/history", { params });
        return response.data.items;
    }
);

const inventorySlice = createSlice({
    name: "inventory",
    initialState: { items: [], status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchInventory.pending, (state) => { state.status = "loading"; })
            .addCase(fetchInventory.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload;
            })
            .addCase(fetchInventory.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default inventorySlice.reducer;
