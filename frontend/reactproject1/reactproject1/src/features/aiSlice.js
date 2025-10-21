import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api/api";

export const fetchAiPredictions = createAsyncThunk(
    "ai/fetchPredictions",
    async () => {
        const response = await api.post("/ai/predict", { period_days: 7 });
        return response.data.predictions;
    }
);

const aiSlice = createSlice({
    name: "ai",
    initialState: { predictions: [], status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAiPredictions.pending, (state) => { state.status = "loading"; })
            .addCase(fetchAiPredictions.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.predictions = action.payload;
            })
            .addCase(fetchAiPredictions.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export default aiSlice.reducer;
