"use client";

import React from "react";
import { ULinkTouchpointsSection } from "@/components/ULinkTouchpointsSection";
import { HowULinkWorks } from "@/components/HowULinkWorks";

export default function TouchpointsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="space-y-2">
        <span className="text-xs font-mono text-[#c6ff00] font-bold uppercase tracking-widest">
          PHYSICAL-TO-DIGITAL HARDWARE LAYER
        </span>
        <h1 className="font-syne font-extrabold text-3xl sm:text-4xl text-white">
          ULINK PHYSICAL TOUCHPOINTS
        </h1>
        <p className="text-xs sm:text-sm text-slate-300">
          Discover how NFC tags, QR beacons, and smart wristbands integrate with venue entrance gates, session hall doors, and exhibition booths.
        </p>
      </div>

      <HowULinkWorks />
      <ULinkTouchpointsSection />
    </div>
  );
}
