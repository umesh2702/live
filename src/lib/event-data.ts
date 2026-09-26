export interface Session {
  id: string;
  title: string;
  category: 'SUMMIT' | 'STARTUPS' | 'WORKSHOPS' | 'EXHIBITION' | 'NETWORKING' | 'COLLOQUIUM';
  date: string; // e.g. "2026-12-26"
  dateLabel: string; // e.g. "26 DEC"
  dayNumber: string; // e.g. "DAY 1"
  startTime: string;
  endTime: string;
  location: string;
  status: 'NOW LIVE' | 'UP NEXT' | 'COMPLETED' | 'SCHEDULED';
  speakers: string[];
  description: string;
  isOfficial: boolean;
  provenance: 'ISDSI VERIFIED' | 'DEMO CONTENT' | 'CONCEPT EXPERIENCE';
  boothId?: string;
  capacity?: string;
  tags?: string[];
}

export interface Person {
  id: string;
  name: string;
  role: string;
  organization: string;
  category: 'SPEAKERS' | 'INVESTORS' | 'EXPERTS' | 'FOUNDERS' | 'TEAM';
  avatar: string;
  bio: string;
  isOfficial: boolean;
  provenance: 'ISDSI VERIFIED' | 'DEMO CONTENT';
  linkedin?: string;
  topic?: string;
}

export interface Startup {
  id: string;
  name: string;
  tagline: string;
  industry: string;
  stage: 'Pre-Seed' | 'Seed' | 'Series A' | 'Growth';
  founder: string;
  boothId: string;
  logo: string;
  description: string;
  website: string;
  isOfficial: boolean;
  provenance: 'ISDSI VERIFIED' | 'DEMO CONTENT';
  fundingGoal?: string;
  keyMetrics?: string;
}

export interface Booth {
  id: string; // e.g. "A01"
  zone: string; // "Zone A — CleanTech & AI", etc.
  name: string;
  category: string;
  description: string;
  status: 'Occupied' | 'Open Demo' | 'Featured';
  startupId?: string;
  isOfficial: boolean;
  provenance: 'ISDSI VERIFIED' | 'DEMO CONTENT';
}

export interface Announcement {
  id: string;
  timestamp: string; // e.g. "2 mins ago"
  timeLabel: string;
  title: string;
  content: string;
  type: 'URGENT' | 'UPDATE' | 'LIVE' | 'INFO';
  isOfficial: boolean;
  provenance: 'ISDSI VERIFIED' | 'DEMO CONTENT';
}

export interface Touchpoint {
  id: string;
  name: string;
  tagline: string;
  location: string;
  nfcCode: string;
  actionText: string;
  icon: string;
  description: string;
  sampleScreenTitle: string;
  sampleScreenContent: string;
}

// OFFICIAL ISDSI SUMMIT METADATA
export const EVENT_DETAILS = {
  name: "ISDSI Global Investment Summit 2026",
  tagline: "Navigating Grand Challenges: Management, Policy and Innovation for Sustainable Growth",
  dates: "26—29 December 2026",
  shortDates: "26–29 DEC 2026",
  venue: "Institute of Management Technology (IMT), Hyderabad",
  city: "Hyderabad, India",
  website: "https://isdsiglobal.com/",
  organizers: "ISDSI & IMT Hyderabad",
  digitalLayer: "ULink Event Platform",
  techProvider: "Powered by UCreates",
  disclaimer: "Verified summit details are accurately compiled from ISDSI public materials. Illustrative profiles, analytics, and interaction scenarios are clearly marked as DEMO CONTENT."
};

