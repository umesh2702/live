"use client";

import React, { createContext, useContext, useState } from "react";
import { SESSIONS_DATA, INITIAL_ANNOUNCEMENTS, Session, Announcement, Touchpoint, ULINK_TOUCHPOINTS } from "./event-data";

interface EventContextType {
  sessions: Session[];
  announcements: Announcement[];
  activeSession: Session;
  upNextSession: Session;
  isSimulationRunning: boolean;
  simulationStep: number;
  bookmarkedSessionIds: string[];
  connectedDelegateIds: string[];
  activeTouchpoint: Touchpoint | null;
  delegateName: string;
  setDelegateName: (name: string) => void;
  runSimulationStep: () => void;
  runFullAutoSimulation: () => void;
  resetSimulation: () => void;
  publishAnnouncement: (title: string, content: string, type: 'URGENT' | 'UPDATE' | 'LIVE' | 'INFO') => void;
  toggleBookmarkSession: (id: string) => void;
  connectWithDelegate: (id: string) => boolean;
  simulateNfcTap: (touchpointId: string) => void;
  closeNfcModal: () => void;
  setSessionStatus: (sessionId: string, newStatus: 'NOW LIVE' | 'UP NEXT' | 'COMPLETED' | 'SCHEDULED') => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sessions, setSessions] = useState<Session[]>(SESSIONS_DATA);
  const [announcements, setAnnouncements] = useState<Announcement[]>(INITIAL_ANNOUNCEMENTS);
  const [simulationStep, setSimulationStep] = useState<number>(0);
  const [isSimulationRunning, setIsSimulationRunning] = useState<boolean>(false);
  const [bookmarkedSessionIds, setBookmarkedSessionIds] = useState<string[]>(["sess-2", "sess-3"]);
  const [connectedDelegateIds, setConnectedDelegateIds] = useState<string[]>(["p-2"]);
  const [activeTouchpoint, setActiveTouchpoint] = useState<Touchpoint | null>(null);
  const [delegateName, setDelegateName] = useState<string>("Executive Delegate");

  const activeSession = sessions.find(s => s.status === 'NOW LIVE') || sessions[1];
  const upNextSession = sessions.find(s => s.status === 'UP NEXT') || sessions[2];

  // SIMULATION CONTROLLER
  const runSimulationStep = () => {
    setSimulationStep(prev => {
      const nextStep = (prev + 1) % 4;
      
      if (nextStep === 0) {
        setSessions(SESSIONS_DATA);
      } else if (nextStep === 1) {
        // Step 1: Inaugural Plenary NOW LIVE
        setSessions(prevS => prevS.map(s => {
          if (s.id === 'sess-2') return { ...s, status: 'NOW LIVE' };
          if (s.id === 'sess-3') return { ...s, status: 'UP NEXT' };
          return s;
        }));
        const newAnn: Announcement = {
          id: `ann-sim-${Date.now()}`,
          timestamp: "Just now",
          timeLabel: "NOW LIVE",
          title: "Inaugural Summit Plenary Commenced in Main Auditorium",
          content: "Summit plenary address is active. Submit Q&A questions on your summit pass preview.",
          type: "LIVE",
          isOfficial: true,
          provenance: "ISDSI VERIFIED"
        };
        setAnnouncements(a => [newAnn, ...a]);
      } else if (nextStep === 2) {
        const newAnn: Announcement = {
          id: `ann-sim-${Date.now()}`,
          timestamp: "Just now",
          timeLabel: "LOCATION UPDATE",
          title: "Startup Panel Location Confirmed for Stage 2",
          content: "Stage 2 Innovation Hub doors opening. Tap ULink pass at hall entrance.",
          type: "URGENT",
          isOfficial: false,
          provenance: "DEMO CONTENT"
        };
        setAnnouncements(a => [newAnn, ...a]);
      } else if (nextStep === 3) {
        setSessions(prevS => prevS.map(s => {
          if (s.id === 'sess-2') return { ...s, status: 'COMPLETED' };
          if (s.id === 'sess-3') return { ...s, status: 'NOW LIVE' };
          if (s.id === 'sess-4') return { ...s, status: 'UP NEXT' };
          return s;
        }));
        const newAnn: Announcement = {
          id: `ann-sim-${Date.now()}`,
          timestamp: "Just now",
          timeLabel: "NOW LIVE",
          title: "Startup Panel Showcase Now Live on Stage 2",
          content: "Illustrative seed-stage founders presenting. Tap booth beacons to download decks.",
          type: "LIVE",
          isOfficial: false,
          provenance: "DEMO CONTENT"
        };
        setAnnouncements(a => [newAnn, ...a]);
      }

      return nextStep;
    });
  };

  const runFullAutoSimulation = () => {
    setIsSimulationRunning(true);
    runSimulationStep();

    let stepCounter = 1;
    const interval = setInterval(() => {
      stepCounter++;
      runSimulationStep();
      if (stepCounter >= 3) {
        clearInterval(interval);
        setIsSimulationRunning(false);
      }
    }, 4000);
  };

  const resetSimulation = () => {
    setSessions(SESSIONS_DATA);
    setAnnouncements(INITIAL_ANNOUNCEMENTS);
    setSimulationStep(0);
    setIsSimulationRunning(false);
  };

  const publishAnnouncement = (title: string, content: string, type: 'URGENT' | 'UPDATE' | 'LIVE' | 'INFO') => {
    const newAnn: Announcement = {
      id: `ann-custom-${Date.now()}`,
      timestamp: "Just now",
      timeLabel: type === 'LIVE' ? "NOW LIVE" : "SUMMIT BROADCAST",
      title,
      content,
      type,
      isOfficial: false,
      provenance: "DEMO CONTENT"
    };
    setAnnouncements(prev => [newAnn, ...prev]);
  };

  const toggleBookmarkSession = (id: string) => {
    setBookmarkedSessionIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const connectWithDelegate = (id: string): boolean => {
    let newlyAdded = false;
    setConnectedDelegateIds(prev => {
      if (!prev.includes(id)) {
        newlyAdded = true;
        return [...prev, id];
      }
      return prev;
    });
    return newlyAdded;
  };

  const simulateNfcTap = (touchpointId: string) => {
    const tp = ULINK_TOUCHPOINTS.find(t => t.id === touchpointId) || ULINK_TOUCHPOINTS[0];
    setActiveTouchpoint(tp);
  };

  const closeNfcModal = () => {
    setActiveTouchpoint(null);
  };

  const setSessionStatus = (sessionId: string, newStatus: 'NOW LIVE' | 'UP NEXT' | 'COMPLETED' | 'SCHEDULED') => {
    setSessions(prev => prev.map(s => s.id === sessionId ? { ...s, status: newStatus } : s));
  };

  return (
    <EventContext.Provider value={{
      sessions,
      announcements,
      activeSession,
      upNextSession,
      isSimulationRunning,
      simulationStep,
      bookmarkedSessionIds,
      connectedDelegateIds,
      activeTouchpoint,
      delegateName,
      setDelegateName,
      runSimulationStep,
      runFullAutoSimulation,
      resetSimulation,
      publishAnnouncement,
      toggleBookmarkSession,
      connectWithDelegate,
      simulateNfcTap,
      closeNfcModal,
      setSessionStatus
    }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within an EventProvider");
  }
  return context;
};
