"use client";

import React from "react";
import { StartupGrid } from "@/components/StartupGrid";

export default function DiscoverPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-mono text-[#c6ff00] font-bold uppercase tracking-widest">
          STARTUP DISCOVERY
        </span>
        <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-white">
          CAPITAL PIPELINE & STARTUPS
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Discover high-impact ventures across CleanTech, AgriTech, Supply Chain, and HealthTech showcasing at IMT Hyderabad.
        </p>
      </div>

      <StartupGrid />
    </div>
  );
}
