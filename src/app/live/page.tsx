"use client";

import React from "react";
import { LiveNowWidget } from "@/components/LiveNowWidget";
import { AnnouncementFeed } from "@/components/AnnouncementFeed";
import { ShieldCheck, Compass, Radio } from "lucide-react";

export default function LivePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* PAGE HEADER */}
      <div className="space-y-3 border-b border-white/10 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-bold uppercase tracking-wider text-white">LIVE PREVIEW</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-400">20th ISDSI Global Conference 2026</span>
          </div>

          <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold">
            DEMO SIMULATION
          </div>
        </div>

        <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-white">
          SESSION IN PROGRESS
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
          Preview the live keynote stage presentation, submit questions to the executive panel, review slide highlights, and prepare for upcoming sessions.
        </p>

        {/* ATTENDEE JOURNEY STEPS */}
        <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">1. Discover</span>
          <span>→</span>
          <span className="px-2.5 py-1 rounded bg-[#c6ff00]/15 text-[#c6ff00] border border-[#c6ff00]/30 font-bold">2. Attend & Watch</span>
          <span>→</span>
          <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">3. Engage (Q&A)</span>
          <span>→</span>
          <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">4. Connect</span>
          <span>→</span>
          <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">5. Save Brief</span>
        </div>
      </div>

      {/* HERO LIVE NOW SESSION CENTERPIECE WIDGET */}
      <LiveNowWidget />

      {/* SUMMIT ANNOUNCEMENT FEED */}
      <div className="pt-8 border-t border-white/10">
        <AnnouncementFeed />
      </div>
    </div>
  );
}
