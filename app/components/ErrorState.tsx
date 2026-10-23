interface ErrorStatePageProps {
    message: string;
    onRetry: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStatePageProps) {
    return (
        <div role="alert" className="my-4 rounded border border-red-200 bg-red-50 p-4 text-red-700">

            <p className="mb-2">Ocurrió un error: {message}</p>
            <button onClick={onRetry} className="cursor-pointer rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700">
                Reintentar
            </button>
            
        </div>
    );
}