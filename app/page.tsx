"use client";

import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import AboutUs from "@/components/sections/AboutUs";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/ui/Footer";
import { useEffect } from "react";

export default function Home() {

  return (
    <main className="min-h-screen bg-background flex flex-col hide-scrollbar overflow-x-hidden selection:bg-accent/30 selection:text-white">
      <Navbar />

      <Hero />
      <TrustedBy />
      <Services />
      {/* <Portfolio /> */}
      <Process />
      <div className="border-t border-border" />
      <TechStack />
      <AboutUs />
      <FAQ />

      <Footer />
    </main>
  );
}
