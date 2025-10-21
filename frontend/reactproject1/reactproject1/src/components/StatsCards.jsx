import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

export default function StatsCards({ robots }) {
    const active = robots.filter(r => r.status === "active").length;
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Card>
                    <CardContent>
                        <Typography>Активных роботов</Typography>
                        <Typography variant="h5">{active}/{robots.length}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}