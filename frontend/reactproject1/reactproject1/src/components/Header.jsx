import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../features/authSlice";

export default function Header() {
    const dispatch = useDispatch();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Умный склад
                </Typography>
                <Button color="inherit" onClick={() => dispatch(logout())}>
                    Выход
                </Button>
            </Toolbar>
        </AppBar>
    );
}




