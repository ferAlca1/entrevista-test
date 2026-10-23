export interface Activity {
    id: string;
    type_id: string;
    subject: string;
    completed: string;
    created: string;
    end_time: string;
    responsible_id: string;
    responsible_name: string;
    owner_type_id: string;
    owner_id: string;
}

export interface ActivitiesResponse {
    source: string;
    last_sync: string;
    total: string;
    activities: Activity[];
}