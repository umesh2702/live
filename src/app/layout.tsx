import type { Metadata } from "next";
import "./globals.css";
import { EventProvider } from "@/lib/event-store";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NfcTapModal } from "@/components/NfcTapModal";
import { DemoSimulationBar } from "@/components/DemoSimulationBar";

export const metadata: Metadata = {
  title: "ULink Live — ISDSI Global Investment Summit 2026",
  description: "Concept demonstration experience of ULink by UCreates for ISDSI Global Investment Summit 2026 at IMT Hyderabad. Connecting physical touchpoints to a live digital event layer.",
  keywords: ["ULink", "UCreates", "ISDSI Global Investment Summit 2026", "IMT Hyderabad", "Live Digital Event OS", "NFC Touchpoints"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full dark">
      <body className="min-h-screen bg-[#0b0c0e] text-slate-100 flex flex-col antialiased selection:bg-[#c6ff00] selection:text-black">
        <EventProvider>
          <Header />
          <main className="flex-1 w-full relative">{children}</main>
          <Footer />
          <NfcTapModal />
          <DemoSimulationBar />
        </EventProvider>
      </body>
    </html>
  );
}
