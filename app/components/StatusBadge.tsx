import { getStatus, StatusKey } from "../utils/format";

const STYLES: Record<StatusKey, string> = {
  completed: "bg-green-100 text-green-700",
  pending: "bg-red-100 text-red-700",
};

interface StatusBadgeProps {
    completed: string;
}

export function StatusBadge({ completed }: StatusBadgeProps) {
  const { key, label } = getStatus(completed);
  return (
    <span className={`rounded px-2 py-1 text-xs font-medium ${STYLES[key]}`}>
      {label}
    </span>
  );
}