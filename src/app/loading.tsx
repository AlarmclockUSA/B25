export default function Loading() {
  return (
    <div className="min-h-screen bg-[#222222] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#DD8D00] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#F8F4F1] text-lg">Loading...</p>
      </div>
    </div>
  );
} 