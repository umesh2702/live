"use client";

import React, { useState } from "react";
import { useEventContext } from "@/lib/event-store";
import { STARTUPS_DATA, Startup } from "@/lib/event-data";
import { Search, ExternalLink, ShieldCheck, Bookmark, Sparkles } from "lucide-react";

export const StartupGrid: React.FC = () => {
  const { simulateNfcTap } = useEventContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("ALL");
  const [selectedStage, setSelectedStage] = useState("ALL");
  const [savedStartups, setSavedStartups] = useState<string[]>(["st-1"]);

  const industries = ["ALL", "Green Energy / CleanTech", "AgriTech", "Supply Chain / Web3", "HealthTech"];
  const stages = ["ALL", "Pre-Seed", "Seed", "Series A"];

  const filteredStartups = STARTUPS_DATA.filter(startup => {
    const matchesSearch = searchQuery === "" ||
      startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      startup.founder.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesIndustry = selectedIndustry === "ALL" || startup.industry === selectedIndustry;
    const matchesStage = selectedStage === "ALL" || startup.stage === selectedStage;

    return matchesSearch && matchesIndustry && matchesStage;
  });

  const toggleSave = (id: string) => {
    setSavedStartups(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full space-y-8">
      
      {/* HEADER & FILTERS */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 border border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-[#c6ff00] uppercase font-bold tracking-widest">
              INVESTMENT INTELLIGENCE DIRECTORY
            </span>
            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
              DISCOVER VENTURE PIPELINE
            </h2>
          </div>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono">
            {STARTUPS_DATA.length} Curated Demo Profiles
          </span>
        </div>

        {/* SEARCH & FILTERS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative md:col-span-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search companies, technologies, founders..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/60 border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#c6ff00]"
            />
          </div>

          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="bg-black/60 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#c6ff00]"
          >
            {industries.map(ind => (
              <option key={ind} value={ind} className="bg-slate-900 text-white">
                Industry: {ind}
              </option>
            ))}
          </select>

          <select
            value={selectedStage}
            onChange={(e) => setSelectedStage(e.target.value)}
            className="bg-black/60 border border-white/15 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#c6ff00]"
          >
            {stages.map(stg => (
              <option key={stg} value={stg} className="bg-slate-900 text-white">
                Stage: {stg}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* STARTUPS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredStartups.map((startup) => {
          const isSaved = savedStartups.includes(startup.id);
          return (
            <div
              key={startup.id}
              className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-white/25 transition-all duration-200 space-y-5 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/15 flex items-center justify-center text-2xl shadow-inner">
                      {startup.logo}
                    </div>
                    <div>
                      <h3 className="font-syne font-bold text-xl text-white group-hover:text-[#c6ff00] transition-colors">
                        {startup.name}
                      </h3>
                      <p className="text-xs text-[#c6ff00] font-mono font-semibold">{startup.industry}</p>
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded bg-white/5 text-slate-400 text-[10px] font-mono border border-white/10">
                    {startup.provenance}
                  </span>
                </div>

                <p className="text-xs text-slate-200 font-medium leading-snug">
                  &ldquo;{startup.tagline}&rdquo;
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {startup.description}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-0.5">
                    <span className="text-[10px] text-slate-400 block font-mono">CAPITAL ROUND</span>
                    <strong className="text-white text-xs">{startup.fundingGoal || "Undisclosed"}</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-0.5">
                    <span className="text-[10px] text-slate-400 block font-mono">TRACTION HIGHLIGHT</span>
                    <strong className="text-white text-xs">{startup.keyMetrics}</strong>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center space-x-3 text-slate-300">
                  <span>Founder: <strong className="text-white">{startup.founder}</strong></span>
                  <span>•</span>
                  <button
                    onClick={() => simulateNfcTap("tp-booth")}
                    className="text-[#c6ff00] font-mono font-bold hover:underline flex items-center gap-1"
                  >
                    Booth {startup.boothId} →
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleSave(startup.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                      isSaved
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                        : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    {isSaved ? "Saved Brief" : "+ Save Brief"}
                  </button>

                  <a
                    href={startup.website}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                    title="Visit site"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
