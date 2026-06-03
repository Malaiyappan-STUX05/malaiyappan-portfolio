import { profile } from "@/lib/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center">
              <span className="text-accent-primary font-mono font-bold text-xs">M</span>
            </div>
            <span className="text-sm text-text-muted">
              {profile.name} &middot; {new Date().getFullYear()}
            </span>
          </div>
          <p className="text-xs text-text-muted font-mono">
            Built with Next.js &middot; Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
