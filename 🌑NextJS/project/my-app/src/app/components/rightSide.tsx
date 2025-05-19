"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Trait = {
  label: string;
  value: string;
  special?: string;
};

// Replace this with your actual TraitItem component import if it's coming from somewhere else
const TraitItem: React.FC<Trait> = ({ label, value, special }) => (
  <div className="bg-black px-3 py-2 rounded-md shadow-sm">
    <strong>{label}:</strong> {value} {special && <em>({special})</em>}
    <div className="space-y-3">
              <TraitItem label="EAR" value="RAM EARRING" special="SPECIAL" />
              <TraitItem label="FACE" value="ORGANIC" />
              <TraitItem label="EYES" value="BLINK" />
              <TraitItem label="FACE" value="CROSS MARK" />
              <TraitItem label="HAIR" value="SLEEK HALF UPDO" />
              <TraitItem label="HEADGEAR" value="HUD" />
              <TraitItem label="OUTFIT" value="DENIM VEST" />
              <TraitItem label="MOUTH" value="CONTEMPLATING" />
              <TraitItem label="BACKGROUND" value="BLACK" />
            </div>
  </div>
);



const traits: Trait[] = [
  { label: "EAR", value: "RAM EARRING", special: "SPECIAL" },
  { label: "FACE", value: "ORGANIC" },
  { label: "EYES", value: "BLINK" },
  { label: "FACE", value: "CROSS MARK" },
  { label: "HAIR", value: "SLEEK HALF UPDO" },
  { label: "HEADGEAR", value: "HUD" },
  { label: "OUTFIT", value: "DENIM VEST" },
  { label: "MOUTH", value: "CONTEMPLATING" },
];

const AnimatedTraits: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % traits.length);
    }, 2000); // change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const currentTrait = traits[currentIndex];

  return (
    <div className="space-y-3 min-h-[48px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentTrait.label}-${currentIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
        >
          <TraitItem {...currentTrait} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTraits;
