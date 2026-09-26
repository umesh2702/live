"use client";

import React, { useEffect, useState } from "react";
import { useEventContext } from "@/lib/event-store";
import confetti from "canvas-confetti";
import { X, Smartphone, CheckCircle2, Bookmark, Download, ArrowRight, Radio, ShieldCheck, Zap } from "lucide-react";

export const NfcTapModal: React.FC = () => {
  const { activeTouchpoint, closeNfcModal } = useEventContext();
  const [tapState, setTapState] = useState<'tapping' | 'success'>('tapping');

  useEffect(() => {
    if (activeTouchpoint) {
      setTapState('tapping');
      const timer = setTimeout(() => {
        setTapState('success');
        confetti({
          particleCount: 45,
          spread: 55,
          origin: { y: 0.6 },
          colors: ['#c6ff00', '#00e5ff', '#ffffff']
        });
      }, 650);

      return () => clearTimeout(timer);
    }
  }, [activeTouchpoint]);

  if (!activeTouchpoint) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-[#0e1016] border border-[#c6ff00]/40 rounded-3xl p-6 shadow-2xl text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeNfcModal}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center pt-2 pb-4">
          <div className="inline-flex items-center justify-center space-x-2 px-3 py-1 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00]/30 text-[#c6ff00] text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#c6ff00] animate-ping" />
            <span>NFC TOUCHPOINT ACTIVE: {activeTouchpoint.nfcCode}</span>
          </div>
        </div>

        {tapState === 'tapping' ? (
          <div className="py-12 flex flex-col items-center justify-center space-y-4">
            <div className="relative w-20 h-20 flex items-center justify-center rounded-full bg-[#c6ff00]/15 border-2 border-[#c6ff00]">
              <Smartphone className="w-10 h-10 text-[#c6ff00] animate-pulse" />
              <div className="absolute inset-0 rounded-full border-4 border-[#c6ff00]/30 animate-ping" />
            </div>
            <p className="font-syne text-lg font-bold text-white">Scanning Physical Touchpoint...</p>
            <p className="text-xs text-slate-400">Authenticating ULink encrypted token</p>
          </div>
        ) : (
          <div className="space-y-5 animate-scaleUp">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-[#c6ff00]/40 flex items-start space-x-3">
              <div className="p-2.5 rounded-xl bg-[#c6ff00] text-black shadow-sm">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#c6ff00] tracking-wider uppercase font-bold">ULINK PASSPORT MATCH</span>
                <h3 className="font-syne font-bold text-lg text-white">{activeTouchpoint.name}</h3>
                <p className="text-xs text-slate-300">{activeTouchpoint.tagline}</p>
              </div>
            </div>

            <div className="bg-[#141720] border border-white/10 rounded-2xl p-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/10 pb-2">
                <span>Location: <strong className="text-white">{activeTouchpoint.location}</strong></span>
                <span className="text-[#c6ff00] font-mono font-semibold">0.04s SYNC</span>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-white font-syne">{activeTouchpoint.sampleScreenTitle}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{activeTouchpoint.sampleScreenContent}</p>
              </div>

              <div className="pt-2 flex items-center justify-between gap-2 text-xs">
                <button className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold border border-white/10 flex items-center justify-center gap-1.5 transition-colors">
                  <Bookmark className="w-3.5 h-3.5 text-[#c6ff00]" /> Save to Passport
                </button>
                <button className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-semibold border border-white/10 flex items-center justify-center gap-1.5 transition-colors">
                  <Download className="w-3.5 h-3.5 text-[#c6ff00]" /> Deck Brief
                </button>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
              <p className="leading-snug">
                💡 <strong className="text-slate-200">ULink Concept:</strong> Delegates tap physical venue beacons at {activeTouchpoint.location} to instantly access contextual session notes, executive decks, and contact swaps without installing apps.
              </p>
            </div>

            <button
              onClick={closeNfcModal}
              className="w-full py-3 rounded-xl bg-[#c6ff00] hover:bg-[#b8f000] text-black font-syne font-bold text-xs tracking-wider shadow-lg shadow-[#c6ff00]/20 transition-all flex items-center justify-center gap-2"
            >
              CONTINUE SUMMIT EXPERIENCE <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
