"use client";

import React from "react";
import { PeopleGrid } from "@/components/PeopleGrid";

export default function PeoplePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-mono text-[#c6ff00] font-bold uppercase tracking-widest">
          PEOPLE & DELEGATES
        </span>
        <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-white">
          SPEAKERS, INVESTORS & EXPERTS
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Meet the academic co-chairs, sovereign fund investors, and founders participating in ISDSI Global Summit 2026.
        </p>
      </div>

      <PeopleGrid />
    </div>
  );
}
