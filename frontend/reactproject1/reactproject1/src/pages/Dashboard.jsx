import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import RobotMap from "../components/RobotMap";
import StatsCards from "../components/StatsCards";
import ScansTable from "../components/ScansTable";
import AiPredictions from "../components/AiPredictions";
import { fetchRobots } from "../features/robotsSlice";

export default function Dashboard() {
    const dispatch = useDispatch();
    const { robots, status } = useSelector(state => state.robots);

    useEffect(() => {
        dispatch(fetchRobots());
        const interval = setInterval(() => dispatch(fetchRobots()), 5000);
        return () => clearInterval(interval);
    }, [dispatch]);

    if (status === "loading") return <div>Загрузка...</div>;

    return (
        <>
            <Header />
            <Navigation />
            <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
                <RobotMap robots={robots} />
                <div style={{ flex: 1 }}>
                    <StatsCards robots={robots} />
                    <ScansTable />
                    <AiPredictions />
                </div>
            </div>
        </>
    );
}