// SESSIONS DATA
export const SESSIONS_DATA: Session[] = [
  {
    id: "sess-1",
    title: "Inaugural Summit Plenary: Navigating Grand Challenges & Sustainable Growth Policy",
    category: "SUMMIT",
    date: "2026-12-26",
    dateLabel: "26 DEC",
    dayNumber: "DAY 1",
    startTime: "09:30 AM",
    endTime: "11:00 AM",
    location: "Main Auditorium — Hall Alpha",
    status: "COMPLETED",
    speakers: ["Dr. K. R. Sharma (Summit Chair)", "Prof. Ananya Roy"],
    description: "Inaugural opening assembly examining global macro capital flows, trade corridor policies, and sustainable growth frameworks across emerging markets.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    tags: ["Policy", "Global Capital", "Sustainability"]
  },
  {
    id: "sess-2",
    title: "ISDSI Investment Keynote: Sovereign Funds & Cross-Border ESG Allocations",
    category: "SUMMIT",
    date: "2026-12-26",
    dateLabel: "26 DEC",
    dayNumber: "DAY 1",
    startTime: "11:15 AM",
    endTime: "01:00 PM",
    location: "Grand Ballroom — Zone A",
    status: "NOW LIVE",
    speakers: ["Vikramaditya Rao", "Elena Rostova", "Dr. Rajeshwar Rao"],
    description: "High-level institutional roundtable featuring sovereign wealth managers and venture capital leaders evaluating South Asian infrastructure and green transition funds.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    tags: ["Venture Capital", "ESG", "Sovereign Wealth"]
  },
  {
    id: "sess-3",
    title: "Startup Panel: Scaling DeepTech & Green Infrastructure in Emerging Markets",
    category: "STARTUPS",
    date: "2026-12-27",
    dateLabel: "27 DEC",
    dayNumber: "DAY 2",
    startTime: "02:30 PM",
    endTime: "04:00 PM",
    location: "Innovation Hub — Stage 2",
    status: "UP NEXT",
    speakers: ["Aarav Mehta", "Siddharth Varma"],
    description: "Curated founder showcase presenting sustainable grid optimization, agri-satellite intelligence, and clean logistics models to regional investor syndicates.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    tags: ["DeepTech", "Startups", "Investment"]
  },
  {
    id: "sess-4",
    title: "Doctoral Colloquium & Research Paper Presentations",
    category: "COLLOQUIUM",
    date: "2026-12-27",
    dateLabel: "27 DEC",
    dayNumber: "DAY 2",
    startTime: "10:00 AM",
    endTime: "01:00 PM",
    location: "Academic Block — Seminar Room B",
    status: "SCHEDULED",
    speakers: ["Prof. Meera Deshmukh", "Dr. James Sterling"],
    description: "Peer-reviewed academic track featuring doctoral research on management science, public policy intervention, and AI governance in decision systems.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    tags: ["Research", "Academia", "Policy"]
  },
  {
    id: "sess-5",
    title: "Exhibition Expo & Digital Touchpoint Walkthrough",
    category: "EXHIBITION",
    date: "2026-12-28",
    dateLabel: "28 DEC",
    dayNumber: "DAY 3",
    startTime: "11:00 AM",
    endTime: "04:30 PM",
    location: "IMT Exhibition Pavilion",
    status: "SCHEDULED",
    speakers: ["Exhibitor Delegations"],
    description: "Interactive floor exposition featuring 40+ startup booths integrated with ULink touchpoints for instant pitch deck transfers and founder contact exchange.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    tags: ["Exhibition", "NFC Touchpoints", "Networking"]
  },
  {
    id: "sess-6",
    title: "Executive Workshop: Decarbonization & Scope 3 Supply Chain Logistics",
    category: "WORKSHOPS",
    date: "2026-12-28",
    dateLabel: "28 DEC",
    dayNumber: "DAY 3",
    startTime: "02:00 PM",
    endTime: "04:00 PM",
    location: "Workshop Lab 1",
    status: "SCHEDULED",
    speakers: ["Dr. Sarah Jenkins"],
    description: "Executive session detailing carbon accounting methodologies, circular economy logistics, and green supply chain verification.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    tags: ["Decarbonization", "Workshop", "Supply Chain"]
  },
  {
    id: "sess-7",
    title: "Global Investors & Institutional Leaders VIP Networking Reception",
    category: "NETWORKING",
    date: "2026-12-29",
    dateLabel: "29 DEC",
    dayNumber: "DAY 4",
    startTime: "06:30 PM",
    endTime: "09:30 PM",
    location: "Lakeside Courtyard, IMT Campus",
    status: "SCHEDULED",
    speakers: ["Summit Chairs & Invited Delegates"],
    description: "Closing executive dinner connecting international LPs, corporate venture arms, policy leaders, and summit co-chairs.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    tags: ["VIP", "Networking", "Gala"]
  }
];

