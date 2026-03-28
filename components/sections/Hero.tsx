"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import HeroBackground from "../animations/HeroBackground";
import AnimatedButton from "../animations/AnimatedButton";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-[72px] lg:pt-0 overflow-hidden" id="home">
      <HeroBackground />

      <div className="max-w-[1280px] mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center relative z-10 pt-12 lg:pt-0">

        {/* Left Side */}
        <div className="flex flex-col gap-6 lg:col-span-7 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.1] tracking-tight text-black dark:text-white mb-6">
              <span className="moirai-one-regular font-bold">
                ManiTech<span className="text-accent">Z</span>
              </span>
              <br />
              <span >
                Solutions
              </span>
            </h1>

            <span className="text-accent font-medium tracking-[0.12em] uppercase text-xs md:text-sm mb-4 block">
              Manifest Technology. Zero Limits.
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-muted max-w-[540px] leading-relaxed"
          >
            We build intelligent digital platforms using modern web technologies,
            scalable architecture and cutting-edge AI systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4"
          >
            <AnimatedButton text="Let's Connect" variant="secondary" />
            <AnimatedButton text="View Our Work" variant="primary" />
          </motion.div>
        </div>

        {/* Right Side (VISIBLE ONLY ON LG+) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex lg:col-span-5 order-1 lg:order-2 justify-center perspective-1000"
        >
          <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px]">

            <DotLottieReact
              src="https://lottie.host/2b892491-a9b0-4345-bd6c-7562f03edee1/HWo1fXYZI8.lottie"
              loop
              autoplay
              className="w-full h-full relative z-10"
            />

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}