import React from "react";
import { Tabs, Tab, Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navigation() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleChange = (_, value) => navigate(value);

    return (
        <Tabs value={location.pathname} onChange={handleChange}>
            <Tab label="Текущий мониторинг" value="/dashboard" />
            <Tab label="Исторические данные" value="/history" />
            <Button
                variant="contained"
                sx={{ marginLeft: "auto" }}
                onClick={() => console.log("CSV загрузка")}
            >
                Загрузить CSV
            </Button>
        </Tabs>
    );
}