// PEOPLE DATA
export const PEOPLE_DATA: Person[] = [
  {
    id: "p-1",
    name: "Dr. K. R. Sharma",
    role: "Summit Co-Chair & Dean of Research",
    organization: "IMT Hyderabad / ISDSI",
    category: "SPEAKERS",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    bio: "Renowned scholar in management policy and sustainable development economics. Leading the ISDSI 2026 Global Summit organizing committee.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    topic: "Navigating Grand Challenges"
  },
  {
    id: "p-2",
    name: "Vikramaditya Rao",
    role: "Managing Partner",
    organization: "Apex Horizon Ventures",
    category: "INVESTORS",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    bio: "Managing over $450M in climate-tech and deep-tech growth capital across South Asia and Europe. Key speaker at the Investment Summit.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    topic: "Cross-Border Sovereign Funds"
  },
  {
    id: "p-3",
    name: "Elena Rostova",
    role: "Head of Sustainable Capital",
    organization: "Global Resilience Fund",
    category: "INVESTORS",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    bio: "Specializing in blended finance mechanisms for green transition in developing nations. Panelist on Sovereign & ESG Capital.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    topic: "ESG & Blended Finance"
  },
  {
    id: "p-4",
    name: "Aarav Mehta",
    role: "Founder & CEO",
    organization: "EcoGrid Dynamics",
    category: "FOUNDERS",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    bio: "Pioneering decentralized AI optimization for renewable energy storage grids. Presenting at the Startup Panel.",
    isOfficial: false,
    provenance: "DEMO CONTENT",
    topic: "CleanTech & Grid AI"
  },
  {
    id: "p-5",
    name: "Prof. Ananya Roy",
    role: "Professor of Public Policy",
    organization: "ISDSI Academic Council",
    category: "EXPERTS",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
    bio: "Advisor to international policy councils on sustainable infrastructure and digital trade corridors.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    topic: "Digital Trade Corridors"
  },
  {
    id: "p-6",
    name: "Siddharth Varma",
    role: "Co-Founder & CTO",
    organization: "AgriPulse AI",
    category: "FOUNDERS",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
    bio: "Building satellite hyperspectral analytics for micro-climate crop resilience forecasting.",
    isOfficial: false,
    provenance: "DEMO CONTENT",
    topic: "AgriTech Innovation"
  }
];

// STARTUPS DATA
export const STARTUPS_DATA: Startup[] = [
  {
    id: "st-1",
    name: "EcoGrid Dynamics",
    tagline: "AI-driven load forecasting & battery storage optimization.",
    industry: "Green Energy / CleanTech",
    stage: "Seed",
    founder: "Aarav Mehta",
    boothId: "A01",
    logo: "⚡",
    description: "EcoGrid Dynamics provides microsecond load prediction algorithms enabling utility grids to integrate renewable energy without stability degradation.",
    website: "https://example.com/ecogrid",
    isOfficial: false,
    provenance: "DEMO CONTENT",
    fundingGoal: "$2.5M Seed Round",
    keyMetrics: "3 Utility Pilots • 14GWh Saved"
  },
  {
    id: "st-2",
    name: "AgriPulse AI",
    tagline: "Hyperspectral satellite analytics for crop yield resilience.",
    industry: "AgriTech",
    stage: "Pre-Seed",
    founder: "Siddharth Varma",
    boothId: "A02",
    logo: "🌾",
    description: "AgriPulse offers micro-climate crop risk forecasting to regional agricultural co-ops using lightweight AI edge hardware.",
    website: "https://example.com/agripulse",
    isOfficial: false,
    provenance: "DEMO CONTENT",
    fundingGoal: "$1.2M Pre-Seed",
    keyMetrics: "45,000 Hectares Monitored"
  },
  {
    id: "st-3",
    name: "QuantumTrace Logistics",
    tagline: "Tamper-proof Scope 3 carbon verification for freight.",
    industry: "Supply Chain / Web3",
    stage: "Series A",
    founder: "Dr. Maya Lin",
    boothId: "B01",
    logo: "📦",
    description: "QuantumTrace automates emissions reporting for global maritime and air freight corridors via cryptographically signed IoT telemetry.",
    website: "https://example.com/quantumtrace",
    isOfficial: false,
    provenance: "DEMO CONTENT",
    fundingGoal: "$6.0M Series A",
    keyMetrics: "12 Global Freight Clients"
  },
  {
    id: "st-4",
    name: "BioShield Diagnostics",
    tagline: "Portable 10-minute microfluidic pathogen screening.",
    industry: "HealthTech",
    stage: "Seed",
    founder: "Rohan Kulkarni",
    boothId: "B02",
    logo: "🔬",
    description: "Rapid lab-on-a-chip diagnostic cartridges enabling early pathogen screening in resource-constrained environments.",
    website: "https://example.com/bioshield",
    isOfficial: false,
    provenance: "DEMO CONTENT",
    fundingGoal: "$3.0M Seed",
    keyMetrics: "CE Certified • 120 Clinics"
  }
];

