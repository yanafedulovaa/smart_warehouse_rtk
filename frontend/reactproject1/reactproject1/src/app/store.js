
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import robotsReducer from "../features/robotsSlice";
import scansReducer from "../features/scansSlice";
import inventoryReducer from "../features/inventorySlice";
import aiReducer from "../features/aiSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        robots: robotsReducer,
        scans: scansReducer,
        inventory: inventoryReducer,
        ai: aiReducer,
    },
});

export default store;


