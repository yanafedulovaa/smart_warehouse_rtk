import React from "react";

export default function RobotMap({ robots }) {
    return (
        <div style={{ width: "60%", height: "600px", background: "#eee" }}>
            {robots.map((robot) => (
                <div key={robot.id}>
                    {robot.id} - {robot.status} - {robot.battery}%
                </div>
            ))}
        </div>
    );
}
