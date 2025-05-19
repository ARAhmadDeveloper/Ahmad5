import Image from "next/image";
import AnimatedTraits from "./components/rightSide";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8">
        {/* Left side - GIF/Image */}
        <div className="w-full md:w-1/2 relative aspect-square bg-black-600 rounded-lg overflow-hidden">
          {/* Replace the src with your GIF file path */}
          <div className="relative w-full h-full">
            <Image
              src={require("../animation.gif")}
              alt="Character Animation"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        {/* Right side - Traits */}
        <div className="w-full md:w-1/2 flex flex-col">
          {/* Keeper # */}
          <div className="mb-8">
            <h2 className="text-sm text-gray-400">KEEPER #</h2>
            <h1 className="text-8xl font-bold">Arabic</h1>
          </div>

          {/* Traits List */}
          <div className="space-y-4">
            <h3 className="text-sm text-gray-400">TRAITS</h3>

            {/* <div className="space-y-3">
              <TraitItem label="EAR" value="RAM EARRING" special="SPECIAL" />
              <TraitItem label="FACE" value="ORGANIC" />
              <TraitItem label="EYES" value="BLINK" />
              <TraitItem label="FACE" value="CROSS MARK" />
              <TraitItem label="HAIR" value="SLEEK HALF UPDO" />
              <TraitItem label="HEADGEAR" value="HUD" />
              <TraitItem label="OUTFIT" value="DENIM VEST" />
              <TraitItem label="MOUTH" value="CONTEMPLATING" />
            </div> */}
            <AnimatedTraits/>

            {/* View on OpenSea Button */}
            <button className="mt-8 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
              VIEW ON OPENSEA
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

// Trait Item Component
function TraitItem({
  label,
  value,
  special,
}: {
  label: string;
  value: string;
  special?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-gray-400">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm">{value}</span>
        {special && <span className="text-xs text-pink-500">{special}</span>}
      </div>
    </div>
  );
}
