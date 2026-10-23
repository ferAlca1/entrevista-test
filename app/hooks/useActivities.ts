"use client";

import { useCallback, useEffect, useState } from "react";
import { fetchActivities } from "../services/activitiesService";
import type { Activity } from "../types/activity";

export function useActivities() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [reloadKey, setReloadKey] = useState<number>(0);
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        setError(null);

        fetchActivities(controller.signal).then((data) => {
            setActivities(Array.isArray(data.activities) ? data.activities : []);
            setLastUpdated(new Date());
        })
        .catch((err: unknown) => {
            if (err instanceof DOMException && err.name === "AbortError") return;
            setError(err instanceof Error ? err.message : "Error desconocido");
        })
        .finally(() => {
            if (!controller.signal.aborted) setLoading(false);
        });
        
        return () => controller.abort();
    }, [reloadKey]);

    const refresh = useCallback(() => setReloadKey((k) => k + 1), []);

    return { activities, loading, error, lastUpdated, refresh };
}
