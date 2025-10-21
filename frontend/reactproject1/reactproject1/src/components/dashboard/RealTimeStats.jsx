import React from "react";
import { Paper, Typography, Grid } from "@mui/material";

export default function RealtimeStats() {
    return (
        <Paper sx={{ p: 2, mb: 2 }}>
            <Typography variant="h6" gutterBottom>
                Статистика в реальном времени
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>Активных роботов: 12/15</Grid>
                <Grid item xs={6}>Проверено сегодня: 428</Grid>
                <Grid item xs={6}>Критических остатков: 7</Grid>
                <Grid item xs={6}>Средний заряд: 83%</Grid>
            </Grid>
        </Paper>
    );
}
