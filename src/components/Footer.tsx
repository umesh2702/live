"use client";

import React from "react";
import Link from "next/link";
import { EVENT_DETAILS } from "@/lib/event-data";
import { ShieldCheck, ExternalLink, Zap, Radio, Lock } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#07080a] border-t border-white/10 text-slate-400 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        
        {/* BRAND & PRODUCT POSITIONING */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 rounded-md bg-[#c6ff00] text-black font-syne font-extrabold flex items-center justify-center text-sm">
              U
            </div>
            <div>
              <span className="font-syne text-lg font-bold text-white">ULink</span>
              <span className="text-[9px] ml-1.5 px-1.5 py-0.2 bg-white/10 text-slate-300 rounded uppercase font-mono">DIGITAL LAYER</span>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            The live digital experience layer connecting venue touchpoints, delegates, active sessions, startups, exhibitors, and summit operations.
          </p>

          <div className="pt-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-slate-300">
              <Zap className="w-3.5 h-3.5 text-[#c6ff00]" />
              <span>Technology Provider: <strong className="text-white">UCreates</strong></span>
            </div>
          </div>
        </div>

        {/* EVENT SCOPE & DEMO DISCLAIMER */}
        <div className="space-y-3 md:col-span-1">
          <h4 className="text-xs font-bold text-white tracking-wider uppercase font-syne flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#c6ff00]" /> Institutional Disclaimer
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            {EVENT_DETAILS.disclaimer}
          </p>
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-slate-400 space-y-1">
            <p className="text-slate-200 font-semibold">{EVENT_DETAILS.name}</p>
            <p>{EVENT_DETAILS.dates} • {EVENT_DETAILS.venue}</p>
            <p className="text-[#c6ff00] pt-0.5">Theme: &ldquo;{EVENT_DETAILS.tagline}&rdquo;</p>
          </div>
        </div>

        {/* QUICK NAVIGATION */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white tracking-wider uppercase font-syne">
            Platform Routes
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/schedule" className="hover:text-[#c6ff00] transition-colors">
                Summit Programme & Timeline
              </Link>
            </li>
            <li>
              <Link href="/people" className="hover:text-[#c6ff00] transition-colors">
                Speakers & Investor Directory
              </Link>
            </li>
            <li>
              <Link href="/discover" className="hover:text-[#c6ff00] transition-colors">
                Startup Discovery & Capital Pipeline
              </Link>
            </li>
            <li>
              <Link href="/exhibition" className="hover:text-[#c6ff00] transition-colors">
                Interactive Exhibition Floorplan
              </Link>
            </li>
            <li>
              <Link href="/live" className="hover:text-[#c6ff00] transition-colors flex items-center gap-1.5">
                <Radio className="w-3 h-3 text-red-400" /> Simulated Live Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin" className="hover:text-[#c6ff00] transition-colors flex items-center gap-1 text-[#c6ff00] font-mono">
                <Lock className="w-3 h-3" /> Organizer Admin Portal
              </Link>
            </li>
          </ul>
        </div>

        {/* OFFICIAL SOURCES */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white tracking-wider uppercase font-syne">
            Official Sources
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a
                href="https://isdsiglobal.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors inline-flex items-center gap-1 text-slate-300"
              >
                ISDSI Global Official Website <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <span className="text-slate-400">IMT Hyderabad Campus Guide</span>
            </li>
            <li>
              <span className="text-slate-400">ULink Architecture Documentation</span>
            </li>
            <li>
              <span className="text-slate-400">UCreates Engineering</span>
            </li>
          </ul>
          <div className="pt-2 text-[11px] text-slate-500">
            Official summit information is accurately compiled. Fictional scenarios are clearly labeled as demo profiles.
          </div>
        </div>

      </div>

      {/* BOTTOM LEGAL & COPYRIGHT */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-3 sm:space-y-0">
        <div>
          © 2026 ULink by UCreates. Digital Experience Concept for ISDSI Global Investment Summit 2026.
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-slate-400">IMT Hyderabad</span>
          <span>•</span>
          <span className="text-[#c6ff00] font-mono text-[10px]">PREMIUM DEMO v3.0</span>
        </div>
      </div>
    </footer>
  );
};
