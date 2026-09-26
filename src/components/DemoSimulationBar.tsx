"use client";

import React, { useState } from "react";
import { useEventContext } from "@/lib/event-store";
import Link from "next/link";
import { Play, RotateCcw, Sparkles, X, Sliders, BellPlus, Zap } from "lucide-react";

export const DemoSimulationBar: React.FC = () => {
  const { 
    simulationStep, 
    runSimulationStep, 
    runFullAutoSimulation, 
    resetSimulation, 
    isSimulationRunning,
    publishAnnouncement
  } = useEventContext();

  const [isOpen, setIsOpen] = useState(false);
  const [quickAnnText, setQuickAnnText] = useState("");

  const handleQuickPublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickAnnText.trim()) return;
    publishAnnouncement("SIMULATED BROADCAST", quickAnnText, "LIVE");
    setQuickAnnText("");
  };

  const getStepText = (step: number) => {
    switch (step) {
      case 0: return "Initial Summit Agenda";
      case 1: return "State 1: Inaugural Summit Plenary Live";
      case 2: return "State 2: Room Update Broadcast";
      case 3: return "State 3: Startup Panel Live";
      default: return "Simulation Active";
    }
  };

  return (
    <>
      {/* FLOATING TRIGGER BUTTON (DISCREET & NON-INTRUSIVE) */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#0f1117]/90 hover:bg-[#161922] border border-[#c6ff00]/40 shadow-xl text-white backdrop-blur-md transition-all group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c6ff00] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c6ff00]"></span>
          </span>
          <span className="text-xs font-mono font-bold text-[#c6ff00] tracking-wider uppercase">
            ⚡ DEMO MODE
          </span>
          <Sliders className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
        </button>
      </div>

      {/* INSTITUTIONAL SIMULATION DRAWER MODAL */}
      {isOpen && (
        <div className="fixed bottom-16 right-5 z-50 max-w-sm w-[calc(100vw-2.5rem)] sm:w-96 glass-panel rounded-2xl p-5 shadow-2xl border border-white/15 text-white animate-scaleUp">
          
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-[#c6ff00]" />
              <span className="font-syne text-xs font-bold tracking-wider text-white uppercase">
                DEMO SIMULATION CONTROLLER
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-3 space-y-3">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-slate-400">Current Simulation State:</span>
                <span className="font-mono text-[#c6ff00] font-bold">STEP {simulationStep}/3</span>
              </div>
              <p className="font-semibold text-white text-xs">{getStepText(simulationStep)}</p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={runFullAutoSimulation}
                disabled={isSimulationRunning}
                className="py-2.5 px-3 rounded-xl bg-[#c6ff00] hover:bg-[#b8f000] text-black font-syne font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-black" />
                {isSimulationRunning ? "RUNNING..." : "60s AUTO RUN"}
              </button>

              <button
                onClick={runSimulationStep}
                className="py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 transition-all flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#c6ff00]" />
                NEXT STEP →
              </button>
            </div>

            {/* QUICK BROADCAST FORM */}
            <form onSubmit={handleQuickPublish} className="space-y-1.5 pt-1">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Broadcast Simulated Announcement
              </label>
              <div className="flex items-center space-x-1.5">
                <input
                  type="text"
                  value={quickAnnText}
                  onChange={(e) => setQuickAnnText(e.target.value)}
                  placeholder="e.g. VIP Keynote starting in Hall A..."
                  className="flex-1 bg-black/60 border border-white/15 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#c6ff00]"
                />
                <button
                  type="submit"
                  className="p-2 rounded-lg bg-[#c6ff00]/20 text-[#c6ff00] border border-[#c6ff00]/30 hover:bg-[#c6ff00]/30"
                  title="Broadcast alert"
                >
                  <BellPlus className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <button
                onClick={resetSimulation}
                className="hover:text-white flex items-center gap-1 text-slate-400 hover:underline"
              >
                <RotateCcw className="w-3 h-3" /> Reset State
              </button>
              <Link href="/admin" onClick={() => setIsOpen(false)} className="text-[#c6ff00] font-bold hover:underline">
                Full Admin Route →
              </Link>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
