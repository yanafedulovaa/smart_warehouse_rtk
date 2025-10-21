
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";

function App() {
    const token = localStorage.getItem("token");

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/dashboard"
                element={token ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
                path="/history"
                element={token ? <History /> : <Navigate to="/login" />}
            />
            <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
    );
}

export default App;





