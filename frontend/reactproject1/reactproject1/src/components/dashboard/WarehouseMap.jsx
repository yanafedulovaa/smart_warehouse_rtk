import React from "react";
import { Paper, Box, Typography } from "@mui/material";

export default function WarehouseMap() {
    return (
        <Paper sx={{ height: "60vh", p: 2 }}>
            <Typography variant="h6" gutterBottom>
                Карта склада
            </Typography>
            <Box
                sx={{
                    backgroundColor: "#f0f0f0",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="body2" color="text.secondary">
                    [Интерактивная карта появится здесь]
                </Typography>
            </Box>
        </Paper>
    );
}
