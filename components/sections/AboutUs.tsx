"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AnimatedHeading from "../animations/AnimatedHeading";
import { useEffect, useRef } from "react";

/* Counter Component */
function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });

      return controls.stop;
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
    </span>
  );
}

export default function AboutUs() {
  return (
    <section
      id="about"
      className="py-[80px] sm:py-[100px] lg:py-[120px] bg-white dark:bg-black"
    >
      <div className="max-w-[1280px] mx-auto px-6">

        <div className="bg-gradient-to-br from-gray-50 dark:from-[#161616] to-white dark:to-[#0A0A0A] rounded-3xl border border-gray-200 dark:border-border p-6 sm:p-10 lg:p-16 grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden">

          {/* Glow background */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center lg:text-left"
          >

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-black dark:text-white mb-6 leading-tight">
              <AnimatedHeading text="About ManiTechZ" />
            </h2>

            <p className="text-base md:text-lg text-gray-600 dark:text-muted leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              ManiTechZ Solutions is a modern web development agency delivering
              high-performance websites, SaaS platforms, and custom business
              applications across multiple industries and domains.
            </p>

            <p className="text-sm md:text-base text-gray-600 dark:text-muted mb-10 max-w-xl mx-auto lg:mx-0">
              We specialize in building secure, scalable, and SEO-optimized
              digital products using modern technologies like React, Next.js,
              Node.js, cloud infrastructure, and AI-powered solutions.
            </p>

            {/* COUNTERS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center lg:text-left">

              <div>
                <h4 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-1">
                  <Counter value={120} />+
                </h4>
                <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-muted font-semibold">
                  Websites Built
                </span>
              </div>

              <div>
                <h4 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-1">
                  <Counter value={60} />+
                </h4>
                <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-muted font-semibold">
                  Happy Clients
                </span>
              </div>

              <div>
                <h4 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-1">
                  <Counter value={15} />+
                </h4>
                <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-muted font-semibold">
                  Technologies
                </span>
              </div>

            </div>
          </motion.div>

          {/* RIGHT ILLUSTRATION */}
          <div className="w-full h-[280px] sm:h-[350px] lg:h-[420px] relative hidden lg:block">
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