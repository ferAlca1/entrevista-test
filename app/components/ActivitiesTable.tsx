import { Activity } from "../types/activity";
import { formatDate } from "../utils/format";
import { StatusBadge } from "./StatusBadge";

interface ActivitiesTableProps {
    activities: Activity[];
    startIndex: number;
}

export function ActivitiesTable({ activities, startIndex }: ActivitiesTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px] text-left text-sm">
        <thead className="border-b text-gray-500">
          <tr>
            <th scope="col" className="p-2">Fecha</th>
            <th scope="col" className="p-2">Asunto</th>
            <th scope="col" className="p-2">Responsable</th>
            <th scope="col" className="p-2">Estado</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((a, i) => (
            <tr key={`${a.id}-${startIndex + i}`} className="border-b">
              <td className="whitespace-nowrap p-2">{formatDate(a.created)}</td>
              <td className="p-2">{a.subject || "(Sin asunto)"}</td>
              <td className="p-2">{a.responsible_name || "Sin asignar"}</td>
              <td className="p-2">
                <StatusBadge completed={a.completed} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}