// EXHIBITION BOOTHS
export const EXHIBITION_BOOTHS: Booth[] = [
  { id: "A01", zone: "Zone A — CleanTech & AI", name: "EcoGrid Dynamics", category: "CleanTech", description: "AI-driven grid balancing & energy storage software.", status: "Featured", startupId: "st-1", isOfficial: false, provenance: "DEMO CONTENT" },
  { id: "A02", zone: "Zone A — CleanTech & AI", name: "AgriPulse AI", category: "AgriTech", description: "Satellite hyperspectral analytics for crop resilience.", status: "Occupied", startupId: "st-2", isOfficial: false, provenance: "DEMO CONTENT" },
  { id: "A03", zone: "Zone A — CleanTech & AI", name: "NeuraLogix Systems", category: "DeepTech", description: "Neuromorphic edge chips for autonomous robotics.", status: "Occupied", isOfficial: false, provenance: "DEMO CONTENT" },
  { id: "B01", zone: "Zone B — Climate & Logistics", name: "QuantumTrace Logistics", category: "Supply Chain", description: "Scope 3 carbon verification IoT platforms.", status: "Featured", startupId: "st-3", isOfficial: false, provenance: "DEMO CONTENT" },
  { id: "B02", zone: "Zone B — Climate & Logistics", name: "BioShield Diagnostics", category: "HealthTech", description: "Microfluidics rapid diagnostics.", status: "Occupied", startupId: "st-4", isOfficial: false, provenance: "DEMO CONTENT" },
  { id: "B03", zone: "Zone B — Climate & Logistics", name: "CircularPoly Solutions", category: "Materials", description: "Enzymatic polymer upcycling technologies.", status: "Open Demo", isOfficial: false, provenance: "DEMO CONTENT" },
];

// ANNOUNCEMENTS
export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ann-1",
    timestamp: "2 mins ago",
    timeLabel: "NOW LIVE",
    title: "Keynote Plenary Session Commencing in Grand Ballroom",
    content: "Delegates are invited to join Zone A for the keynote VC & Sovereign Wealth roundtable.",
    type: "LIVE",
    isOfficial: true,
    provenance: "ISDSI VERIFIED"
  },
  {
    id: "ann-2",
    timestamp: "15 mins ago",
    timeLabel: "SUMMIT UPDATE",
    title: "Startup Demo Pavilion Open for Delegates",
    content: "Tap your ULink badge at Booth A01–A03 to receive instant founder pitch decks.",
    type: "UPDATE",
    isOfficial: false,
    provenance: "DEMO CONTENT"
  },
  {
    id: "ann-3",
    timestamp: "1 hour ago",
    timeLabel: "ATTENDEE INFO",
    title: "Badge & Passport Issuance Active at Main Lobby",
    content: "Please keep your ULink NFC pass ready for seamless hall check-ins.",
    type: "INFO",
    isOfficial: true,
    provenance: "ISDSI VERIFIED"
  }
];

