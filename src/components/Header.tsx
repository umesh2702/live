"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEventContext } from "@/lib/event-store";
import { Menu, X, RefreshCw, ShieldCheck, Zap } from "lucide-react";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { activeSession, runSimulationStep, isSimulationRunning } = useEventContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/schedule", label: "PROGRAMME" },
    { href: "/people", label: "PEOPLE" },
    { href: "/discover", label: "DISCOVER" },
    { href: "/exhibition", label: "EXHIBITION" },
    { href: "/connect", label: "CONNECT" },
    { href: "/venue", label: "VENUE" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-panel border-b border-white/10 backdrop-blur-2xl bg-[#090a0c]/90">
      {/* INSTITUTIONAL TOP BAR */}
      <div className="w-full bg-[#0d0f14] border-b border-white/5 px-4 sm:px-6 py-1.5 text-xs text-slate-400 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center space-x-1.5 px-2 py-0.5 rounded text-[10px] font-semibold bg-white/5 text-slate-300 border border-white/10">
            <ShieldCheck className="w-3 h-3 text-[#c6ff00]" />
            <span>ISDSI GLOBAL INVESTMENT SUMMIT 2026</span>
          </span>
          <span className="hidden md:inline text-slate-500">•</span>
          <span className="hidden md:inline text-slate-400 text-[11px]">
            26—29 December 2026 • IMT Hyderabad
          </span>
        </div>

        <div className="flex items-center space-x-4 text-[11px]">
          <span className="text-slate-400 hidden sm:inline">
            Digital Experience Layer by <strong className="text-white font-semibold">ULink</strong>
          </span>
          <Link href="/admin" className="text-[#c6ff00] hover:underline font-mono font-medium flex items-center gap-1">
            <Zap className="w-3 h-3 fill-[#c6ff00]" /> Organizer Portal
          </Link>
        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* BRAND LOGO HIERARCHY */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-lg bg-[#c6ff00] text-black font-syne font-extrabold flex items-center justify-center text-base shadow-sm group-hover:bg-[#b8f000] transition-colors">
            U
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-syne font-bold text-base text-white tracking-tight">ULink</span>
              <span className="text-[9px] font-mono px-1.5 py-0.2 bg-white/10 text-slate-300 rounded tracking-wider uppercase">DIGITAL LAYER</span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium tracking-tight">
              ISDSI Summit 2026 Platform
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-white/10 text-[#c6ff00] border border-[#c6ff00]/30 font-bold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT ACTION STATUS BADGES */}
        <div className="flex items-center space-x-3">
          <button
            onClick={runSimulationStep}
            disabled={isSimulationRunning}
            title="Step through Live Event Simulation"
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-[#c6ff00] ${isSimulationRunning ? "animate-spin" : ""}`} />
            <span>Simulate Step</span>
          </button>

          <Link
            href="/live"
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 hover:border-red-500/60 transition-all duration-200"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-xs font-bold text-red-400 tracking-wider flex items-center gap-1 font-mono">
              NOW LIVE
            </span>
          </Link>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10 px-4 pt-4 pb-6 space-y-3 bg-[#090a0c]/98 backdrop-blur-2xl">
          <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 mb-2 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-mono text-slate-400 uppercase">ACTIVE SESSION</p>
              <p className="text-xs font-bold text-white truncate max-w-[200px]">{activeSession.title}</p>
            </div>
            <Link
              href="/live"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-1 text-[11px] font-bold bg-[#c6ff00] text-black rounded-lg"
            >
              LIVE VIEW
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-semibold transition-colors ${
                    isActive
                      ? "bg-[#c6ff00]/15 text-[#c6ff00] font-bold border border-[#c6ff00]/30"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>ISDSI Summit 2026</span>
            <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="text-[#c6ff00] font-bold">
              Organizer Portal →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
