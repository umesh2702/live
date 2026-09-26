"use client";

import React from "react";
import { useEventContext } from "@/lib/event-store";
import { ULINK_TOUCHPOINTS } from "@/lib/event-data";
import { Smartphone, Zap, ArrowRight, Radio, QrCode, Sparkles, CheckCircle2, Layers } from "lucide-react";

export const HowULinkWorks: React.FC = () => {
  const { simulateNfcTap } = useEventContext();

  return (
    <section id="how-ulink-works" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#090a0c] border-b border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* SECTION HEADER */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#c6ff00]">
            <Zap className="w-3.5 h-3.5" /> PHYSICAL-TO-DIGITAL EXPERIENCE ARCHITECTURE
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            TAP. DISCOVER. <span className="text-gradient-lime">CONNECT.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            ULink functions as the invisible digital layer for physical event venues. When an attendee taps an NFC tag or scans a QR code, ULink instantly loads contextual session data, founder decks, and networking cards on their mobile browser with zero app installation.
          </p>
        </div>

        {/* CONCEPTUAL FLOW DIAGRAM */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 space-y-8">
          <div className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest border-b border-white/10 pb-4">
            01 • CONCEPTUAL HARDWARE TO DIGITAL FLOW
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            
            {/* STEP 1 */}
            <div className="space-y-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-mono text-[#c6ff00] font-bold">STAGE 01</span>
              <h4 className="font-syne font-bold text-base text-white">Physical Touchpoint</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Attendee taps NFC beacon at door, booth, or networking table.</p>
            </div>

            {/* STEP 2 */}
            <div className="space-y-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-mono text-cyan-400 font-bold">STAGE 02</span>
              <h4 className="font-syne font-bold text-base text-white">NFC / QR Signal</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Encrypted token verified with zero app download latency.</p>
            </div>

            {/* STEP 3 */}
            <div className="space-y-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-mono text-red-400 font-bold">STAGE 03</span>
              <h4 className="font-syne font-bold text-base text-white">ULink Live Layer</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Real-time room agenda, active stream, and Q&A tools load.</p>
            </div>

            {/* STEP 4 */}
            <div className="space-y-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <span className="text-xs font-mono text-purple-400 font-bold">STAGE 04</span>
              <h4 className="font-syne font-bold text-base text-white">Discover & Collect</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Startup pitch decks, whitepapers, and speaker briefs saved.</p>
            </div>

            {/* STEP 5 */}
            <div className="space-y-3 p-4 rounded-2xl bg-[#c6ff00]/10 border border-[#c6ff00]/30">
              <span className="text-xs font-mono text-[#c6ff00] font-bold">STAGE 05</span>
              <h4 className="font-syne font-bold text-base text-white">1-Tap Connect</h4>
              <p className="text-xs text-slate-300 leading-relaxed">Delegate card swap & verified digital attendance record.</p>
            </div>

          </div>
        </div>

        {/* PHYSICAL TOUCHPOINTS GRID */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">02 • PHYSICAL VENUE BEACONS</span>
              <h3 className="font-syne font-bold text-2xl text-white">Campus Touchpoint Showcase</h3>
            </div>
            <span className="text-xs text-[#c6ff00] font-mono">Interactive NFC Simulator</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ULINK_TOUCHPOINTS.map((tp) => (
              <div
                key={tp.id}
                onClick={() => simulateNfcTap(tp.id)}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#c6ff00]/40 transition-all duration-300 space-y-4 cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                    {tp.nfcCode}
                  </span>
                  <span className="text-xs font-syne font-bold text-[#c6ff00] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    {tp.actionText} →
                  </span>
                </div>

                <div>
                  <h4 className="font-syne font-bold text-lg text-white group-hover:text-[#c6ff00] transition-colors">
                    {tp.name}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">{tp.tagline}</p>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {tp.description}
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Location: <strong className="text-white font-medium">{tp.location}</strong></span>
                  <span className="text-[#c6ff00] font-mono font-bold">Simulate Tap</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
