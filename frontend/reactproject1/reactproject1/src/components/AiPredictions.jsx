import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAiPredictions } from "../features/aiSlice";
import { Card, CardContent, Typography, Button } from "@mui/material";

export default function AiPredictions() {
    const dispatch = useDispatch();
    const { predictions, status } = useSelector(state => state.ai);

    useEffect(() => { dispatch(fetchAiPredictions()); }, [dispatch]);

    return (
        <Card>
            <CardContent>
                <Typography variant="h6">Прогноз ИИ на 7 дней</Typography>
                {status === "loading" ? <div>Загрузка...</div> : null}
                {predictions.map((p, i) => (
                    <div key={i}>{p.product_name}: {p.recommended_order}</div>
                ))}
                <Button onClick={() => dispatch(fetchAiPredictions())}>Обновить прогноз</Button>
            </CardContent>
        </Card>
    );
}
