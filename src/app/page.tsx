"use client";

import React from "react";
import Link from "next/link";
import { EventHero } from "@/components/EventHero";
import { HowULinkWorks } from "@/components/HowULinkWorks";
import { ULinkTouchpointsSection } from "@/components/ULinkTouchpointsSection";
import { AnnouncementFeed } from "@/components/AnnouncementFeed";
import { ScheduleTimeline } from "@/components/ScheduleTimeline";
import { StartupGrid } from "@/components/StartupGrid";
import { PeopleGrid } from "@/components/PeopleGrid";
import { ArrowRight, Radio, Calendar, Users, Rocket, Building2, Sparkles, ShieldCheck, MapPin } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      {/* CINEMATIC HERO SECTION */}
      <EventHero />

      {/* HOW ULINK WORKS SECTION */}
      <HowULinkWorks />

      {/* FEATURED SUMMIT SCHEDULE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-[#c6ff00] font-bold uppercase tracking-widest">
              SUMMIT PROGRAMME & AGENDA
            </span>
            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
              ISDSI SUMMIT SCHEDULE
            </h2>
          </div>
          <Link
            href="/schedule"
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#c6ff00] font-syne font-bold text-xs border border-white/10 transition-colors flex items-center gap-1.5"
          >
            VIEW FULL 4-DAY SCHEDULE →
          </Link>
        </div>

        <ScheduleTimeline />
      </section>

      {/* FEATURED STARTUP DISCOVERY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-[#c6ff00] font-bold uppercase tracking-widest">
              INVESTMENT PIPELINE
            </span>
            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
              FEATURED DEMO STARTUPS
            </h2>
          </div>
          <Link
            href="/discover"
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#c6ff00] font-syne font-bold text-xs border border-white/10 transition-colors flex items-center gap-1.5"
          >
            EXPLORE ALL STARTUPS →
          </Link>
        </div>

        <StartupGrid />
      </section>

      {/* PHYSICAL ULINK TOUCHPOINTS SHOWCASE */}
      <ULinkTouchpointsSection />

      {/* FEATURED SPEAKERS & INVESTORS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-[#c6ff00] font-bold uppercase tracking-widest">
              PEOPLE & LEADERSHIP
            </span>
            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
              SPEAKERS & INVESTOR DELEGATES
            </h2>
          </div>
          <Link
            href="/people"
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#c6ff00] font-syne font-bold text-xs border border-white/10 transition-colors flex items-center gap-1.5"
          >
            VIEW ALL PEOPLE →
          </Link>
        </div>

        <PeopleGrid />
      </section>

      {/* LIVE ANNOUNCEMENT TICKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnnouncementFeed />
      </section>

      {/* BOTTOM CALLOUT FOR ISDSI / IMT EVALUATORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel-lime p-8 rounded-3xl text-center space-y-6 border border-[#c6ff00]/40 relative overflow-hidden shadow-2xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#c6ff00]/20 text-[#c6ff00] text-xs font-mono font-bold border border-[#c6ff00]/40">
            <Sparkles className="w-4 h-4" /> READY FOR DEMONSTRATION AT IMT HYDERABAD
          </div>

          <h3 className="font-syne font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white max-w-3xl mx-auto leading-tight">
            Transform ISDSI Global Investment Summit 2026 into a live connected ecosystem.
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Experience how ULink bridges physical session halls, startup booths, and VIP delegate networking into a zero-install live web layer.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/admin"
              className="py-3.5 px-6 rounded-2xl bg-[#c6ff00] hover:bg-[#b5eb00] text-black font-syne font-bold text-xs tracking-wider shadow-lg shadow-[#c6ff00]/30 transition-all flex items-center gap-2"
            >
              LAUNCH SIMULATION & ADMIN ROUTE <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/touchpoints"
              className="py-3.5 px-6 rounded-2xl glass-panel hover:bg-white/10 text-white font-syne font-bold text-xs tracking-wider border border-white/15 transition-all flex items-center gap-2"
            >
              TEST NFC TOUCHPOINT BEACONS →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
