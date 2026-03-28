"use client";

import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import AnimatedHeading from "../animations/AnimatedHeading";

const services = [
  {
    title: "Web Development",
    lottie:
      "https://lottie.host/2e5d4f12-d385-4e4d-8e69-b752b78c7ead/qTO5HH75rj.lottie",
    items: ["Custom Websites", "Web Applications", "SaaS Platforms"],
    delay: 0.1,
  },
  {
    title: "Design",
    lottie:
      "https://lottie.host/f99e6544-7d0b-4630-a29e-8456c43de514/VsKlLd4L9K.lottie",
    items: ["UI/UX Design", "Product Design", "Design Systems"],
    delay: 0.2,
  },
  {
    title: "Optimization",
    lottie:
      "https://lottie.host/947c9d4c-882f-4792-9943-15fd5f3a769b/4YBMswPJqb.lottie",
    items: [
      "SEO Optimization",
      "Performance Optimization",
      "Website Maintenance",
    ],
    delay: 0.3,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-[120px] bg-white dark:bg-black">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-[40px] font-bold text-black dark:text-white mb-4">
            <AnimatedHeading text="Our Services" />
          </h2>

          <p className="text-gray-600 dark:text-muted max-w-2xl mx-auto">
            We deliver end-to-end digital solutions combining engineering
            precision with modern design experiences.
          </p>
        </motion.div>

        {/* Cards */}
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

              {/* IMAGE - NO BORDER */}
              <div className="w-full h-[160px] mb-8 overflow-hidden flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <DotLottieReact
                    src={service.lottie}
                    loop
                    autoplay
                    className="w-full h-full"
                  />
                </motion.div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                {service.title}
              </h3>

              {/* List */}
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-600 dark:text-muted"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
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