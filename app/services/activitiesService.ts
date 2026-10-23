import { ACTIVITIES_URL } from "../constants/config";
import { ActivitiesResponse } from "../types/activity";

export async function fetchActivities(signal?: AbortSignal): Promise<ActivitiesResponse> {
    const res = await fetch(ACTIVITIES_URL, { signal, cache: "no-store" });
    if (!res.ok) {
        throw new Error(`Failed to fetch activities: ${res.statusText}`);
    }
    return (await res.json()) as ActivitiesResponse;
}