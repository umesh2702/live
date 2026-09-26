"use client";

import React, { useState } from "react";
import { useEventContext } from "@/lib/event-store";
import { PEOPLE_DATA, Person } from "@/lib/event-data";
import { ShieldCheck, X, Building2, Globe, Sparkles } from "lucide-react";

export const PeopleGrid: React.FC = () => {
  const { connectWithDelegate, connectedDelegateIds } = useEventContext();
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activePerson, setActivePerson] = useState<Person | null>(null);

  const categories = ["ALL", "SPEAKERS", "INVESTORS", "EXPERTS", "FOUNDERS", "TEAM"];

  const filteredPeople = PEOPLE_DATA.filter(person => 
    selectedCategory === "ALL" || person.category === selectedCategory
  );

  return (
    <div className="w-full space-y-8">
      
      {/* CATEGORY SELECTOR */}
      <div className="flex flex-wrap items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-white/10">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map(cat => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-colors border ${
                  isActive
                    ? "bg-[#c6ff00] text-black border-[#c6ff00] font-bold"
                    : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <span className="text-xs text-slate-400 font-mono">
          Showing {filteredPeople.length} summit leaders
        </span>
      </div>

      {/* PEOPLE CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPeople.map((person) => {
          const isConnected = connectedDelegateIds.includes(person.id);
          return (
            <div
              key={person.id}
              className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-white/25 transition-all duration-200 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  {/* eslint-disable-next-html-img-element */}
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="w-20 h-20 rounded-2xl object-cover border border-white/15 shadow-md group-hover:scale-102 transition-transform"
                  />

                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono border flex items-center gap-1 ${
                    person.isOfficial 
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                      : "bg-white/5 text-slate-400 border-white/10"
                  }`}>
                    <ShieldCheck className="w-3 h-3 text-[#c6ff00]" /> {person.provenance}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-[#c6ff00] uppercase font-bold tracking-wider">
                    {person.category} • {person.topic || "Summit Leader"}
                  </span>
                  <h3 className="font-syne font-bold text-xl text-white group-hover:text-[#c6ff00] transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-semibold">{person.role}</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-500" /> {person.organization}
                  </p>
                </div>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {person.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setActivePerson(person)}
                  className="text-xs font-bold text-white hover:text-[#c6ff00] transition-colors flex items-center gap-1"
                >
                  VIEW PROFILE →
                </button>

                <button
                  onClick={() => connectWithDelegate(person.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                    isConnected
                      ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                      : "bg-white/10 text-white border-white/15 hover:bg-white/20"
                  }`}
                >
                  {isConnected ? "✓ CONNECTED" : "+ CONNECT"}
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* EXECUTIVE PROFILE DETAIL MODAL */}
      {activePerson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0f1117] border border-white/20 rounded-3xl p-6 shadow-2xl space-y-6 text-white">
            <button
              onClick={() => setActivePerson(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-4">
              {/* eslint-disable-next-html-img-element */}
              <img
                src={activePerson.avatar}
                alt={activePerson.name}
                className="w-20 h-20 rounded-2xl object-cover border border-[#c6ff00]"
              />
              <div>
                <span className="text-xs font-mono text-[#c6ff00] uppercase font-bold">{activePerson.category}</span>
                <h3 className="font-syne font-bold text-xl text-white">{activePerson.name}</h3>
                <p className="text-xs text-slate-300">{activePerson.role}</p>
                <p className="text-xs text-slate-400">{activePerson.organization}</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Executive Biography</h4>
              <p className="text-xs text-slate-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
                {activePerson.bio}
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-slate-300 flex items-center justify-between">
              <span>Focus Area: <strong className="text-white">{activePerson.topic || "Global Management"}</strong></span>
              <span className="text-[#c6ff00] font-mono font-bold">1-Tap NFC Exchange Ready</span>
            </div>

            <div className="flex items-center space-x-3 pt-2">
              <button
                onClick={() => {
                  connectWithDelegate(activePerson.id);
                  setActivePerson(null);
                }}
                className="flex-1 py-3 rounded-xl bg-[#c6ff00] hover:bg-[#b8f000] text-black font-syne font-bold text-xs shadow-md"
              >
                REQUEST DIRECT INTRODUCTION
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
