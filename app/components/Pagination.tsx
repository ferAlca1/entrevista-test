interface PaginationProps {
    page: number;
    totalPages: number;
    onChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Paginación" className="mt-4 flex items-center justify-end gap-3">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="cursor-pointer rounded border px-3 py-1 disabled:opacity-40"
      >
        Anterior
      </button>
      <span className="text-sm">
        Página {page} de {totalPages}
      </span>
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="cursor-pointer rounded border px-3 py-1 disabled:opacity-40"
      >
        Siguiente
      </button>
    </nav>
  );
}