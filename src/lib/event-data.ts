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
  name: "20th ISDSI Global Conference 2026",
  tagline: "Navigating Grand Challenges: Management, Policy and Innovation for Sustainable Growth",
  dates: "26—29 December 2026",
  shortDates: "26–29 DEC 2026",
  venue: "Institute of Management Technology (IMT), Hyderabad",
  city: "Hyderabad, India",
  website: "https://isdsiglobal.com/",
  organizers: "ISDSI Global & IMT Hyderabad",
  digitalLayer: "ULink Event Experience Concept",
  techProvider: "Powered by UCreates",
  disclaimer: "Official ISDSI conference metadata is compiled from public materials at isdsiglobal.com. ULink digital delegate passes, touchpoint simulations, startup showcases, and metrics are presented as illustrative DEMO CONTENT."
};

// SESSIONS DATA
export const SESSIONS_DATA: Session[] = [
  {
    id: "sess-1",
    title: "Doctoral Colloquium & Academic Research Track",
    category: "COLLOQUIUM",
    date: "2026-12-26",
    dateLabel: "26 DEC",
    dayNumber: "DAY 1",
    startTime: "09:30 AM",
    endTime: "01:00 PM",
    location: "Academic Block — Seminar Hall A",
    status: "COMPLETED",
    speakers: ["Prof. Sourabh Bhattacharya", "Prof. A. Sarath Babu"],
    description: "Opening academic track featuring doctoral research presentations, methodology workshops, and peer-reviewed paper discussions across management science and policy.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    tags: ["Research", "Academia", "Doctoral Track"]
  },
  {
    id: "sess-2",
    title: "Inaugural Summit Plenary: Navigating Grand Challenges & Sustainable Growth Policy",
    category: "SUMMIT",
    date: "2026-12-26",
    dateLabel: "26 DEC",
    dayNumber: "DAY 1",
    startTime: "02:30 PM",
    endTime: "05:00 PM",
    location: "Main Auditorium — Hall Alpha",
    status: "NOW LIVE",
    speakers: ["Prof. Bhimaraya Metri (President, ISDSI)", "Prof. K. M. Baharul Islam (Director, IMT)", "Prof. Ravi Kumar Jain"],
    description: "Inaugural opening assembly examining global macro management, SDGs, trade corridor policies, and sustainable growth frameworks across emerging markets.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    tags: ["Policy", "Global Capital", "Sustainability"]
  },
  {
    id: "sess-3",
    title: "ISDSI Keynote: Operations, Analytics & Digital Transformation for Sustainable Growth",
    category: "SUMMIT",
    date: "2026-12-27",
    dateLabel: "27 DEC",
    dayNumber: "DAY 2",
    startTime: "09:30 AM",
    endTime: "11:30 AM",
    location: "Grand Ballroom — Zone A",
    status: "UP NEXT",
    speakers: ["Prof. Bhimaraya Metri", "Prof. K. M. Baharul Islam"],
    description: "Plenary keynote focusing on data sciences, supply chain resilience, business analytics, and digital transformation in decision systems.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    tags: ["Analytics", "Operations", "Digital Transformation"]
  },
  {
    id: "sess-4",
    title: "Startup Panel Showcase: Scaling DeepTech & Green Infrastructure",
    category: "STARTUPS",
    date: "2026-12-27",
    dateLabel: "27 DEC",
    dayNumber: "DAY 2",
    startTime: "02:30 PM",
    endTime: "04:30 PM",
    location: "Innovation Hub — Stage 2",
    status: "SCHEDULED",
    speakers: ["Aarav Mehta (EcoGrid Dynamics)", "Siddharth Varma (AgriPulse AI)"],
    description: "Illustrative startup panel demonstrating clean energy grid optimization and AgriTech solutions for regional investors and summit delegates.",
    isOfficial: false,
    provenance: "DEMO CONTENT",
    tags: ["DeepTech", "Startups", "Investment"]
  },
  {
    id: "sess-5",
    title: "Executive Workshop: Decarbonization & Scope 3 Supply Chain Logistics",
    category: "WORKSHOPS",
    date: "2026-12-28",
    dateLabel: "28 DEC",
    dayNumber: "DAY 3",
    startTime: "10:00 AM",
    endTime: "01:00 PM",
    location: "Workshop Lab 1",
    status: "SCHEDULED",
    speakers: ["ISDSI Sustainability Faculty", "Industry Specialists"],
    description: "Executive session detailing carbon accounting methodologies, circular economy logistics, and green supply chain verification.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    tags: ["Decarbonization", "Workshop", "Supply Chain"]
  },
  {
    id: "sess-6",
    title: "Investment Summit Roundtable: Sovereign & Green Capital Allocation",
    category: "SUMMIT",
    date: "2026-12-28",
    dateLabel: "28 DEC",
    dayNumber: "DAY 3",
    startTime: "02:30 PM",
    endTime: "05:00 PM",
    location: "Grand Ballroom — Zone B",
    status: "SCHEDULED",
    speakers: ["Vikramaditya Rao (Apex Horizon)", "Elena Rostova (Global Resilience Fund)"],
    description: "Concept roundtable demonstrating institutional investor matchmaking, cross-border ESG capital flows, and venture funding.",
    isOfficial: false,
    provenance: "DEMO CONTENT",
    tags: ["Venture Capital", "ESG", "Sovereign Wealth"]
  },
  {
    id: "sess-7",
    title: "Exhibition Expo & ULink Touchpoint Showcase",
    category: "EXHIBITION",
    date: "2026-12-29",
    dateLabel: "29 DEC",
    dayNumber: "DAY 4",
    startTime: "10:00 AM",
    endTime: "02:00 PM",
    location: "IMT Exhibition Pavilion",
    status: "SCHEDULED",
    speakers: ["Exhibitor Delegations"],
    description: "Interactive floor pavilion featuring research poster displays and ULink NFC touchpoint demonstration beacons for pitch deck transfers.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    tags: ["Exhibition", "NFC Touchpoints", "Networking"]
  },
  {
    id: "sess-8",
    title: "Valedictory Assembly & Delegate Networking Reception",
    category: "NETWORKING",
    date: "2026-12-29",
    dateLabel: "29 DEC",
    dayNumber: "DAY 4",
    startTime: "05:00 PM",
    endTime: "08:00 PM",
    location: "Lakeside Courtyard, IMT Campus",
    status: "SCHEDULED",
    speakers: ["ISDSI Office Bearers", "Summit Co-Chairs"],
    description: "Closing assembly, best paper award presentations, and executive delegate dinner connecting international scholars, policy leaders, and summit co-chairs.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    tags: ["VIP", "Networking", "Gala"]
  }
];

