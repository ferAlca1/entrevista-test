export function formatDate(value: string | null | undefined): string {
    if (!value) return "-";
    const date = new Date(value);
    return date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });
}

export type StatusKey = "completed" | "pending";

export function getStatus(completed: string): {key: StatusKey, label: string} {
    return completed === "Y"
    ? { key: "completed", label: "Completada" }
    : { key: "pending", label: "Pendiente" };
    
}

export function formatLastUpdated(date: Date | null): string {
    if(!date) return "-";
    return date.toLocaleString("es-PE", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
    });

    
}