import React from "react";
import { Box } from "@mui/material";

export default function WebSocketIndicator() {
    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 10,
                right: 10,
                width: 16,
                height: 16,
                bgcolor: "green",
                borderRadius: "50%",
            }}
        />
    );
}