// PEOPLE DATA
export const PEOPLE_DATA: Person[] = [
  {
    id: "p-1",
    name: "Prof. Bhimaraya Metri",
    role: "President, ISDSI Global & Director, IIM Nagpur",
    organization: "ISDSI Global / IIM Nagpur",
    category: "SPEAKERS",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    bio: "Distinguished academic leader and President of ISDSI Global. Director of IIM Nagpur and leading voice in data sciences, supply chain management, and institutional governance.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    topic: "Operations & Management Leadership"
  },
  {
    id: "p-2",
    name: "Prof. K. M. Baharul Islam",
    role: "Conference Chair & Director",
    organization: "IMT Hyderabad / ISDSI",
    category: "SPEAKERS",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    bio: "Director of IMT Hyderabad and Conference Chair for the 20th ISDSI Global Conference. Expert in public policy, communications, and institutional development.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    topic: "Navigating Grand Challenges"
  },
  {
    id: "p-3",
    name: "Prof. Ravi Kumar Jain",
    role: "Secretary, ISDSI Global & Director",
    organization: "IILM University, Gurugram / ISDSI",
    category: "EXPERTS",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    bio: "Secretary of ISDSI Global and Director of IILM University, Gurugram. Renowned scholar in corporate finance, financial econometrics, and institutional policy.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    topic: "Financial Economics & Policy"
  },
  {
    id: "p-4",
    name: "Prof. Sourabh Bhattacharya",
    role: "Conference Co-Chair & Dean (Academics)",
    organization: "IMT Hyderabad",
    category: "EXPERTS",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
    bio: "Dean (Academics) and Professor of Operations Management at IMT Hyderabad. Leading the academic track and Doctoral Colloquium for ISDSI 2026.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    topic: "Supply Chain & Operations"
  },
  {
    id: "p-5",
    name: "Prof. A. Sarath Babu",
    role: "Conference Convener & Associate Professor",
    organization: "IMT Hyderabad",
    category: "EXPERTS",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
    bio: "Associate Professor of Marketing and Conference Convener at IMT Hyderabad, organizing summit tracks, exhibition floor, and delegate sessions.",
    isOfficial: true,
    provenance: "ISDSI VERIFIED",
    topic: "Marketing & Sustainable Growth"
  },
  {
    id: "p-6",
    name: "Vikramaditya Rao",
    role: "Managing Partner (Simulated Profile)",
    organization: "Apex Horizon Ventures",
    category: "INVESTORS",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    bio: "[DEMO CONTENT] Simulated investor profile demonstrating ULink VC matchmaking features for climate-tech and deep-tech capital allocations.",
    isOfficial: false,
    provenance: "DEMO CONTENT",
    topic: "Cross-Border Sovereign Funds"
  },
  {
    id: "p-7",
    name: "Elena Rostova",
    role: "Head of Sustainable Capital (Simulated Profile)",
    organization: "Global Resilience Fund",
    category: "INVESTORS",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    bio: "[DEMO CONTENT] Simulated investor profile demonstrating ULink ESG term sheet sharing and 1-on-1 meeting booking tools.",
    isOfficial: false,
    provenance: "DEMO CONTENT",
    topic: "ESG & Blended Finance"
  },
  {
    id: "p-8",
    name: "Aarav Mehta",
    role: "Founder & CEO (Simulated Profile)",
    organization: "EcoGrid Dynamics",
    category: "FOUNDERS",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    bio: "[DEMO CONTENT] Illustrative startup founder profile demonstrating ULink booth beacon NFC pitch deck transfers.",
    isOfficial: false,
    provenance: "DEMO CONTENT",
    topic: "CleanTech & Grid AI"
  },
  {
    id: "p-9",
    name: "Siddharth Varma",
    role: "Co-Founder & CTO (Simulated Profile)",
    organization: "AgriPulse AI",
    category: "FOUNDERS",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=500&q=80",
    bio: "[DEMO CONTENT] Illustrative AgriTech founder profile demonstrating ULink delegate matchmaking and pitch deck downloads.",
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
    description: "[DEMO CONTENT] EcoGrid Dynamics provides microsecond load prediction algorithms enabling utility grids to integrate renewable energy without stability degradation.",
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
    description: "[DEMO CONTENT] AgriPulse offers micro-climate crop risk forecasting to regional agricultural co-ops using lightweight AI edge hardware.",
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
    description: "[DEMO CONTENT] QuantumTrace automates emissions reporting for global maritime and air freight corridors via cryptographically signed IoT telemetry.",
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
    description: "[DEMO CONTENT] Rapid lab-on-a-chip diagnostic cartridges enabling early pathogen screening in resource-constrained environments.",
    website: "https://example.com/bioshield",
    isOfficial: false,
    provenance: "DEMO CONTENT",
    fundingGoal: "$3.0M Seed",
    keyMetrics: "CE Certified • 120 Clinics"
  }
];

