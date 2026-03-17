// app/loading.js

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full">
      {/* Spinner Animation */}
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-t-transparent"></div>
      <h2 className="mt-4 text-xl font-semibold text-gray-700">Loading AD Life Trust...</h2>
    </div>
  );
}