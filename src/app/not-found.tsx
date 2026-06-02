import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-8xl font-black text-[#00F0FF] opacity-20 mb-4">
          404
        </div>
        <h1 className="text-2xl font-bold text-[#E8E8F0] mb-3">
          Page Not Found
        </h1>
        <p className="text-[#9A9AAA] mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="primary" href="/">
            <Home className="w-4 h-4" />
            Go Home
          </Button>
          <Button variant="ghost" href="javascript:history.back()">
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
      </div>
    </main>
  );
}
