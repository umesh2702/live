"use client";

import React, { useState } from "react";
import { useEventContext } from "@/lib/event-store";
import { Session } from "@/lib/event-data";
import { Search, MapPin, Bookmark, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

export const ScheduleTimeline: React.FC = () => {
  const { sessions, toggleBookmarkSession, bookmarkedSessionIds, simulateNfcTap } = useEventContext();
  
  const [selectedDate, setSelectedDate] = useState<string>("2026-12-26");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const dateTabs = [
    { key: "2026-12-26", label: "26 DEC", day: "DAY 1", theme: "Inaugural & Global Capital" },
    { key: "2026-12-27", label: "27 DEC", day: "DAY 2", theme: "Summit & DeepTech Panels" },
    { key: "2026-12-28", label: "28 DEC", day: "DAY 3", theme: "Exhibition Expo & Workshops" },
    { key: "2026-12-29", label: "29 DEC", day: "DAY 4", theme: "VIP Networking & Reception" }
  ];

  const categories = ["ALL", "SUMMIT", "STARTUPS", "WORKSHOPS", "EXHIBITION", "NETWORKING"];

  const filteredSessions = sessions.filter(session => {
    const matchesDate = session.date === selectedDate;
    const matchesCategory = selectedCategory === "ALL" || session.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.speakers.some(sp => sp.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesDate && matchesCategory && matchesSearch;
  });

  const getStatusBadge = (status: Session['status']) => {
    switch (status) {
      case 'NOW LIVE':
        return (
          <span className="px-2.5 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/30 text-[10px] font-mono font-bold tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            NOW LIVE
          </span>
        );
      case 'UP NEXT':
        return (
          <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono font-bold tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> UP NEXT
          </span>
        );
      case 'COMPLETED':
        return (
          <span className="px-2.5 py-1 rounded bg-slate-500/10 text-slate-300 border border-slate-500/30 text-[10px] font-mono font-bold tracking-wider flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> COMPLETED
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 rounded bg-white/5 text-slate-400 border border-white/10 text-[10px] font-mono font-bold tracking-wider">
            SCHEDULED
          </span>
        );
    }
  };

  return (
    <div className="w-full space-y-8">
      
      {/* PROGRAMME DATE TABS */}
      <div className="glass-panel p-6 rounded-3xl space-y-6 border border-white/10">
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {dateTabs.map(tab => {
            const isActive = selectedDate === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setSelectedDate(tab.key)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border ${
                  isActive
                    ? "bg-[#c6ff00] text-black border-[#c6ff00] font-bold shadow-md"
                    : "bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 border-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono ${isActive ? "text-black" : "text-[#c6ff00]"}`}>
                    {tab.day}
                  </span>
                  <span className="text-xs font-syne font-extrabold">{tab.label}</span>
                </div>
                <div className={`text-[11px] mt-1 line-clamp-1 ${isActive ? "text-slate-900 font-semibold" : "text-slate-400"}`}>
                  {tab.theme}
                </div>
              </button>
            );
          })}
        </div>

        {/* SEARCH BAR & CATEGORY FILTERS */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programme, topics, or keynote speakers..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#c6ff00]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map(cat => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wider transition-colors border ${
                    isActive
                      ? "bg-[#c6ff00]/15 text-[#c6ff00] border-[#c6ff00]/40 font-bold"
                      : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* EXECUTIVE TIMELINE LIST */}
      <div className="space-y-4">
        {filteredSessions.map((session) => {
          const isBookmarked = bookmarkedSessionIds.includes(session.id);
          return (
            <div
              key={session.id}
              className={`glass-panel p-6 rounded-3xl border transition-all duration-200 hover:border-white/20 space-y-4 ${
                session.status === 'NOW LIVE' ? 'glass-panel-lime border-[#c6ff00]/40' : 'border-white/10'
              }`}
            >
              {/* TOP METADATA ROW */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-3 text-xs">
                  <span className="px-2.5 py-1 rounded bg-white/10 text-[#c6ff00] font-mono font-bold">
                    {session.startTime} — {session.endTime}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/5 text-slate-300 font-semibold border border-white/10">
                    {session.category}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono border flex items-center gap-1 ${
                    session.isOfficial 
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                      : "bg-white/5 text-slate-400 border-white/10"
                  }`}>
                    <ShieldCheck className="w-3 h-3 text-[#c6ff00]" /> {session.provenance}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  {getStatusBadge(session.status)}

                  <button
                    onClick={() => toggleBookmarkSession(session.id)}
                    className={`p-2 rounded-xl border transition-colors ${
                      isBookmarked 
                        ? "bg-[#c6ff00] text-black border-[#c6ff00]" 
                        : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                    }`}
                    title={isBookmarked ? "Remove from my schedule" : "Save to my schedule"}
                  >
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>
                </div>
              </div>

              {/* TITLE & DESCRIPTION */}
              <div>
                <h3 className="font-syne font-bold text-xl text-white hover:text-[#c6ff00] transition-colors">
                  {session.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed max-w-4xl">
                  {session.description}
                </p>
              </div>

              {/* LOCATION & SPEAKERS */}
              <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-red-400" /> {session.location}
                  </span>
                  <span>•</span>
                  <span>Speakers: <strong className="text-white">{session.speakers.join(", ")}</strong></span>
                </div>

                <button
                  onClick={() => simulateNfcTap("tp-hall")}
                  className="text-xs text-[#c6ff00] font-bold hover:underline flex items-center gap-1"
                >
                  Simulate Hall Beacon Scan →
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
