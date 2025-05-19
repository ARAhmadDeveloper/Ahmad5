import React, { useState } from "react";

export default function VideoComponent() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-[600px] bg-purple-600 rounded-lg overflow-hidden">
      {/* Loading overlay */}
      <div
        className={`absolute inset-0 bg-purple-600/20 z-10 transition-opacity duration-500 ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-white/20 animate-pulse flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-purple-600/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Video */}
      <video
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        controls
        preload="auto"
        onLoadedData={() => setIsLoading(false)}
      >
        <source src="../animation.gif" type="video/gif" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
