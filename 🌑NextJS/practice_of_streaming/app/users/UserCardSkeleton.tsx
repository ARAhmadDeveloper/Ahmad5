'use client';

export default function UserCardSkeleton() {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl animate-pulse h-40 space-y-4">
      <div className="h-6 bg-slate-700 rounded w-3/4" />
      <div className="h-4 bg-slate-700 rounded w-5/6" />
      <div className="h-4 bg-slate-700 rounded w-1/2" />
      <div className="h-4 bg-slate-700 rounded w-2/3" />
    </div>
  );
}
