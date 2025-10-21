import React from "react";
import { Paper, Typography } from "@mui/material";

export default function ScansTable() {
    return (
        <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6" gutterBottom>
                Последние сканирования
            </Typography>
            <Typography variant="body2" color="text.secondary">
                [Таблица сканирований будет здесь]
            </Typography>
        </Paper>
    );
}
