import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { Typography, Box } from "@mui/material";

export default function History() {
    return (
        <>
            <Header />
            <Navigation />
            <Box sx={{ p: 2 }}>
                <Typography variant="h5">Исторические данные</Typography>
                <Typography>Здесь будет таблица с фильтрами, CSV загрузкой и экспортом.</Typography>
            </Box>
        </>
    );
}
