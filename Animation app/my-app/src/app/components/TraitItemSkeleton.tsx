import React from "react";

export default function TraitItemSkeleton() {
  return (
    <div className="flex justify-between items-center py-2 border-b border-white/10">
      <div className="w-20 h-4 bg-gray-700 rounded animate-pulse" />
      <div className="text-right">
        <div className="w-32 h-4 bg-gray-700 rounded animate-pulse mb-1" />
      </div>
    </div>
  );
}
