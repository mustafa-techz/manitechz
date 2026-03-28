"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "../animations/AnimatedHeading";

const projects = [
  {
    title: "AI Automation Platform",
    description: "Enterprise dashboard for tracking neural network training cycles.",
    tech: ["Next.js", "Python", "TensorFlow"],
    color: "from-blue-500/20 to-purple-500/20",
    delay: 0.1
  },
  {
    title: "FinTech Mobile App",
    description: "Secure, real-time banking application with cryptographic features.",
    tech: ["React Native", "Node.js", "PostgreSQL"],
    color: "from-emerald-500/20 to-teal-500/20",
    delay: 0.2
  },
  {
    title: "E-Commerce Architecture",
    description: "High-performance headless storefront supporting high traffic.",
    tech: ["Shopify", "React", "AWS"],
    color: "from-orange-500/20 to-red-500/20",
    delay: 0.3
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-[120px] bg-gray-50 dark:bg-[#1f1f1f]">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left"
        >
          <div>
            <div className="mb-4">
              <h2 className="text-3xl md:text-[40px] font-bold text-black dark:text-white inline-block">
                <AnimatedHeading text="Featured Work" />
              </h2>
            </div>
            <p className="text-gray-600 dark:text-muted max-w-xl text-sm md:text-base">
              A selection of our most impactful digital products, platforms, and 
              infrastructures designed for modern businesses.
            </p>
          </div>
          <button className="w-full md:w-auto px-6 py-3 rounded-full border border-gray-300 dark:border-border text-black dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors font-medium">
            View All Projects
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: project.delay }}
              className="group cursor-pointer"
            >
              <div className="relative h-[280px] w-full rounded-2xl overflow-hidden mb-6 bg-white dark:bg-card border border-gray-200 dark:border-border">
                {/* Simulated Image Placeholder */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:scale-110 transition-transform duration-700 ease-in-out`} />
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-muted/50 font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Image Zoom Effect
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-muted border border-gray-200 dark:border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
