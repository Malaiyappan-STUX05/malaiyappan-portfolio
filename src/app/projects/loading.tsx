export default function ProjectsLoading() {
  return (
    <main className="min-h-screen pt-24 pb-24 md:pt-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-pulse space-y-8">
          <div className="h-10 w-64 bg-[#1A1A25] rounded-lg" />
          <div className="h-6 w-96 bg-[#1A1A25] rounded-lg" />
          <div className="space-y-4 mt-12">
            <div className="h-64 bg-[#1A1A25] rounded-2xl" />
            <div className="h-64 bg-[#1A1A25] rounded-2xl" />
            <div className="h-64 bg-[#1A1A25] rounded-2xl" />
          </div>
        </div>
      </div>
    </main>
  );
}
