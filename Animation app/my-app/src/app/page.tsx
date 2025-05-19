import React, { Suspense } from "react";
import VideoComponent from "./components/VideoComponent";
import VideoSkeleton from "./components/VideoSkeleton";
import TraitItemSkeleton from "./components/TraitItemSkeleton";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-black text-white">
      <div className="container mx-auto flex items-center justify-between p-8">
        {/* Left side - Video Section */}
        <div className="w-2/3 relative">
          <Suspense fallback={<VideoSkeleton />}>
            <VideoComponent />
          </Suspense>
        </div>

        {/* Right side - Traits Section */}
        <div className="w-1/3 pl-8">
          <div className="bg-black/80 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-8">
              <span className="text-gray-400">KEEPER #</span>
              <span className="text-6xl font-bold animate-fade-in">8</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-semibold mb-4">TRAITS</h2>

              <div className="space-y-3">
                <TraitItem label="EAR" value="EARRING" special="RAM HOPPER" />
                <TraitItem label="FACE" value="ORGANIC" />
                <TraitItem label="EYES" value="BLINK" />
                <TraitItem label="FACE" value="CROSS MARK" />
                <TraitItem label="HAIR" value="SLEEK HALF UPDO" />
                <TraitItem label="HEADGEAR" value="HUD" />
                <TraitItem label="NECK" value="DENIM VEST" />
                <TraitItem label="MOUTH" value="CONSCIOUSNESS-RAISING" />
              </div>

              <div className="mt-8">
                <button className="w-full bg-black border border-white/20 text-white py-3 px-6 rounded-lg hover:bg-white/10 transition-colors">
                  VIEW ON OPENSEA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// TraitItem component with fade-in animation
function TraitItem({
  label,
  value,
  special = "",
}: {
  label: string;
  value: string;
  special?: string;
}) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-white/10 animate-fade-in">
      <span className="text-gray-400">{label}</span>
      <div className="text-right">
        <div className="text-white">{value}</div>
        {special && <div className="text-sm text-pink-500">{special}</div>}
      </div>
    </div>
  );
}
