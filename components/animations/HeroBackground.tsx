"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Starfield from "./framer-modules/StarsArea";
import Nova from "./framer-modules/Orb1";

export default function HeroBackground() {
  const { resolvedTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = resolvedTheme || theme;
  return (
    <div 
      className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none"
    >
      {currentTheme === "dark" ? (
        <div className="w-full h-full bg-[#030303]">
          <Starfield 
            stars={1200} 
            speed={2} 
            background="#030303" 
            starColor="#ffffff" 
            size={1.2}
          />
        </div>
      ) : (
        <div className="w-full h-full">
          <Nova 
            hue={210} 
            hoverIntensity={0.3} 
          />
        </div>
      )}
    </div>
  );
}
