"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AnimatedHeading from "../animations/AnimatedHeading";

const services = [
  {
    title: "Web Development",
    lottie: "https://lottie.host/2e5d4f12-d385-4e4d-8e69-b752b78c7ead/qTO5HH75rj.lottie",
    items: ["Custom Websites", "Web Applications", "SaaS Platforms"],
    delay: 0.1,
  },
  {
    title: "Design",
    lottie: "https://lottie.host/f99e6544-7d0b-4630-a29e-8456c43de514/VsKlLd4L9K.lottie",
    items: ["UI/UX Design", "Product Design", "Design Systems"],
    delay: 0.2,
  },
  {
    title: "Optimization",
    lottie: "https://lottie.host/947c9d4c-882f-4792-9943-15fd5f3a769b/4YBMswPJqb.lottie",
    items: ["SEO Optimization", "Performance Optimization", "Website Maintenance"],
    delay: 0.3,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-[120px] bg-white dark:bg-black">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex justify-center mb-4">
            <h2 className="text-3xl md:text-[40px] font-bold text-black dark:text-white inline-block">
              <AnimatedHeading text="Our Services" />
            </h2>
          </div>
          <p className="text-gray-600 dark:text-muted max-w-2xl mx-auto text-sm md:text-base px-4">
            We deliver end-to-end digital solutions, combining engineering precision
            with dynamic beautiful designs to help your business scale effortlessly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{ y: -8 }}
              className="group relative bg-gray-50 dark:bg-card rounded-[16px] border border-gray-200 dark:border-border p-8 transition-all hover:border-accent/50 dark:hover:border-accent/50 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)]"
            >
              <div className="bg-gray-100 dark:bg-[#111] w-24 h-24 rounded-xl flex items-center justify-center mb-6 border border-gray-200 dark:border-white/5 group-hover:scale-105 transition-transform duration-300 p-2 relative overflow-hidden">
                <DotLottieReact
                  src={service.lottie}
                  loop
                  autoplay
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600 dark:text-muted font-medium">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
