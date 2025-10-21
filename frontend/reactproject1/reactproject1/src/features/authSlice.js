import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api/api";

export const login = createAsyncThunk(
    "auth/login",
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await api.post("/auth/login", { email, password });
            localStorage.setItem("token", response.data.token);
            return response.data.user;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response?.data?.message || "Ошибка");
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, status: "idle", error: null },
    reducers: {
        logout(state) {
            localStorage.removeItem("token");
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => { state.status = "loading"; })
            .addCase(login.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
