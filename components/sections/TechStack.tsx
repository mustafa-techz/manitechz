"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "../animations/AnimatedHeading";

const techs = [
  "React", "Next.js", "Node.js", "MongoDB",
  "Express", "PostgreSQL", "Redis", "AWS",
  "Firebase", "Tailwind", "Framer Motion", "Git",
  "Linux", "Stripe"
];

export default function TechStack() {
  return (
    <section className="py-[120px] bg-white dark:bg-black overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[36px] font-bold text-black dark:text-white mb-4">
            <AnimatedHeading text="Implement your animations in just a few clicks" />
          </h2>
          <p className="text-gray-600 dark:text-muted max-w-2xl mx-auto mb-16">
            Our ecosystem integrates flawlessly with modern tech stacks,
            ensuring maximum performance and zero friction.
          </p>
        </motion.div>
        
        {/* Orbital Animation Container */}
        <div className="relative w-full max-w-[800px] h-[600px] mx-auto flex items-center justify-center">
          
          {/* Center Hub */}
          <div className="absolute z-20 w-24 h-24 rounded-full bg-white dark:bg-background border border-gray-200 dark:border-border flex items-center justify-center shadow-[0_0_50px_rgba(0,229,255,0.2)]">
            <span className="text-2xl font-bold bg-gradient-to-r from-black to-black/70 dark:from-white dark:to-white/70 bg-clip-text text-transparent">
              Z
            </span>
          </div>

          {/* Orbits */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Inner Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute w-[300px] h-[300px] rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center"
            >
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="absolute w-12 h-12 rounded-full bg-white dark:bg-card border border-gray-200 dark:border-border flex items-center justify-center shadow-lg"
                  style={{
                    transform: `rotate(${i * 90}deg) translateX(150px) rotate(-${i * 90}deg)`
                  }}
                >
                  <span className="text-[10px] font-bold text-gray-500 dark:text-muted pointer-events-auto hover:text-black dark:hover:text-white transition-colors cursor-default">
                    {techs[i]}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Middle Ring */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="absolute w-[450px] h-[450px] rounded-full border border-gray-100 dark:border-white/[0.05] flex items-center justify-center"
            >
              {[4, 5, 6, 7, 8].map((i, index) => (
                <div key={i} className="absolute w-14 h-14 rounded-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-border flex items-center justify-center shadow-md"
                  style={{
                    transform: `rotate(${index * 72}deg) translateX(225px) rotate(-${index * 72}deg)`
                  }}
                >
                  <span className="text-[10px] font-medium text-gray-700 dark:text-white/70 pointer-events-auto hover:text-black dark:hover:text-white transition-colors cursor-default">
                    {techs[i]}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Outer Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
              className="absolute w-[600px] h-[600px] rounded-full border border-gray-50 dark:border-white/[0.02] flex items-center justify-center"
            >
              {[9, 10, 11, 12, 13].map((i, index) => (
                <div key={i} className="absolute w-16 h-16 rounded-full bg-white dark:bg-background border border-gray-200 dark:border-border flex items-center justify-center opacity-80"
                  style={{
                    transform: `rotate(${index * 72}deg) translateX(300px) rotate(-${index * 72}deg)`
                  }}
                >
                   <span className="text-[10px] text-center px-1 font-medium text-gray-500 dark:text-muted pointer-events-auto hover:text-black dark:hover:text-white transition-colors cursor-default">
                    {techs[i]}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
