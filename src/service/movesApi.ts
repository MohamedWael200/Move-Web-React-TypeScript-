import { useEffect, useState } from "react";
import type { moveData, moveDataApiResponse } from "../types/moveData";

export function useMoves() {
    const [moves, setMoves] = useState<moveData[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchMoves = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/move/moves');
            const data: moveDataApiResponse = await response.json();

            setMoves(data.data); // ✅ الصح
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMoves();
    }, []);

    return { moves, loading };
}


export function useMoveDetails(id: number) {
    const [move, setMove] = useState<moveData | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchMoveDetails = async () => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/move/oneMove/${id}`);
            const data = await response.json();

            setMove(data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id) {
            fetchMoveDetails();
        }
    }, [id]);

    return { move, loading };
}