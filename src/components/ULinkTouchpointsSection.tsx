"use client";

import React from "react";
import { useEventContext } from "@/lib/event-store";
import { ULINK_TOUCHPOINTS } from "@/lib/event-data";
import { Smartphone, Zap, ArrowRight, CheckCircle2, QrCode, Radio, Layers, Users, Sparkles } from "lucide-react";

export const ULinkTouchpointsSection: React.FC = () => {
  const { simulateNfcTap } = useEventContext();

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#08090c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/30 text-[#c6ff00] text-xs font-mono font-bold tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5" /> THE EVENT, CONNECTED.
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            One tap connects the physical event to the <span className="text-gradient-lime">live digital experience.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            ULink physical beacons turn static venue signs, session doorways, and exhibition booths into interactive touchpoints for instant delegate discovery.
          </p>
        </div>

        {/* PHYSICAL TOUCHPOINTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ULINK_TOUCHPOINTS.map((tp) => (
            <div
              key={tp.id}
              onClick={() => simulateNfcTap(tp.id)}
              className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-[#c6ff00]/50 transition-all duration-300 space-y-4 group cursor-pointer relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded bg-white/10 text-[#c6ff00] font-mono text-[11px] font-bold">
                  {tp.nfcCode}
                </span>
                <span className="text-xs font-syne font-bold text-[#c6ff00] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  {tp.actionText} →
                </span>
              </div>

              <div>
                <h3 className="font-syne font-bold text-xl text-white group-hover:text-[#c6ff00] transition-colors">
                  {tp.name}
                </h3>
                <p className="text-xs text-slate-400 font-semibold">{tp.tagline}</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {tp.description}
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Location: <strong className="text-white">{tp.location}</strong></span>
                <span className="text-[#c6ff00] font-mono">SIMULATE TAP</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
