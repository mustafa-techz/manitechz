"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AnimatedHeading from "../animations/AnimatedHeading";

export default function AboutUs() {
  return (
    <section id="about" className="py-[100px] md:py-[120px] bg-white dark:bg-black">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="bg-gradient-to-br from-gray-50 dark:from-[#161616] to-white dark:to-[#0A0A0A] rounded-3xl border border-gray-200 dark:border-border p-8 md:p-20 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center overflow-hidden relative">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Left: Text Content */}
          <div className="flex-1 relative z-10 text-center lg:text-left">
            <div className="mb-6">
              <h2 className="text-3xl md:text-[40px] font-bold text-black dark:text-white inline-block">
                <AnimatedHeading text="Unlock your creative potential with AI" />
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 dark:text-muted mb-6 leading-relaxed px-2 md:px-0">
              ManiTechZ is a technology studio focused on building high-performance 
              digital products for startups and enterprises.
            </p>
            <p className="text-gray-600 dark:text-muted leading-relaxed mb-10 text-sm md:text-base px-2 md:px-0">
              We combine engineering precision with modern design to create 
              scalable platforms and intelligent web experiences.
            </p>

            {/* Counters */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-8 justify-center lg:justify-start">
              <div>
                <h4 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">10+</h4>
                <span className="text-[10px] md:text-xs text-gray-500 dark:text-muted uppercase tracking-wider font-bold">Years Experience</span>
              </div>
              <div className="w-px bg-gray-200 dark:bg-border hidden sm:block" />
              <div>
                <h4 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">250+</h4>
                <span className="text-[10px] md:text-xs text-gray-500 dark:text-muted uppercase tracking-wider font-bold">Projects Delivered</span>
              </div>
              <div className="w-px bg-gray-200 dark:bg-border hidden sm:block" />
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">14</h4>
                <span className="text-[10px] md:text-xs text-gray-500 dark:text-muted uppercase tracking-wider font-bold">Core Technologies</span>
              </div>
            </div>
            
            <button className="mt-12 w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-white dark:text-black font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-accent/20">
              Read Our Story
            </button>
          </div>

          {/* Right: Illustration */}
          <div className="flex-1 w-full h-[400px] relative z-10 hidden lg:block">
            <div className="absolute inset-0 bg-gray-100 dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-border overflow-hidden flex items-center justify-center p-6">
              <DotLottieReact
                src="https://lottie.host/2fc8d78f-c184-42c0-ba35-f219aa904df8/vbMMHyX3m5.lottie"
                loop
                autoplay
                className="w-full h-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
