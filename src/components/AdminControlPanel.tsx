"use client";

import React, { useState } from "react";
import { useEventContext } from "@/lib/event-store";
import { Play, Pause, RotateCcw, Send, Eye, ShieldCheck, Zap, BarChart3, Users, Smartphone, Layers } from "lucide-react";

export const AdminControlPanel: React.FC = () => {
  const { 
    sessions, 
    activeSession, 
    announcements, 
    simulationStep, 
    runSimulationStep, 
    runFullAutoSimulation, 
    resetSimulation, 
    isSimulationRunning,
    publishAnnouncement,
    setSessionStatus
  } = useEventContext();

  const [annTitle, setAnnTitle] = useState("");
  const [annContent, setAnnContent] = useState("");
  const [annType, setAnnType] = useState<'URGENT' | 'UPDATE' | 'LIVE' | 'INFO'>('LIVE');
  const [featuredMsg, setFeaturedMsg] = useState<string | null>(null);

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!annTitle.trim() || !annContent.trim()) return;
    publishAnnouncement(annTitle, annContent, annType);
    setAnnTitle("");
    setAnnContent("");
    setFeaturedMsg("Announcement broadcasted to attendee passports!");
    setTimeout(() => setFeaturedMsg(null), 3000);
  };

  const handleToggleSessionStatus = (sessionId: string, newStatus: 'NOW LIVE' | 'UP NEXT' | 'COMPLETED' | 'SCHEDULED') => {
    setSessionStatus(sessionId, newStatus);
    setFeaturedMsg(`Session status updated to ${newStatus}`);
    setTimeout(() => setFeaturedMsg(null), 3000);
  };

  return (
    <div className="w-full space-y-8">
      
      {/* ADMIN HEADER */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-white/15">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#c6ff00] font-bold uppercase">
              <span className="w-2 h-2 rounded-full bg-[#c6ff00] animate-ping" />
              <span>ORGANIZER CONTROL CENTER • ULINK EVENT PLATFORM</span>
            </div>
            <h1 className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
              ISDSI SUMMIT 2026 ORGANIZER DASHBOARD
            </h1>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={runFullAutoSimulation}
              disabled={isSimulationRunning}
              className="py-2.5 px-4 rounded-xl bg-[#c6ff00] hover:bg-[#b8f000] text-black font-syne font-bold text-xs shadow-md transition-all flex items-center gap-1.5 disabled:opacity-50"
            >
              <Play className="w-4 h-4 fill-black" />
              {isSimulationRunning ? "AUTO SIMULATING..." : "RUN 60s EVENT SIMULATION"}
            </button>

            <button
              onClick={resetSimulation}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 border border-white/15"
              title="Reset state"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {featuredMsg && (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-400 font-bold animate-fadeIn">
            ✓ {featuredMsg}
          </div>
        )}
      </div>

      {/* DEMO ANALYTICS SECTION */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-syne font-bold text-base text-white flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-[#c6ff00]" /> Summit Engagement Intelligence
          </h3>
          <span className="px-2 py-0.5 rounded bg-white/5 text-slate-400 text-[10px] font-mono border border-white/10">
            DEMO ANALYTICS
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
            <span className="text-[10px] text-slate-400 font-mono block">REGISTERED DELEGATES</span>
            <strong className="text-xl font-syne font-bold text-white">1,240</strong>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
            <span className="text-[10px] text-slate-400 font-mono block">ON-SITE ATTENDEES</span>
            <strong className="text-xl font-syne font-bold text-[#c6ff00]">850</strong>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
            <span className="text-[10px] text-slate-400 font-mono block">NFC BEACON SCANS</span>
            <strong className="text-xl font-syne font-bold text-cyan-400">4,120</strong>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
            <span className="text-[10px] text-slate-400 font-mono block">HALL ENGAGEMENT</span>
            <strong className="text-xl font-syne font-bold text-emerald-400">94%</strong>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
            <span className="text-[10px] text-slate-400 font-mono block">BOOTH INTERACTIONS</span>
            <strong className="text-xl font-syne font-bold text-white">1,890</strong>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-1">
            <span className="text-[10px] text-slate-400 font-mono block">DELEGATE CARDS SWAPPED</span>
            <strong className="text-xl font-syne font-bold text-purple-400">620</strong>
          </div>
        </div>
      </div>

      {/* ADMIN CONTROL GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: LIVE CONTROLS & SESSIONS MANAGER */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-red-400 font-bold uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                ACTIVE LIVE SESSION
              </span>
              <span className="text-xs text-slate-400 font-mono">STEP {simulationStep}/3</span>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#c6ff00] font-bold uppercase">CURRENT ACTIVE SESSION</span>
              <h3 className="font-syne font-bold text-xl text-white">{activeSession.title}</h3>
              <p className="text-xs text-slate-300">Location: {activeSession.location} • Time: {activeSession.startTime}</p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-3">
              <button
                onClick={() => handleToggleSessionStatus(activeSession.id, 'COMPLETED')}
                className="py-2.5 px-3 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                <Pause className="w-4 h-4" /> END CURRENT SESSION
              </button>

              <button
                onClick={runSimulationStep}
                className="py-2.5 px-3 rounded-xl bg-[#c6ff00] hover:bg-[#b8f000] text-black font-syne font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
              >
                STEP TO NEXT SESSION →
              </button>
            </div>
          </div>

          {/* SESSIONS STATUS TABLE */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
            <h3 className="font-syne font-bold text-lg text-white">Programme Status Controller</h3>
            
            <div className="space-y-3">
              {sessions.map((sess) => (
                <div key={sess.id} className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-syne font-bold text-white line-clamp-1">{sess.title}</h4>
                    <span className="text-[11px] text-slate-400">{sess.dateLabel} • {sess.startTime} • {sess.location}</span>
                  </div>

                  <select
                    value={sess.status}
                    onChange={(e) => handleToggleSessionStatus(sess.id, e.target.value as any)}
                    className="bg-black border border-white/20 rounded-lg px-2.5 py-1 text-xs text-[#c6ff00] font-mono focus:outline-none"
                  >
                    <option value="NOW LIVE">NOW LIVE</option>
                    <option value="UP NEXT">UP NEXT</option>
                    <option value="SCHEDULED">SCHEDULED</option>
                    <option value="COMPLETED">COMPLETED</option>
                  </select>
                </div>
              ))}
            </div>
          </div>

          {/* BROADCAST PUBLISHER FORM */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
            <h3 className="font-syne font-bold text-lg text-white flex items-center gap-2">
              <Send className="w-4 h-4 text-[#c6ff00]" /> Broadcast Organizer Alert
            </h3>

            <form onSubmit={handlePublish} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  value={annTitle}
                  onChange={(e) => setAnnTitle(e.target.value)}
                  placeholder="Alert Title"
                  className="sm:col-span-2 bg-black/60 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c6ff00]"
                  required
                />
                <select
                  value={annType}
                  onChange={(e) => setAnnType(e.target.value as any)}
                  className="bg-black/60 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                >
                  <option value="LIVE">NOW LIVE</option>
                  <option value="URGENT">URGENT</option>
                  <option value="UPDATE">ANNOUNCEMENT</option>
                  <option value="INFO">INFO</option>
                </select>
              </div>

              <textarea
                value={annContent}
                onChange={(e) => setAnnContent(e.target.value)}
                placeholder="Message content for delegate devices..."
                rows={2}
                className="w-full bg-black/60 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#c6ff00]"
                required
              />

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#c6ff00] hover:bg-[#b8f000] text-black font-syne font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
              >
                BROADCAST TO DELEGATES →
              </button>
            </form>
          </div>

        </div>

        {/* RIGHT COLUMN: ATTENDEE PHONE PREVIEW */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4 sticky top-24">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-[#c6ff00] font-bold uppercase flex items-center gap-1.5">
                <Eye className="w-4 h-4 text-[#c6ff00]" /> LIVE DELEGATE DEVICE PREVIEW
              </span>
              <span className="text-[10px] text-slate-400 font-mono">PHONE MOCKUP</span>
            </div>

            <div className="w-full max-w-xs mx-auto aspect-[9/18] bg-black border-4 border-slate-700 rounded-[40px] p-3 shadow-2xl overflow-hidden flex flex-col justify-between relative">
              <div className="w-24 h-4 bg-slate-800 rounded-b-xl mx-auto mb-2" />

              <div className="flex-1 bg-[#090a0c] rounded-2xl p-3 space-y-3 overflow-y-auto border border-white/10 text-white">
                <div className="flex items-center justify-between text-[10px] border-b border-white/10 pb-1.5">
                  <span className="font-bold text-[#c6ff00]">ULink Passport</span>
                  <span className="text-red-400 font-mono">● NOW LIVE</span>
                </div>

                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
                  <span className="text-[9px] font-mono text-red-400 font-bold uppercase">{activeSession.category}</span>
                  <h4 className="font-syne font-bold text-xs text-white line-clamp-1">{activeSession.title}</h4>
                  <p className="text-[10px] text-slate-300">Room: {activeSession.location}</p>
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="text-[9px] font-mono text-slate-400 uppercase font-bold">Latest Alert Feed</span>
                  {announcements.slice(0, 2).map((a) => (
                    <div key={a.id} className="p-2 rounded-lg bg-white/5 border border-white/10 text-[10px] space-y-0.5">
                      <span className="text-[#c6ff00] font-bold block">{a.title}</span>
                      <p className="text-slate-300 line-clamp-2">{a.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-center text-[9px] font-mono text-slate-400">
                ULink Platform • Powered by UCreates
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
