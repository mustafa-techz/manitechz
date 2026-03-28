"use client";

import { motion, AnimatePresence } from "framer-motion";
import AnimatedHeading from "../animations/AnimatedHeading";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
const faqs = [
  {
    question: "What web development services does ManiTechZ Solutions provide?",
    answer:
      "ManiTechZ Solutions provides complete web development services including business websites, e-commerce platforms, SaaS applications, landing pages, and custom web applications. Our team specializes in modern technologies like React, Next.js, Node.js, and cloud infrastructure to build fast, scalable, and secure digital platforms."
  },
  {
    question: "How long does it take to develop a professional website?",
    answer:
      "The timeline depends on the project scope and features. A standard business website usually takes 2-4 weeks, while complex platforms like SaaS applications or large e-commerce stores can take 6-10 weeks including design, development, testing, and deployment."
  },
  {
    question: "Will my website be SEO optimized for Google?",
    answer:
      "Yes. All websites developed by ManiTechZ Solutions follow modern SEO best practices including fast loading speed, mobile responsiveness, semantic HTML, optimized structure, and technical SEO to help improve search engine visibility and ranking."
  },
  {
    question: "Do you develop websites for all business domains?",
    answer:
      "Absolutely. We build websites for startups, agencies, local businesses, SaaS companies, e-commerce brands, healthcare, education, and many other industries. Our solutions are tailored to your specific business domain and growth goals."
  },
  {
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes. We offer ongoing website maintenance including security updates, performance optimization, bug fixes, feature updates, and hosting support to ensure your website runs smoothly after launch."
  }
];
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-[100px] md:py-[120px] bg-gray-50 dark:bg-[#0A0A0A]">
      <div className="max-w-[850px] mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-black dark:text-white mb-4">
            <AnimatedHeading text="Frequently Asked Questions" />
          </h2>

          <p className="text-gray-600 dark:text-muted max-w-2xl mx-auto">
            Everything you need to know about our web development services,
            project process, and digital solutions at ManiTechZ Solutions.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 dark:border-border rounded-2xl bg-white dark:bg-card overflow-hidden"
              >

                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-black dark:text-white">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-muted leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}