// EXHIBITION BOOTHS
export const EXHIBITION_BOOTHS: Booth[] = [
  { id: "A01", zone: "Zone A — CleanTech & AI", name: "EcoGrid Dynamics", category: "CleanTech", description: "[DEMO CONTENT] AI-driven grid balancing & energy storage software.", status: "Featured", startupId: "st-1", isOfficial: false, provenance: "DEMO CONTENT" },
  { id: "A02", zone: "Zone A — CleanTech & AI", name: "AgriPulse AI", category: "AgriTech", description: "[DEMO CONTENT] Satellite hyperspectral analytics for crop resilience.", status: "Occupied", startupId: "st-2", isOfficial: false, provenance: "DEMO CONTENT" },
  { id: "A03", zone: "Zone A — CleanTech & AI", name: "NeuraLogix Systems", category: "DeepTech", description: "[DEMO CONTENT] Neuromorphic edge chips for autonomous robotics.", status: "Occupied", isOfficial: false, provenance: "DEMO CONTENT" },
  { id: "B01", zone: "Zone B — Climate & Logistics", name: "QuantumTrace Logistics", category: "Supply Chain", description: "[DEMO CONTENT] Scope 3 carbon verification IoT platforms.", status: "Featured", startupId: "st-3", isOfficial: false, provenance: "DEMO CONTENT" },
  { id: "B02", zone: "Zone B — Climate & Logistics", name: "BioShield Diagnostics", category: "HealthTech", description: "[DEMO CONTENT] Microfluidics rapid diagnostics.", status: "Occupied", startupId: "st-4", isOfficial: false, provenance: "DEMO CONTENT" },
  { id: "B03", zone: "Zone B — Climate & Logistics", name: "CircularPoly Solutions", category: "Materials", description: "[DEMO CONTENT] Enzymatic polymer upcycling technologies.", status: "Open Demo", isOfficial: false, provenance: "DEMO CONTENT" },
];

