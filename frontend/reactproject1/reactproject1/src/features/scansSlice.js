import { createSlice } from "@reduxjs/toolkit";

const scansSlice = createSlice({
    name: "scans",
    initialState: { scans: [] },
    reducers: {
        addScan(state, action) {
            state.scans.unshift(action.payload);
            if (state.scans.length > 20) state.scans.pop();
        },
    },
});

export const { addScan } = scansSlice.actions;
export default scansSlice.reducer;
