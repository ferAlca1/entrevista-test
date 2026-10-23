import { CURRENT_USER } from "@/app/constants/config";

function getInitials(name: string): string {
    return name.split("").filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join("");
}

export function Sidebar() {
    return (
    <aside className="sticky top-0 hidden h-screen w-44 shrink-0 flex-col bg-slate-900 p-3 text-white md:flex">
      <div className="mb-6 flex items-center gap-2 px-2">
        <div className="h-7 w-7 rounded-md bg-white" aria-hidden="true" />
        <span className="font-semibold">CRM</span>
      </div>

      <nav aria-label="Navegación principal" className="flex-1">
        <a
          href="#"
          aria-current="page"
          className="flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          Actividades
        </a>
      </nav>

      <div className="flex items-center gap-3 border-t border-slate-700 pt-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-blue-900">
          {getInitials(CURRENT_USER.name)}
        </div>
        <span className="text-sm">{CURRENT_USER.name}</span>
      </div>
    </aside>
  );
}