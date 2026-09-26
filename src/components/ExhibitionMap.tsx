"use client";

import React, { useState } from "react";
import { useEventContext } from "@/lib/event-store";
import { EXHIBITION_BOOTHS, Booth } from "@/lib/event-data";
import { MapPin, Smartphone, ExternalLink, ShieldCheck } from "lucide-react";

export const ExhibitionMap: React.FC = () => {
  const { simulateNfcTap } = useEventContext();
  const [selectedBooth, setSelectedBooth] = useState<Booth>(EXHIBITION_BOOTHS[0]);

  return (
    <div className="w-full space-y-8">
      
      {/* HEADER */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-[#c6ff00] uppercase font-bold tracking-widest">
              IMT HYDERABAD EXHIBITION PAVILION
            </span>
            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
              DIGITAL EXHIBITION FLOORPLAN
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
            Interactive Booth Beacons
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
          Select any booth on the pavilion floorplan below to preview company briefs or simulate tapping an NFC beacon pillar at the summit.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* FLOORPLAN GRID */}
        <div className="lg:col-span-7 glass-panel p-6 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-mono text-slate-300 font-bold uppercase flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#c6ff00]" /> FLOOR PLAN VIEW (ZONE A & ZONE B)
            </span>
            <span className="text-[10px] text-slate-500 font-mono">MAP REF: PAVILION-2026</span>
          </div>

          {/* ZONE A */}
          <div className="space-y-3">
            <div className="text-[11px] font-mono text-[#c6ff00] font-bold tracking-wider uppercase">
              ZONE A — DEEPTECH, CLEANTECH & AI
            </div>
            <div className="grid grid-cols-3 gap-3">
              {EXHIBITION_BOOTHS.filter(b => b.id.startsWith("A")).map(booth => {
                const isSelected = selectedBooth.id === booth.id;
                return (
                  <button
                    key={booth.id}
                    onClick={() => setSelectedBooth(booth)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 relative ${
                      isSelected
                        ? "bg-[#c6ff00] text-black border-[#c6ff00] font-bold shadow-md"
                        : "bg-white/[0.02] hover:bg-white/[0.06] text-white border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-mono text-xs font-bold ${isSelected ? "text-black" : "text-[#c6ff00]"}`}>
                        BOOTH {booth.id}
                      </span>
                      <span className={`text-[9px] px-1.5 py-0.2 rounded uppercase font-mono ${
                        isSelected ? "bg-black text-[#c6ff00]" : "bg-white/10 text-slate-400"
                      }`}>
                        DEMO
                      </span>
                    </div>

                    <p className={`font-syne font-bold text-xs line-clamp-1 ${isSelected ? "text-black" : "text-white"}`}>
                      {booth.name}
                    </p>
                    <p className={`text-[10px] mt-1 ${isSelected ? "text-slate-900 font-semibold" : "text-slate-400"}`}>
                      {booth.category}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ZONE B */}
          <div className="space-y-3 pt-2">
            <div className="text-[11px] font-mono text-cyan-400 font-bold tracking-wider uppercase">
              ZONE B — CLIMATE & LOGISTICS
            </div>
            <div className="grid grid-cols-3 gap-3">
              {EXHIBITION_BOOTHS.filter(b => b.id.startsWith("B")).map(booth => {
                const isSelected = selectedBooth.id === booth.id;
                return (
                  <button
                    key={booth.id}
                    onClick={() => setSelectedBooth(booth)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 relative ${
                      isSelected
                        ? "bg-[#c6ff00] text-black border-[#c6ff00] font-bold shadow-md"
                        : "bg-white/[0.02] hover:bg-white/[0.06] text-white border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-mono text-xs font-bold ${isSelected ? "text-black" : "text-cyan-400"}`}>
                        BOOTH {booth.id}
                      </span>
                      <span className={`text-[9px] px-1.5 py-0.2 rounded uppercase font-mono ${
                        isSelected ? "bg-black text-[#c6ff00]" : "bg-white/10 text-slate-400"
                      }`}>
                        DEMO
                      </span>
                    </div>

                    <p className={`font-syne font-bold text-xs line-clamp-1 ${isSelected ? "text-black" : "text-white"}`}>
                      {booth.name}
                    </p>
                    <p className={`text-[10px] mt-1 ${isSelected ? "text-slate-900 font-semibold" : "text-slate-400"}`}>
                      {booth.category}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* SELECTED BOOTH DETAIL PANEL */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-3xl space-y-6 border border-white/15">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="px-2.5 py-0.5 rounded bg-white/10 text-[#c6ff00] font-mono text-xs font-bold">
              BOOTH {selectedBooth.id}
            </span>
            <span className="text-xs text-slate-400 font-mono">{selectedBooth.zone}</span>
          </div>

          <div className="space-y-3">
            <h3 className="font-syne font-bold text-2xl text-white">
              {selectedBooth.name}
            </h3>
            <p className="text-xs text-[#c6ff00] font-mono font-semibold">Category: {selectedBooth.category}</p>
            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedBooth.description}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-black/60 border border-white/15 space-y-3">
            <div className="flex items-center space-x-2 text-xs text-slate-300 font-bold">
              <Smartphone className="w-4 h-4 text-[#c6ff00]" />
              <span>ULINK NFC HARDWARE BEACON</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Delegates approaching Booth {selectedBooth.id} tap their badge against the physical ULink pillar to receive founder decks and contact tokens directly on mobile browsers.
            </p>
            <button
              onClick={() => simulateNfcTap("tp-booth")}
              className="w-full py-3 px-4 rounded-xl bg-[#c6ff00] hover:bg-[#b8f000] text-black font-syne font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              SIMULATE BOOTH NFC SCAN →
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