// ULINK PHYSICAL TOUCHPOINTS
export const ULINK_TOUCHPOINTS: Touchpoint[] = [
  {
    id: "tp-reg",
    name: "Registration Desk",
    tagline: "Instant Delegate Check-in & Badge Pass",
    location: "Main Entrance Lobby",
    nfcCode: "NFC-REG-01",
    actionText: "TAP TO ENTER",
    icon: "BadgeCheck",
    description: "Delegates tap their smartphone or summit badge to sync personalized agenda schedules and unlock encrypted networking credentials.",
    sampleScreenTitle: "Welcome to ISDSI Summit 2026",
    sampleScreenContent: "Delegate passport verified. Your personal session pass is active. Tap any hall beacon to log attendance."
  },
  {
    id: "tp-hall",
    name: "Session Hall Entrance",
    tagline: "Real-time Hall Agenda & Executive Briefs",
    location: "Grand Ballroom / Auditorium",
    nfcCode: "NFC-HALL-ALPHA",
    actionText: "VIEW SESSION INFO",
    icon: "Radio",
    description: "Tapping door sensors displays live speaker briefs, slide summaries, and audience Q&A submission tools directly on mobile browsers.",
    sampleScreenTitle: "Live Session: Sovereign VC Keynote",
    sampleScreenContent: "Active Speaker: Elena Rostova. Submit Q&A questions or tap to save executive slide brief."
  },
  {
    id: "tp-booth",
    name: "Exhibition Booth Beacon",
    tagline: "Contactless Pitch Deck & Founder Exchange",
    location: "Exhibition Pavilion — Booth A01",
    nfcCode: "NFC-BOOTH-A01",
    actionText: "TAP TO DISCOVER",
    icon: "Rocket",
    description: "Replaces paper collateral. Tapping booth pillars transfers founder decks, technology whitepapers, and meeting booking links instantly.",
    sampleScreenTitle: "Connected with EcoGrid Dynamics",
    sampleScreenContent: "Deck transferred to your ULink pocket. Founder Aarav Mehta received your delegate token."
  },
  {
    id: "tp-net",
    name: "Networking Table Beacon",
    tagline: "Executive Matchmaking & Digital Business Cards",
    location: "Lakeside Courtyard",
    nfcCode: "NFC-NET-TABLE-4",
    actionText: "TAP TO CONNECT",
    icon: "Users",
    description: "Tap table beacons to view delegate profiles seated around you, match shared investment priorities, and swap contact tokens.",
    sampleScreenTitle: "Table 4: Climate Tech Investors",
    sampleScreenContent: "3 VC Partners & 2 Founders present. Tap 'Request Introduction' to exchange digital business cards."
  },
  {
    id: "tp-sponsor",
    name: "Sponsor Wall & Lounge",
    tagline: "Institutional Partner Portals & Term Sheets",
    location: "VIP Lounge Lobby",
    nfcCode: "NFC-SPONSOR-APEX",
    actionText: "EXPLORE PORTAL",
    icon: "Building2",
    description: "Provides direct access to sponsor reports, sovereign capital term sheets, and 1-on-1 institutional booking slots.",
    sampleScreenTitle: "Apex Horizon Investment Portal",
    sampleScreenContent: "Downloading 2026 South Asia Venture Capital Report. Booking private 1-on-1 meeting slot."
  },
  {
    id: "tp-exit",
    name: "Exit & Feedback Point",
    tagline: "Instant Micro-Feedback & Verified Certificate",
    location: "Main Exit Arch",
    nfcCode: "NFC-EXIT-GATE",
    actionText: "COMPLETE VISIT",
    icon: "CheckCircle2",
    description: "Captures 1-tap session ratings and issues verified digital certificates of attendance upon summit departure.",
    sampleScreenTitle: "Summit Record & Certificate",
    sampleScreenContent: "Thank you for attending! Your verified ISDSI Summit 2026 digital certificate has been compiled."
  }
];
