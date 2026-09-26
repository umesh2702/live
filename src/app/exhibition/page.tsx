"use client";

import React from "react";
import { ExhibitionMap } from "@/components/ExhibitionMap";

export default function ExhibitionPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-mono text-[#c6ff00] font-bold uppercase tracking-widest">
          EXHIBITION EXPERIENCE
        </span>
        <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-white">
          EXHIBITION PAVILION & BOOTHS
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Navigate the 2D exhibition floorplan, tap individual booth beacons, and collect digital founder decks instantly.
        </p>
      </div>

      <ExhibitionMap />
    </div>
  );
}
