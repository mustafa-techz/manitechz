"use client";

import { motion } from "framer-motion";
import { LineChart, Search, Target, Cpu, CheckCircle, Rocket } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AnimatedHeading from "../animations/AnimatedHeading";

const steps = [
  { id: "01", title: "Understand", desc: "We align with your vision and business goals.", icon: Search },
  { id: "02", title: "Research", desc: "Deep dive into market, users, and tech constraints.", icon: LineChart },
  { id: "03", title: "Strategy", desc: "Drafting the architecture and user experience blueprints.", icon: Target },
  { id: "04", title: "Design & Dev", desc: "Building scalable platforms with modern toolchains.", icon: Cpu },
  { id: "05", title: "Testing", desc: "Rigorous QA and performance optimization.", icon: CheckCircle },
  { id: "06", title: "Launch & Growth", desc: "Deployment and continuous iteration cycles.", icon: Rocket },
];

export default function Process() {
  return (
    <section id="process" className="py-[120px] bg-white dark:bg-background border-t border-gray-200 dark:border-border overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* Left: Numbered Steps */}
        <div className="flex-1 w-full lg:max-w-[500px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="mb-4">
              <h2 className="text-3xl md:text-[40px] font-bold text-black dark:text-white inline-block">
                <AnimatedHeading text="Our Process" />
              </h2>
            </div>
            <p className="text-gray-600 dark:text-muted text-sm md:text-base">A streamlined workflow designed to turn complex problems into elegant solutions.</p>
          </motion.div>

          <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[19px] before:w-[2px] before:bg-gray-200 dark:before:bg-white/5">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 flex flex-col group"
              >
                {/* Active Indicator Node */}
                <div className="absolute left-[11px] top-1.5 w-[18px] h-[18px] rounded-full bg-white dark:bg-background border-[4px] border-gray-300 dark:border-border group-hover:border-accent transition-colors duration-300" />
                
                <h3 className="text-xl font-bold text-black dark:text-white mb-2 flex items-center gap-4">
                  <span className="text-gray-400 dark:text-muted/50 font-mono text-sm">{step.id}</span>
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-muted text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Abstract Animated Lottie Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex-1 w-full h-[600px] sticky top-32 rounded-3xl bg-gray-50 dark:bg-card border border-gray-200 dark:border-border hidden lg:flex items-center justify-center p-8 overflow-hidden relative"
        >
          <div className="absolute inset-0 w-full h-full p-6">
            <DotLottieReact
              src="https://lottie.host/60fdfeb2-4720-423e-8daa-cfee6d67c1f9/xin7ixlJrS.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
