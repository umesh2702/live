"use client";

import React, { useState, useEffect } from "react";
import { useEventContext } from "@/lib/event-store";
import { Clock, MapPin, Send, MessageSquare, Volume2, Bookmark, CheckCircle, Sparkles, ShieldCheck, Download, Share2, Users } from "lucide-react";

export const LiveNowWidget: React.FC = () => {
  const { activeSession, upNextSession, toggleBookmarkSession, bookmarkedSessionIds, simulateNfcTap } = useEventContext();
  const [qaInput, setQaInput] = useState("");
  const [qaList, setQaList] = useState<{ id: string; user: string; question: string; votes: number }[]>([
    { id: "q1", user: "Delegate (IMT)", question: "What ESG metrics are sovereign wealth funds placing highest weight on in 2026?", votes: 14 },
    { id: "q2", user: "Founder (ClimateTech)", question: "Are cross-border IP transfer protocols simplified for South Asian green tech?", votes: 9 }
  ]);

  const [timeLeft, setTimeLeft] = useState({ minutes: 34, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return { minutes: 45, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSendQa = (e: React.FormEvent) => {
    e.preventDefault();
    if (!qaInput.trim()) return;
    setQaList(prev => [
      { id: `q-${Date.now()}`, user: "You (Delegate)", question: qaInput, votes: 1 },
      ...prev
    ]);
    setQaInput("");
  };

  const handleVote = (id: string) => {
    setQaList(prev => prev.map(q => q.id === id ? { ...q, votes: q.votes + 1 } : q));
  };

  const isBookmarked = bookmarkedSessionIds.includes(activeSession.id);

  return (
    <div className="w-full space-y-8">
      
      {/* HERO CURRENT SESSION CENTERPIECE */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-white/15 shadow-2xl relative overflow-hidden">
        
        {/* HEADER BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center space-x-3">
            <div className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono font-bold tracking-wider flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span>NOW LIVE</span>
            </div>

            <span className="px-2.5 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 text-[10px] font-mono flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-[#c6ff00]" /> {activeSession.provenance}
            </span>
          </div>

          <div className="flex items-center space-x-3 text-xs">
            <div className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 flex items-center gap-1.5 font-mono">
              <Clock className="w-3.5 h-3.5 text-[#c6ff00]" />
              <span>Next Transition: <strong className="text-[#c6ff00]">{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}</strong></span>
            </div>

            <button
              onClick={() => toggleBookmarkSession(activeSession.id)}
              className={`p-2 rounded-lg border transition-colors ${
                isBookmarked 
                  ? "bg-[#c6ff00] text-black border-[#c6ff00]" 
                  : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
              }`}
              title={isBookmarked ? "Saved to your schedule" : "Save to your schedule"}
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>
          </div>
        </div>

        {/* ACTIVE SESSION MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: STAGE HIGHLIGHT & STREAM PLAYER */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-video rounded-2xl bg-[#0c0e14] border border-white/15 overflow-hidden flex flex-col justify-between p-4 group">
              
              <div className="flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded bg-black/80 text-slate-200 font-mono text-[10px] border border-white/10">
                  STAGE AUDIO & PRESENTATION FEED
                </span>
                <span className="flex items-center gap-1 text-emerald-400 text-[11px] font-mono">
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" /> BROADCASTING
                </span>
              </div>

              {/* AUDIO WAVEFORM HIGHLIGHT */}
              <div className="py-8 text-center space-y-3">
                <div className="flex items-center justify-center space-x-1.5 h-10">
                  {[40, 75, 90, 30, 85, 60, 95, 40, 80, 50, 70, 90, 35].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: `${h}%` }}
                      className="w-1.5 bg-gradient-to-t from-slate-500 to-[#c6ff00] rounded-full animate-pulse"
                    />
                  ))}
                </div>
                <h2 className="font-syne font-extrabold text-xl text-white max-w-lg mx-auto leading-snug">
                  {activeSession.title}
                </h2>
                <p className="text-xs text-slate-300">
                  Speakers: <strong className="text-white">{activeSession.speakers.join(", ")}</strong>
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-300 bg-black/80 -mx-4 -mb-4 p-3 border-t border-white/10 font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-400" /> {activeSession.location}
                </span>
                <button
                  onClick={() => simulateNfcTap("tp-hall")}
                  className="text-[#c6ff00] font-bold hover:underline"
                >
                  Tap Door Beacon →
                </button>
              </div>

            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
              {activeSession.description}
            </p>

            {/* RESOURCE BUTTONS */}
            <div className="flex items-center space-x-3 pt-1 text-xs">
              <button
                onClick={() => simulateNfcTap("tp-hall")}
                className="py-2 px-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-[#c6ff00]" /> Executive Slide Brief
              </button>

              <button
                onClick={() => toggleBookmarkSession(activeSession.id)}
                className={`py-2 px-3.5 rounded-xl border font-semibold flex items-center gap-1.5 transition-colors ${
                  isBookmarked
                    ? "bg-[#c6ff00]/15 text-[#c6ff00] border-[#c6ff00]/40"
                    : "bg-white/5 text-slate-200 border-white/10 hover:bg-white/10"
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" /> {isBookmarked ? "Saved to Passport" : "Save Session"}
              </button>
            </div>
          </div>

          {/* RIGHT: AUDIENCE ENGAGEMENT & Q&A */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between bg-white/[0.02] border border-white/10 rounded-2xl p-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <h3 className="font-syne font-bold text-sm text-white flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-[#c6ff00]" /> Audience Q&A
                </h3>
                <span className="text-[10px] font-mono text-slate-400">Live Delegate Interaction</span>
              </div>

              <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                {qaList.map((q) => (
                  <div key={q.id} className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs space-y-1.5">
                    <div className="flex items-center justify-between text-slate-400 text-[10px]">
                      <span className="font-semibold text-slate-300">{q.user}</span>
                      <button
                        onClick={() => handleVote(q.id)}
                        className="px-2 py-0.5 rounded bg-white/5 hover:bg-[#c6ff00]/20 text-[#c6ff00] border border-white/10 flex items-center gap-1 font-mono transition-colors"
                      >
                        ▲ {q.votes}
                      </button>
                    </div>
                    <p className="text-slate-200">{q.question}</p>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSendQa} className="pt-2">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={qaInput}
                  onChange={(e) => setQaInput(e.target.value)}
                  placeholder="Ask a question to executive panel..."
                  className="flex-1 bg-black/60 border border-white/15 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#c6ff00]"
                />
                <button
                  type="submit"
                  className="p-2.5 rounded-xl bg-[#c6ff00] text-black font-bold hover:bg-[#b8f000] transition-colors"
                  title="Submit Question"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>

      {/* UP NEXT & COMPLETED SESSIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[10px] font-mono font-bold uppercase border border-cyan-500/30 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> UP NEXT FOR YOU
            </span>
            <span className="text-xs font-mono text-slate-400">{upNextSession.dateLabel} • {upNextSession.startTime}</span>
          </div>

          <h3 className="font-syne font-bold text-lg text-white">
            {upNextSession.title}
          </h3>

          <p className="text-xs text-slate-400 line-clamp-2">
            {upNextSession.description}
          </p>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
            <span>Location: <strong className="text-white">{upNextSession.location}</strong></span>
            <span className="text-[#c6ff00] font-mono font-semibold">Scheduled</span>
          </div>
        </div>

        <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-3 opacity-90">
          <div className="flex items-center justify-between">
            <span className="px-2.5 py-0.5 rounded bg-slate-500/10 text-slate-300 text-[10px] font-mono font-bold uppercase border border-slate-500/30 flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-400" /> COMPLETED
            </span>
            <span className="text-xs font-mono text-slate-400">26 DEC • 09:30 AM</span>
          </div>

          <h3 className="font-syne font-bold text-lg text-white">
            Doctoral Colloquium & Academic Research Track
          </h3>

          <p className="text-xs text-slate-400 line-clamp-2">
            Opening academic research track and paper presentations led by Prof. Sourabh Bhattacharya and Prof. A. Sarath Babu.
          </p>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
            <span>Location: <strong>Main Auditorium — Hall Alpha</strong></span>
            <span className="text-emerald-400 font-mono">Executive Brief Saved</span>
          </div>
        </div>
      </div>

    </div>
  );
};
