import { IBookForm } from "@/lib/slices/formSlice";

type ToastStatus = "success" | "error";

interface IToast {
  status: ToastStatus;
  message: string;
  onClose?: () => void;
  formData?: IBookForm
}

export default function Toast({ status, message, onClose, formData }: IToast) {
  const isSuccess = status === "success";

  return (
    <div
      className={`fixed top-4 right-4 z-100 flex items-start gap-3 min-w-[300px] max-w-md p-4 rounded-lg border shadow-lg animate-slide-in ${
        isSuccess
          ? "bg-emerald-950 border-emerald-800 text-emerald-100"
          : "bg-red-950 border-red-800 text-red-100"
      }`}
    >
      <div className="shrink-0 mt-0.5">
        {isSuccess ? (
          <svg
            className="w-5 h-5 text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium leading-relaxed">{message}</p>
        
        {formData && (
          <div className="mt-3 space-y-1 text-xs text-zinc-400">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="flex gap-2">
                <span className="font-medium capitalize">{key}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className={`shrink-0 p-0.5 rounded hover:bg-black/20 transition-colors ${
            isSuccess ? "text-emerald-300" : "text-red-300"
          }`}
          aria-label="Close notification"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}