import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/authSlice";
import { TextField, Button, Checkbox, FormControlLabel, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error } = useSelector(state => state.auth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(login({ email, password }));
        if (login.fulfilled.match(result)) navigate("/dashboard");
    };

    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 10 }}>
            <form onSubmit={handleSubmit}>
                {error && <Alert severity="error">{error}</Alert>}
                <TextField fullWidth label="Email" value={email} onChange={e => setEmail(e.target.value)} margin="normal" />
                <TextField fullWidth label="Пароль" type="password" value={password} onChange={e => setPassword(e.target.value)} margin="normal" />
                <FormControlLabel control={<Checkbox checked={remember} onChange={e => setRemember(e.target.checked)} />} label="Запомнить меня" />
                <Button fullWidth type="submit" variant="contained" sx={{ mt: 2 }}>Войти</Button>
            </form>
        </Box>
    );
}