// ANNOUNCEMENTS
export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: "ann-1",
    timestamp: "2 mins ago",
    timeLabel: "NOW LIVE",
    title: "Inaugural Summit Plenary Commencing in Main Auditorium",
    content: "Delegates are invited to join Main Auditorium Hall Alpha for the Inaugural Summit Plenary.",
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
    content: "Please keep your ULink NFC pass ready for seamless hall check-in simulation.",
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
    tagline: "Instant Delegate Check-in & Pass Preview",
    location: "Main Entrance Lobby",
    nfcCode: "NFC-REG-01",
    actionText: "TAP TO PREVIEW",
    icon: "BadgeCheck",
    description: "Delegates tap their smartphone against the registration pillar to view personalized agenda schedules and digital business card previews without app installation.",
    sampleScreenTitle: "Welcome to ISDSI Summit 2026",
    sampleScreenContent: "Delegate pass preview active. Tap any hall beacon to log simulated attendance."
  },
  {
    id: "tp-hall",
    name: "Session Hall Entrance",
    tagline: "Real-time Hall Agenda & Executive Briefs",
    location: "Grand Ballroom / Auditorium",
    nfcCode: "NFC-HALL-ALPHA",
    actionText: "VIEW SESSION INFO",
    icon: "Radio",
    description: "Tapping door touchpoint beacons displays live speaker briefs, slide summaries, and audience Q&A submission tools directly on mobile browsers.",
    sampleScreenTitle: "Live Session: Inaugural Plenary",
    sampleScreenContent: "Active Speaker: Prof. Bhimaraya Metri. Submit Q&A questions or tap to save executive slide brief."
  },
  {
    id: "tp-booth",
    name: "Exhibition Booth Beacon",
    tagline: "Contactless Pitch Deck & Founder Exchange",
    location: "Exhibition Pavilion — Booth A01",
    nfcCode: "NFC-BOOTH-A01",
    actionText: "TAP TO DISCOVER",
    icon: "Rocket",
    description: "Replaces paper collateral. Tapping booth beacons transfers founder decks, technology whitepapers, and contact details directly to mobile devices.",
    sampleScreenTitle: "Connected with EcoGrid Dynamics (Demo)",
    sampleScreenContent: "Startup deck transferred to your ULink pocket. Founder Aarav Mehta received your delegate profile."
  },
  {
    id: "tp-net",
    name: "Networking Table Beacon",
    tagline: "Executive Matchmaking & Digital Card Swap",
    location: "Lakeside Courtyard",
    nfcCode: "NFC-NET-TABLE-4",
    actionText: "TAP TO CONNECT",
    icon: "Users",
    description: "Tap table beacons to view delegate profiles seated around you, match shared investment priorities, and swap digital contact cards.",
    sampleScreenTitle: "Table 4: Climate Tech & Policy",
    sampleScreenContent: "Delegates and founders present. Tap 'Request Introduction' to swap digital contact cards."
  },
  {
    id: "tp-sponsor",
    name: "Sponsor Wall & Lounge",
    tagline: "Institutional Partner Portals & Reports",
    location: "VIP Lounge Lobby",
    nfcCode: "NFC-SPONSOR-APEX",
    actionText: "EXPLORE PORTAL",
    icon: "Building2",
    description: "Provides direct access to sponsor reports, sovereign capital briefs, and 1-on-1 institutional booking slots.",
    sampleScreenTitle: "Apex Horizon Investment Portal (Demo)",
    sampleScreenContent: "Downloading 2026 South Asia Venture Capital Report. Booking private 1-on-1 meeting slot."
  },
  {
    id: "tp-exit",
    name: "Exit & Feedback Point",
    tagline: "Instant Micro-Feedback & Attendance Record",
    location: "Main Exit Arch",
    nfcCode: "NFC-EXIT-GATE",
    actionText: "COMPLETE VISIT",
    icon: "CheckCircle2",
    description: "Captures 1-tap session feedback ratings and generates a digital summary record of attended sessions upon summit departure.",
    sampleScreenTitle: "Summit Record & Certificate Preview",
    sampleScreenContent: "Thank you for attending! Your ISDSI Summit 2026 digital attendance record summary has been compiled."
  }
];

