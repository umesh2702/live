"use client";

import React from "react";
import { VenueMap } from "@/components/VenueMap";

export default function VenuePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-mono text-[#c6ff00] font-bold uppercase tracking-widest">
          SUMMIT VENUE & SPATIAL MAP
        </span>
        <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-white">
          IMT HYDERABAD CAMPUS GUIDE
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Explore campus hall locations, registration lobby, exhibition pavilion, and lakeside networking courtyard.
        </p>
      </div>

      <VenueMap />
    </div>
  );
}
