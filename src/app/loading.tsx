export default function RootLoading() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-[#00F0FF] border-t-transparent rounded-full animate-spin" />
        <p className="text-sm text-[#5A5A72]">Loading...</p>
      </div>
    </main>
  );
}
