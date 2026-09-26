"use client";

import React from "react";
import { NetworkingPanel } from "@/components/NetworkingPanel";

export default function ConnectPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-mono text-[#c6ff00] font-bold uppercase tracking-widest">
          DELEGATE NETWORKING
        </span>
        <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-white">
          NETWORKING & MATCHMAKING
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Connect with investors, founders, and academic delegates using ULink 1-tap digital card swaps.
        </p>
      </div>

      <NetworkingPanel />
    </div>
  );
}
