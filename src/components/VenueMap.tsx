"use client";

import React, { useState } from "react";
import { useEventContext } from "@/lib/event-store";
import { MapPin, Compass, Smartphone } from "lucide-react";

export const VenueMap: React.FC = () => {
  const { simulateNfcTap } = useEventContext();
  const [selectedZone, setSelectedZone] = useState<string>("halls");

  const zones = [
    { id: "reg", name: "Main Lobby & Registration", touchpointId: "tp-reg", desc: "Badge issuance & NFC wristband activation desk." },
    { id: "halls", name: "Session Halls & Auditorium", touchpointId: "tp-hall", desc: "Main Auditorium Hall Alpha & Grand Ballroom Zone A." },
    { id: "expo", name: "Exhibition Pavilion", touchpointId: "tp-booth", desc: "40+ Startup booths with NFC tap collateral download pillars." },
    { id: "net", name: "Lakeside Networking Courtyard", touchpointId: "tp-net", desc: "Open-air delegate lounge & investment table beacons." },
    { id: "vip", name: "Sponsor & VIP Lounge", touchpointId: "tp-sponsor", desc: "Private term sheet meeting suites for institutional VCs." }
  ];

  return (
    <div className="w-full space-y-8">
      
      {/* HEADER */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-[#c6ff00] uppercase font-bold tracking-widest">
              SUMMIT VENUE MAP • IMT HYDERABAD
            </span>
            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
              INSTITUTE OF MANAGEMENT TECHNOLOGY, HYDERABAD
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
            30-Acre Campus Grid
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
          IMT Hyderabad is the official host venue for ISDSI Global Investment Summit 2026. The ULink digital concept provides live spatial navigation and touchpoint beacon simulations across hall entrances.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* CAMPUS SCHEMATIC MAP */}
        <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-xs font-mono text-slate-300 font-bold uppercase flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-[#c6ff00]" /> CAMPUS NAVIGATION & SPATIAL MAP
            </span>
            <span className="text-[10px] text-slate-500 font-mono">IMT CAMPUS GRID</span>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl bg-[#0c0e14] border border-white/15 p-6 flex flex-col justify-between overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]" />

            <div className="relative z-10 grid grid-cols-2 gap-4 h-full">
              {zones.map((zone) => {
                const isSelected = selectedZone === zone.id;
                return (
                  <button
                    key={zone.id}
                    onClick={() => {
                      setSelectedZone(zone.id);
                      simulateNfcTap(zone.touchpointId);
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all duration-200 relative ${
                      isSelected
                        ? "bg-[#c6ff00] text-black border-[#c6ff00] font-bold shadow-md scale-102"
                        : "bg-white/[0.03] hover:bg-white/10 text-white border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[10px] font-mono font-bold ${isSelected ? "text-black" : "text-[#c6ff00]"}`}>
                        NFC BEACON: {zone.touchpointId.toUpperCase()}
                      </span>
                      <MapPin className={`w-4 h-4 ${isSelected ? "text-black" : "text-red-400"}`} />
                    </div>
                    <p className={`font-syne font-bold text-sm ${isSelected ? "text-black" : "text-white"}`}>
                      {zone.name}
                    </p>
                    <p className={`text-[10px] mt-1 line-clamp-1 ${isSelected ? "text-slate-900 font-semibold" : "text-slate-400"}`}>
                      {zone.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="relative z-10 pt-3 text-[11px] text-slate-400 border-t border-white/10 flex items-center justify-between">
              <span>📍 Address: Survey No. 38, Cherlaguda, Shamshabad, Hyderabad</span>
              <span className="text-[#c6ff00] font-mono font-bold">CONCEPTUAL MAP</span>
            </div>
          </div>
        </div>

        {/* VENUE DETAIL PANEL */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 rounded-3xl space-y-4 border border-white/15">
            <h3 className="font-syne font-bold text-xl text-white">
              Campus Touchpoint Integration
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every major hallway, auditorium entrance, and exhibition booth at IMT Hyderabad can be integrated with ULink touchpoint beacons. Delegates tap their badge to get live schedule updates or room notes.
            </p>

            <div className="p-4 rounded-2xl bg-black/60 border border-white/15 space-y-2 text-xs">
              <div className="flex items-center justify-between text-[#c6ff00] font-bold font-mono">
                <span>ACTIVE ZONE:</span>
                <span>{zones.find(z => z.id === selectedZone)?.name}</span>
              </div>
              <p className="text-slate-300">
                {zones.find(z => z.id === selectedZone)?.desc}
              </p>
              <button
                onClick={() => simulateNfcTap(zones.find(z => z.id === selectedZone)?.touchpointId || "tp-reg")}
                className="w-full mt-2 py-2.5 px-3 rounded-xl bg-[#c6ff00] hover:bg-[#b8f000] text-black font-syne font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                <Smartphone className="w-4 h-4" /> Tap Zone NFC Beacon
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
