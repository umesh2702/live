"use client";

import React, { useState } from "react";
import { useEventContext } from "@/lib/event-store";
import { PEOPLE_DATA, Person } from "@/lib/event-data";
import confetti from "canvas-confetti";
import { Users, Smartphone, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

export const NetworkingPanel: React.FC = () => {
  const { connectWithDelegate, connectedDelegateIds, simulateNfcTap } = useEventContext();
  const [selectedInterest, setSelectedInterest] = useState<string>("ALL");
  const [connectedModalPerson, setConnectedModalPerson] = useState<Person | null>(null);

  const interests = [
    "ALL", "STARTUPS", "INVESTORS", "FOUNDERS", "TECHNOLOGY", "ACADEMIA", "POLICY", "SUSTAINABILITY"
  ];

  const handleConnectClick = (person: Person) => {
    connectWithDelegate(person.id);
    setConnectedModalPerson(person);
    
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 },
      colors: ['#c6ff00', '#00e5ff', '#ffffff']
    });
  };

  return (
    <div className="w-full space-y-8">
      
      {/* HEADER */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-[#c6ff00] uppercase font-bold tracking-widest">
              DELEGATE MATCHMAKING
            </span>
            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
              CONNECT BEYOND THE SESSION
            </h2>
          </div>
          <button
            onClick={() => simulateNfcTap("tp-net")}
            className="px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 border border-white/15 text-xs font-syne font-semibold transition-colors flex items-center gap-1.5"
          >
            <Smartphone className="w-4 h-4 text-[#c6ff00]" /> Tap Table Beacon
          </button>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">
          Match with fellow investment summit delegates based on shared focus areas. Swap digital business tokens with 1-tap NFC contact exchanges.
        </p>
      </div>

      {/* INTEREST FILTERS */}
      <div className="flex flex-wrap items-center gap-2 glass-panel p-4 rounded-2xl border border-white/10">
        <span className="text-xs text-slate-400 font-bold uppercase mr-2 font-mono">Interest Filter:</span>
        {interests.map(interest => {
          const isActive = selectedInterest === interest;
          return (
            <button
              key={interest}
              onClick={() => setSelectedInterest(interest)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wider transition-colors border ${
                isActive
                  ? "bg-[#c6ff00] text-black border-[#c6ff00] font-bold"
                  : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
              }`}
            >
              {interest}
            </button>
          );
        })}
      </div>

      {/* MATCHES LIST */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-syne font-bold text-lg text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#c6ff00]" /> Suggested Executive Connections
          </h3>
          <span className="text-xs text-slate-400 font-mono">
            {connectedDelegateIds.length} Saved Contacts
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PEOPLE_DATA.map((person) => {
            const isConnected = connectedDelegateIds.includes(person.id);
            return (
              <div
                key={person.id}
                className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-white/25 transition-all duration-200 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    {/* eslint-disable-next-html-img-element */}
                    <img
                      src={person.avatar}
                      alt={person.name}
                      className="w-14 h-14 rounded-2xl object-cover border border-white/15"
                    />
                    <div>
                      <h4 className="font-syne font-bold text-base text-white">{person.name}</h4>
                      <p className="text-xs text-[#c6ff00] font-mono">{person.role}</p>
                      <p className="text-[11px] text-slate-400">{person.organization}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    Priority Focus: <strong className="text-white">{person.topic || "Management & Policy"}</strong>
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    Match Confidence: <strong className="text-[#c6ff00]">94%</strong>
                  </span>

                  <button
                    onClick={() => handleConnectClick(person)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                      isConnected
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                        : "bg-[#c6ff00] text-black border-[#c6ff00] hover:bg-[#b8f000]"
                    }`}
                  >
                    {isConnected ? "✓ CONNECTED" : "TAP TO CONNECT →"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CONNECT CONFIRMATION MODAL */}
      {connectedModalPerson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-sm bg-[#0f1117] border border-[#c6ff00]/40 rounded-3xl p-6 shadow-2xl text-center space-y-4 text-white">
            <div className="w-14 h-14 rounded-full bg-[#c6ff00]/20 border border-[#c6ff00] text-[#c6ff00] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#c6ff00] font-bold uppercase tracking-wider">
                ULINK CARD SWAP COMPLETE
              </span>
              <h3 className="font-syne font-bold text-xl text-white">
                Connected with {connectedModalPerson.name}
              </h3>
              <p className="text-xs text-slate-300">
                {connectedModalPerson.role} • {connectedModalPerson.organization}
              </p>
            </div>

            <p className="text-xs text-slate-400 bg-white/[0.03] p-3 rounded-xl border border-white/10">
              Contact token exchanged securely via ULink. Saved to your attendee passport.
            </p>

            <button
              onClick={() => setConnectedModalPerson(null)}
              className="w-full py-2.5 rounded-xl bg-[#c6ff00] text-black font-syne font-bold text-xs hover:bg-[#b8f000]"
            >
              CONTINUE NETWORKING
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
