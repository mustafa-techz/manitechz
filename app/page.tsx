"use client";

import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import AboutUs from "@/components/sections/AboutUs";
import Footer from "@/components/ui/Footer";
import { useEffect } from "react";

export default function Home() {
  
  // Optional: smooth scroll for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <main className="min-h-screen bg-background flex flex-col hide-scrollbar overflow-x-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />
      
      <Hero />
      <TrustedBy />
      <Services />
      <Portfolio />
      <Process />
      <div className="border-t border-border" />
      <TechStack />
      <AboutUs />
      
      <Footer />
    </main>
  );
}
