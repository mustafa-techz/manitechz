"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "../animations/AnimatedHeading";
import FallbackImage from "../ui/FallbackImage";

const techs = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
];

interface OrbitRingProps {
  items: number[];
  size: number;
  translate: number;
  rotateDuration: number;
  reverse?: boolean;
  itemSize: string;
}
function OrbitRing({
  items,
  size,
  translate,
  rotateDuration,
  reverse,
  itemSize,
}: OrbitRingProps) {
  return (
    <motion.div
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ repeat: Infinity, duration: rotateDuration, ease: "linear" }}
      className={`absolute w-[${size}px] h-[${size}px] rounded-full flex items-center justify-center`}
    >
      {items.map((techIndex, index) => {
        const tech = techs[techIndex];
        const angle = 360 / items.length;

        return (
          <div
            key={techIndex}
            className={`absolute ${itemSize} rounded-full bg-white dark:bg-card border border-gray-200 dark:border-border flex items-center justify-center shadow-md`}
            style={{
              transform: `rotate(${index * angle}deg) translateX(${translate}px) rotate(-${index * angle}deg)`
            }}
          >
            <FallbackImage
              src={tech.icon}
              alt={tech.name}
              width={28}
              height={28}
              title={tech.name}
            />
          </div>
        );
      })}
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section className="py-[120px] bg-white dark:bg-black overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-black dark:text-white mb-4 leading-tight">
            <AnimatedHeading text="Expert Web Development" />
            <br className="lg:hidden" />
            <span>& Scalable Digital Solutions</span>
          </h2>

          <p className="text-gray-600 dark:text-muted max-w-2xl mx-auto mb-16">
            We build high-performance websites, web applications, and SaaS platforms using modern technologies to help businesses grow faster online.
          </p>
        </motion.div>

        {/* Orbital Container */}
        <div className="relative w-full max-w-[800px] h-[600px] mx-auto flex items-center justify-center">

          {/* Center Hub */}
          <div className="absolute z-20 w-24 h-24 rounded-full bg-white dark:bg-background border border-gray-200 dark:border-border flex items-center justify-center shadow-[0_0_50px_rgba(0,229,255,0.2)]">
            <span className="text-2xl font-bold bg-linear-to-r from-black to-black/70 dark:from-white dark:to-white/70 bg-clip-text text-transparent">
              MTZ
            </span>
          </div>

          {/* Rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

            <OrbitRing
              items={[0, 1, 2]}
              size={300}
              translate={150}
              rotateDuration={25}
              itemSize="w-12 h-12"
            />

            <OrbitRing
              items={[4, 5, 6, 7, 8]}
              size={450}
              translate={225}
              rotateDuration={35}
              reverse
              itemSize="w-14 h-14"
            />

            <OrbitRing
              items={[9, 10, 11]}
              size={600}
              translate={300}
              rotateDuration={45}
              itemSize="w-16 h-16"
            />

          </div>
        </div>
      </div>
    </section>
  );
}