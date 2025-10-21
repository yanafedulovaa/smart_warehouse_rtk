import React from "react";
import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export default function ScansTable() {
    const scans = useSelector((state) => state.scans.scans);

    return (
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Время</TableCell>
                    <TableCell>ID робота</TableCell>
                    <TableCell>Зона</TableCell>
                    <TableCell>Товар</TableCell>
                    <TableCell>Количество</TableCell>
                    <TableCell>Статус</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {scans.map((scan, i) => (
                    <TableRow key={i}>
                        <TableCell>{scan.time}</TableCell>
                        <TableCell>{scan.robotId}</TableCell>
                        <TableCell>{scan.zone}</TableCell>
                        <TableCell>{scan.product}</TableCell>
                        <TableCell>{scan.quantity}</TableCell>
                        <TableCell>{scan.status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
