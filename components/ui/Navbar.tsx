"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [blur, setBlur] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
  ];

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setBlur(latest > 50);
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-99999 h-[72px] transition-colors duration-300",
        blur
          ? "bg-white/80 dark:bg-black/60 backdrop-blur-md border-b border-gray-200 dark:border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-1 moirai-one-regular">
          <span className="bg-gradient-to-r from-black to-black/70 dark:from-white dark:to-white/70 bg-clip-text text-transparent">
            ManiTech
          </span>
          <span className="text-accent">Z</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500 dark:text-muted">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <ThemeToggle />

          <Link
            href="#contact"
            className="ml-4 px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black hover:opacity-90 transition-opacity font-semibold"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-black dark:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 9 : 0 }}
                className="w-full h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={{ opacity: isOpen ? 0 : 1 }}
                className="w-full h-0.5 bg-current rounded-full"
              />
              <motion.span
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -9 : 0 }}
                className="w-full h-0.5 bg-current rounded-full"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10"
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-600 dark:text-muted hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full py-3 text-center rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold"
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
