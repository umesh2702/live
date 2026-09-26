"use client";

import React from "react";
import { ScheduleTimeline } from "@/components/ScheduleTimeline";

export default function SchedulePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-mono text-[#c6ff00] font-bold uppercase tracking-widest">
          PROGRAMME TIMELINE
        </span>
        <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-white">
          ISDSI SUMMIT SCHEDULE 2026
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Browse the 4-day summit agenda (December 26–29, 2026). Filter by category or day and bookmark sessions to your personal schedule.
        </p>
      </div>

      <ScheduleTimeline />
    </div>
  );
}
