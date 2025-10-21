import React from "react";
import { Paper, Typography, Button } from "@mui/material";

export default function PredictiveAnalytics() {
    return (
        <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
                Прогноз ИИ на следующие 7 дней
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
                [Аналитика и прогноз появятся здесь]
            </Typography>
            <Button variant="outlined">Обновить прогноз</Button>
        </Paper>
    );
}
