export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="w-10 h-10 border-4 border-zinc-200 rounded-full animate-spin"
        style={{ borderTopColor: "#F39AB3" }}
      />
    </div>
  );
}
