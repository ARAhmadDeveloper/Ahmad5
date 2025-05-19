import React from "react";

export default function VideoSkeleton() {
  return (
    <div className="w-full h-[600px] bg-purple-600/20 rounded-lg overflow-hidden animate-pulse">
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative">
          {/* Play button skeleton */}
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-purple-600/30" />
          </div>
          {/* Loading text */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-4 bg-white/20 rounded" />
        </div>
      </div>
    </div>
  );
}
