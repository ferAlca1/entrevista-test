"use client";

import { useEffect, useMemo, useState } from "react";
import { useActivities } from "./hooks/useActivities";
import { PAGE_SIZE } from "./constants/config";
import { ActivitiesTable } from "./components/ActivitiesTable";
import { EmptyState } from "./components/EmptyState";
import { ErrorState } from "./components/ErrorState";
import { LoadingState } from "./components/feedback/LoadingState";
import { Pagination } from "./components/Pagination";
import { Sidebar } from "./components/layout/Sidebar";
import { formatLastUpdated } from "./utils/format";

export default function Page() {

  const { activities, loading, error, lastUpdated, refresh } = useActivities();
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(activities.length / PAGE_SIZE));
  const startIndex = (page - 1) * PAGE_SIZE;

  const pageItems = useMemo(
    () => activities.slice(startIndex, startIndex + PAGE_SIZE),
    [activities, startIndex]
  );

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const isFirstLoad = loading && activities.length === 0;
  const isEmpty = !loading && !error && activities.length === 0;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
    <main className="mx-auto max-w-5xl p-6">
      <header className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Actividades CRM</h1>
          <p className="text-gray-500">Total: {activities.length} actividades</p>
        </div>
        <div className="flex items-center gap-4">
        <div className="text-right text-xs text-gray-500">
          <p>Última actualización</p>
          <p>{formatLastUpdated(lastUpdated)}</p>
        </div>
        <button
          onClick={refresh}
          disabled={loading}
          className="cursor-pointer rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        >
          {loading ? "Actualizando..." : "Actualizar"}
        </button>
      </div>
      </header>

      {isFirstLoad && <LoadingState />}
      {error && <ErrorState message={error} onRetry={refresh} />}
      {isEmpty && <EmptyState />}

      {activities.length > 0 && (
        <>
          <ActivitiesTable activities={pageItems} startIndex={startIndex} />
          <Pagination page={page} totalPages={totalPages} onChange={setPage} />
        </>
      )}
    </main>
    </div>
  );
}
