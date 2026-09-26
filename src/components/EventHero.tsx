"use client";

import React from "react";
import Link from "next/link";
import { useEventContext } from "@/lib/event-store";
import { EVENT_DETAILS } from "@/lib/event-data";
import { ArrowRight, Calendar, MapPin, ShieldCheck, Zap, Radio, Bookmark, Smartphone, Sparkles } from "lucide-react";

export const EventHero: React.FC = () => {
  const { activeSession, upNextSession, simulateNfcTap, delegateName } = useEventContext();

  return (
    <section className="relative w-full overflow-hidden bg-[#090a0c] pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      {/* ATMOSPHERIC GRADIENT SURFACES */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] pointer-events-none opacity-20">
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-slate-700 rounded-full blur-[140px]" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-[#c6ff00]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: HERO HEADLINE & EDITORIAL HIGHLIGHTS */}
        <div className="lg:col-span-7 space-y-7">
          
          {/* INSTITUTIONAL BADGE */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs">
            <ShieldCheck className="w-4 h-4 text-[#c6ff00]" />
            <span className="text-slate-300 font-medium">
              Official Concept Demonstration • Digital Experience Layer by <strong className="text-white">ULink</strong>
            </span>
          </div>

          {/* MAIN SUMMIT TITLE */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#c6ff00] font-bold uppercase">
              <span>26—29 DECEMBER 2026</span>
              <span>•</span>
              <span>IMT HYDERABAD</span>
            </div>
            
            <h1 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
              ISDSI GLOBAL <br />
              <span className="text-gradient-white">INVESTMENT SUMMIT</span> <br />
              <span className="text-slate-400">2026</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-2xl pt-1">
              &ldquo;{EVENT_DETAILS.tagline}&rdquo;
            </p>
          </div>

          {/* METADATA CHIPS */}
          <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
            <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300">
              <Calendar className="w-4 h-4 text-[#c6ff00]" />
              <span>December 26—29, 2026</span>
            </div>
            <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>IMT Hyderabad, India</span>
            </div>
            <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Technology Provider: UCreates</span>
            </div>
          </div>

          {/* CALL TO ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/live"
              className="py-3.5 px-7 rounded-xl bg-[#c6ff00] hover:bg-[#b8f000] text-black font-syne font-bold text-xs tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
            >
              ENTER THE DIGITAL SUMMIT <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/schedule"
              className="py-3.5 px-7 rounded-xl glass-panel hover:bg-white/10 text-white font-syne font-semibold text-xs tracking-wider border border-white/15 transition-all flex items-center justify-center gap-2"
            >
              EXPLORE THE PROGRAMME →
            </Link>
          </div>

          <p className="text-[11px] text-slate-500 font-medium pt-1">
            * Official summit details sourced from ISDSI public materials. Fictional scenarios are clearly marked as demo content.
          </p>
        </div>

        {/* RIGHT COLUMN: ATTENDEE PERSONALIZED PASSPORT & LIVE SESSION HIGHLIGHT */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* DELEGATE EXPERIENCE PREVIEW WIDGET */}
          <div className="glass-panel rounded-3xl p-6 space-y-5 border border-white/15 relative overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center space-x-2">
                <div className="w-7 h-7 rounded-lg bg-[#c6ff00] text-black font-syne font-bold flex items-center justify-center text-xs">
                  U
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#c6ff00] font-bold uppercase block">ULINK EXPERIENCE PREVIEW</span>
                  <span className="text-xs font-bold text-white">Explore the summit as a delegate</span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/30 text-[10px] font-mono font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                DEMO SIMULATION
              </span>
            </div>

            {/* ACTIVE SIMULATED SESSION */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="text-[#c6ff00] font-bold">LIVE IN GRAND BALLROOM</span>
                <span>{activeSession.startTime} ONWARDS</span>
              </div>

              <h3 className="font-syne font-bold text-lg text-white leading-snug">
                {activeSession.title}
              </h3>

              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {activeSession.description}
              </p>

              <div className="pt-2 flex items-center justify-between text-xs border-t border-white/10">
                <span className="text-slate-400">Hall: <strong className="text-white">{activeSession.location}</strong></span>
                <Link href="/live" className="text-[#c6ff00] font-bold hover:underline">
                  Join Stream →
                </Link>
              </div>
            </div>

            {/* UP NEXT FOR YOU */}
            <div className="pt-4 border-t border-white/10 space-y-2 bg-white/[0.02] -mx-6 -mb-6 p-6 rounded-b-3xl">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="text-cyan-400 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> NEXT FOR YOU
                </span>
                <span>{upNextSession.dateLabel} • {upNextSession.startTime}</span>
              </div>
              <h4 className="font-syne font-bold text-xs text-white line-clamp-1">
                {upNextSession.title}
              </h4>

              <button
                onClick={() => simulateNfcTap("tp-hall")}
                className="w-full mt-2 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/10 flex items-center justify-center gap-2 transition-all"
              >
                <Smartphone className="w-3.5 h-3.5 text-[#c6ff00]" />
                Simulate Hall Beacon Scan
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
