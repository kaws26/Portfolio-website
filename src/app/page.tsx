import React from "react";
import { HeroSection } from "@/components/heroSection";
import { Boxes } from "@/components/ui/background-boxes";
import skills from "@/components/skills";
import { cn } from "@/lib/utils";
import Skills from "@/components/skills";
import ExperienceTimeline from "@/components/experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* Hero Section */}
      <HeroSection />
      <ExperienceTimeline/>
      <div className="justify-center flex py-4 item-center text-align-center text-5xl">
      <h1 >My skills</h1>
      </div>
      {/* Middle Section */}
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        {/* Overlay */}
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        
        {/* Content */}
        
        <Skills />
      </div>
    </main>
  );
}
