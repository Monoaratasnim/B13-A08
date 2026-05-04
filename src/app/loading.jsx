export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">

      <div className="animate-spin rounded-full h-14 w-14 border-4 border-indigo-500 border-t-transparent"></div>

      <p className="mt-4 text-gray-600 text-sm">
        Loading...
      </p>

    </div>
  );
}