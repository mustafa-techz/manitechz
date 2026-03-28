"use client";

import { motion } from "framer-motion";
import { Hexagon, Triangle, Circle, Square, Cloud, Layers } from "lucide-react";

const companies = [
  { name: "NovaLabs", icon: Hexagon },
  { name: "TechCore", icon: Triangle },
  { name: "Cloudify", icon: Cloud },
  { name: "DataForge", icon: DatabaseIcon },
  { name: "NextNova", icon: Square },
  { name: "ByteLabs", icon: Layers },
];

function DatabaseIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

export default function TrustedBy() {
  return (
    <section className="py-20 bg-white dark:bg-background border-b border-gray-200 dark:border-border overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-8 text-center">
        <p className="text-gray-500 dark:text-muted text-sm font-medium tracking-wider uppercase">
          Trusted By Innovative Teams
        </p>
      </div>

      <div className="relative flex overflow-x-hidden md:overflow-visible">
        {/* Gradients for fade effect on edges (Desktop Only) */}
        <div className="hidden md:block pointer-events-none absolute left-0 top-0 z-10 h-full w-24 md:w-48 bg-gradient-to-r from-white dark:from-background to-transparent" />
        <div className="hidden md:block pointer-events-none absolute right-0 top-0 z-10 h-full w-24 md:w-48 bg-gradient-to-l from-white dark:from-background to-transparent" />

        {/* Infinite Scroll for Desktop / Tablet */}
        <motion.div
          className="hidden md:flex whitespace-nowrap min-w-full"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // slow move
          }}
        >
          {[...companies, ...companies].map((company, i) => (
            <div
              key={i}
              className="flex items-center gap-2 mx-8 md:mx-16 opacity-70 hover:opacity-100 transition-opacity"
            >
              <company.icon className="w-8 h-8 text-black dark:text-white" />
              <span className="text-xl font-bold text-black dark:text-white tracking-tight">
                {company.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Mobile: Grid/Wrap layout instead of scroll to prevent overflow issues */}
        <div className="flex md:hidden flex-wrap justify-center gap-8 px-6">
          {companies.map((company, i) => (
            <div
              key={i}
              className="flex items-center gap-2 opacity-70"
            >
              <company.icon className="w-6 h-6 text-black dark:text-white" />
              <span className="text-lg font-bold text-black dark:text-white tracking-tight text-center">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
