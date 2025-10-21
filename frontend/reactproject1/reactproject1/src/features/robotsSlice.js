import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api/api";

export const fetchRobots = createAsyncThunk("robots/fetch", async () => {
    const response = await api.get("/dashboard/current");
    return response.data.robots;
});

const robotsSlice = createSlice({
    name: "robots",
    initialState: { robots: [], status: "idle", error: null },
    reducers: {
        updateRobotData(state, action) {
            const updated = action.payload;
            const index = state.robots.findIndex(r => r.id === updated.id);
            if (index >= 0) state.robots[index] = updated;
            else state.robots.push(updated);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRobots.pending, (state) => { state.status = "loading"; })
            .addCase(fetchRobots.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.robots = action.payload;
            })
            .addCase(fetchRobots.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const { updateRobotData } = robotsSlice.actions;
export default robotsSlice.reducer;





