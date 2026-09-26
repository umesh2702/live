"use client";

import React, { useState } from "react";
import { useEventContext } from "@/lib/event-store";
import { Radio, ShieldCheck, PlusCircle, Send } from "lucide-react";

export const AnnouncementFeed: React.FC = () => {
  const { announcements, publishAnnouncement } = useEventContext();
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titleInput.trim() || !contentInput.trim()) return;
    publishAnnouncement(titleInput, contentInput, "LIVE");
    setTitleInput("");
    setContentInput("");
  };

  return (
    <div className="w-full space-y-8">
      
      {/* HEADER */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-slate-400 uppercase font-bold tracking-widest flex items-center gap-1.5">
              <Radio className="w-4 h-4 text-red-400" /> REAL-TIME BROADCAST ENGINE
            </span>
            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
              SUMMIT ANNOUNCEMENTS & ALERTS
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
            {announcements.length} Active Broadcasts
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ANNOUNCEMENTS LIST */}
        <div className="lg:col-span-7 space-y-4">
          {announcements.map((ann) => (
            <div
              key={ann.id}
              className={`glass-panel p-5 rounded-2xl border transition-all duration-200 space-y-3 ${
                ann.type === 'LIVE' 
                  ? 'border-[#c6ff00]/40 bg-white/[0.02]' 
                  : ann.type === 'URGENT'
                  ? 'border-red-500/40 bg-red-500/5'
                  : 'border-white/10'
              }`}
            >
              <div className="flex items-center justify-between text-xs">
                <span className={`px-2.5 py-0.5 rounded font-mono text-[10px] font-bold uppercase ${
                  ann.type === 'LIVE' ? 'bg-[#c6ff00] text-black' : 'bg-white/10 text-slate-200'
                }`}>
                  {ann.timeLabel}
                </span>

                <div className="flex items-center space-x-2 text-slate-400 font-mono text-[11px]">
                  <span>{ann.timestamp}</span>
                  {ann.isOfficial ? (
                    <span className="text-emerald-400 flex items-center gap-0.5">
                      <ShieldCheck className="w-3 h-3 text-[#c6ff00]" /> OFFICIAL ISDSI
                    </span>
                  ) : (
                    <span className="text-slate-400">DEMO ALERT</span>
                  )}
                </div>
              </div>

              <h4 className="font-syne font-bold text-lg text-white">{ann.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{ann.content}</p>
            </div>
          ))}
        </div>

        {/* ORGANIZER ACTION SIMULATOR */}
        <div className="lg:col-span-5 glass-panel p-6 rounded-3xl space-y-4 border border-white/10">
          <div className="border-b border-white/10 pb-3">
            <h3 className="font-syne font-bold text-base text-white flex items-center gap-2">
              <PlusCircle className="w-4 h-4 text-[#c6ff00]" /> Publish Broadcast (Organizer Action)
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Simulate pushing real-time summit notifications to attendee mobile screens.
            </p>
          </div>

          <form onSubmit={handlePublish} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Announcement Headline
              </label>
              <input
                type="text"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
                placeholder="e.g. Keynote Plenary starting in 10 mins..."
                className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#c6ff00]"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                Broadcast Body Text
              </label>
              <textarea
                value={contentInput}
                onChange={(e) => setContentInput(e.target.value)}
                placeholder="Enter details for summit delegates..."
                rows={3}
                className="w-full bg-black/60 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#c6ff00]"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#c6ff00] hover:bg-[#b8f000] text-black font-syne font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              BROADCAST TO DELEGATE PASSPORTS <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};
