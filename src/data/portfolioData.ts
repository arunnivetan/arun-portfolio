import type { Project, Internship, SkillCategory, Achievement } from '../types';

export const PERSONAL_INFO = {
  name: "R S ARUN NIVETAN",
  shortName: "ARUN NIVETAN",
  title: "Electrical & Electronics Engineering Student",
  headline: "Building at the intersection of Power, Renewable Energy & Technology.",
  subheadline: "Final-year EEE student passionate about power systems, renewable energy, electrical analysis and technology-driven engineering solutions.",
  coreMessage: "Electrical Engineer who builds, analyzes, and solves real-world problems using engineering + technology.",
  bio: "I am a final-year Electrical and Electronics Engineering student with a strong interest in power systems, renewable energy and practical engineering applications. Alongside electrical engineering, I explore IoT, software, data management and automation to build solutions for real-world problems.",
  
  contact: {
    email: "arunnivetan2005@gmail.com",
    phone: "+91 7539960504",
    linkedin: "https://linkedin.com/in/arun-nivetan-r-s",
    github: "https://github.com",
    location: "Chennai, Tamil Nadu, India"
  },
  
  education: {
    college: "Sri Sai Ram Institute of Technology, Chennai",
    degree: "B.E. Electrical & Electronics Engineering (Full Time)",
    affiliation: "Affiliated with Anna University",
    period: "2023 – 2027",
    cgpa: "7.7 / 10",
    schoolHSC: "Sri Vignesh Vidyalaya (12th Grade - 66%)",
    schoolSSLC: "Sri Vignesh Vidyalaya (10th Grade - 77%)"
  },

  focusAreas: [
    "Power Systems & Distribution",
    "Renewable Energy & Solar PV",
    "ETAP Electrical Simulation & Load Flow",
    "IoT & Smart Embedded Systems"
  ],

  currentGoal: "Looking for opportunities in electrical engineering, renewable energy, power systems and related technical roles."
};

export const PROJECTS: Project[] = [
  {
    id: "ecobin",
    number: "PROJECT 01",
    title: "ECOBIN",
    subtitle: "IoT Smart Waste Management & Automated Segregation System",
    category: "IoT & AI",
    signalType: "control",
    description: "An IoT-based automated waste segregation, disposal, and sanitization system developed for Smart India Hackathon 2026 under the Clean and Green Technology theme. Uses AI vision, sensor telemetry, and MQTT for real-time monitoring and collection route optimization.",
    fullDetails: "The working process starts when waste is inserted into the bin. An AI camera (Luxonis OAK-D Lite) captures the image, processed by YOLOv8 to classify waste into biodegradable, non-biodegradable, or mixed. A Raspberry Pi controls the motor rotating mechanism to direct waste into designated compartments. Real-time sensors (Ultrasonic for fill level, Load cell for weight, BME280 for temp/humidity, PIR for motion) stream telemetry via MQTT/HTTPS to a live web/mobile dashboard with a QR-based user reward system.",
    technologies: ["ESP32", "Raspberry Pi", "Luxonis OAK-D Lite", "YOLOv8", "HC-SR04", "LM35", "Load Cell", "BME280", "GPS", "GSM", "LoRa", "MQTT / HTTPS", "Flutter", "Cloud"],
    achievements: [
      "Won 1st Prize at Sairam SDG Innovathon 4.0",
      "IEEE ICGCCT 2026 Research Paper Publication",
      "Patent / IPR Work Filed in India",
      "Finalist EDII Tamil Nadu Innovation Voucher Program (₹3 Lakh)",
      "6th Position Pitch Circuit (CIIC ₹10 Lakh)"
    ],
    flowNodes: [
      { id: "s1", label: "SENSOR & AI CAMERA", sublabel: "OAK-D Lite + YOLOv8", type: "input" },
      { id: "s2", label: "MICROCONTROLLER", sublabel: "ESP32 & Raspberry Pi", type: "process" },
      { id: "s3", label: "COMMUNICATION", sublabel: "MQTT / HTTPS / LoRa", type: "process" },
      { id: "s4", label: "CLOUD ENGINE", sublabel: "Telemetry & Route AI", type: "cloud" },
      { id: "s5", label: "ANALYTICS & APP", sublabel: "Dashboard & QR Rewards", type: "output" }
    ]
  },
  {
    id: "spacecraft-ai",
    number: "PROJECT 02",
    title: "SPACECRAFT AI",
    subtitle: "AI-assisted Interior Design & Renovation Platform",
    category: "AI Product",
    signalType: "power",
    description: "A technology concept and interactive platform for converting user floor plans and existing room photos into visual 3D interior renovation concepts paired with location-specific budget estimation.",
    fullDetails: "Solves the traditional renovation pain point where homeowners struggle to visualize final space designs and estimate local material & labor costs prior to execution. Provides real-time visual exploration and automated line-item cost estimations based on geographic location parameters.",
    technologies: ["AI Image Generation", "React", "Location APIs", "Cost Estimation Engine", "Figma UI/UX", "Tailwind CSS"],
    flowNodes: [
      { id: "sp1", label: "USER INPUT", sublabel: "Floor Plan / Photo", type: "input" },
      { id: "sp2", label: "AI VISUALIZER", sublabel: "Interior Rendering", type: "process" },
      { id: "sp3", label: "MATERIAL MATRIX", sublabel: "Specs & Finishes", type: "process" },
      { id: "sp4", label: "LOCATION ENGINE", sublabel: "Regional Pricing API", type: "cloud" },
      { id: "sp5", label: "COST ESTIMATION", sublabel: "Budget Summary Dossier", type: "output" }
    ]
  },
  {
    id: "vasavi-crm",
    number: "PROJECT 03",
    title: "VASAVI CRM",
    subtitle: "Business Management & Intelligence Platform",
    category: "Enterprise CRM",
    signalType: "renewable",
    description: "A full-stack business management CRM system custom-built for Sri Vasavi Plywoods (hardware, laminates, glass, interior supplies) to digitize customer management, inventory, invoicing, and payment follow-ups.",
    fullDetails: "Replaced error-prone manual paper registers with a centralized web dashboard. Built with Supabase PostgreSQL database secured with Row Level Security (RLS) policies. Features automated customer payment tracking, PDF invoice generation, and integrated WhatsApp business reminders. Taught me how software can solve real-world operational challenges in traditional businesses.",
    technologies: ["Supabase", "PostgreSQL", "Row Level Security (RLS)", "Figma", "Web Frontend", "PDF Invoice Engine", "WhatsApp Integration", "Business Analytics"],
    flowNodes: [
      { id: "crm1", label: "CUSTOMER", sublabel: "Profile & History", type: "input" },
      { id: "crm2", label: "ORDER MANAGEMENT", sublabel: "Quotations & Sales", type: "process" },
      { id: "crm3", label: "INVENTORY TRACKING", sublabel: "Stock & Warehousing", type: "process" },
      { id: "crm4", label: "PAYMENTS & RLS", sublabel: "Supabase DB Security", type: "cloud" },
      { id: "crm5", label: "ANALYTICS & WHATSAPP", sublabel: "PDF Invoices & Alerts", type: "output" }
    ]
  }
];

export const INTERNSHIPS: Internship[] = [
  {
    id: "kothari",
    company: "Kothari Sugars & Chemicals Limited",
    role: "Industrial Electrical Systems & Cogeneration Intern",
    period: "June 2026",
    duration: "15 Days",
    voltageLevels: ["110 kV", "11 kV", "415 V"],
    type: "industrial",
    icon: "Factory",
    keyHighlights: [
      "Studied 110 kV / 11 kV substation electrical distribution & single-line diagrams",
      "Bagasse-based cogeneration plant (66 kg/cm² steam @ 480°C driving steam turbine & 11 kV synchronous generator)",
      "Observed industrial switchgear: VCB (Vacuum Circuit Breakers), ACB, MCCB, PCC/MCC panels",
      "Protective relay coordination, transformer maintenance, and heavy-duty 3-phase induction motors"
    ],
    detailedDescription: "Gained comprehensive industrial exposure to sugarcane processing and the facility's 11 kV cogeneration power system. Studied how bagasse fuel generates 66 kg/cm² high-pressure steam at 480°C to drive turbine-generators, while exhaust steam is recycled for factory evaporation processes."
  },
  {
    id: "aswin-solar",
    company: "Aswin Solar",
    role: "Solar PV Installation & Systems Intern",
    period: "July 2026",
    duration: "15 Days",
    voltageLevels: ["1100 V DC", "415 V AC"],
    type: "solar",
    icon: "Sun",
    keyHighlights: [
      "Practical exposure to 30 kW On-Grid Solar PV system at Vadapalani Temple project, Chennai",
      "Analyzed Sungrow SG33CX-P2 inverter (33 kW rated output, 1100V DC max, 3 MPPTs)",
      "Studied PV module string configuration, DC cabling, AC protection, net metering, and earthing",
      "Learned MPPT operation, grid synchronization, anti-islanding protection, testing & commissioning"
    ],
    detailedDescription: "Direct site observation of a 30 kW commercial rooftop grid-tied solar power plant. Discussed inverter parameters, string sizing, earthing grids, and bidirectional net metering protocols with installation engineers."
  },
  {
    id: "nsic",
    company: "NSIC Technical Services Centre (Govt. of India)",
    role: "Embedded Systems & PCB Design Intern",
    period: "July 2025",
    duration: "15 Days",
    type: "embedded",
    icon: "Cpu",
    keyHighlights: [
      "Converted schematic circuit designs into physical multi-layer PCB layouts",
      "Component placement, track routing, clearance rules, grounding planes & power lines",
      "Proteus circuit simulation prior to hardware implementation with Arduino microcontrollers",
      "Hands-on hardware troubleshooting, component testing, and design rule checking (DRC)"
    ],
    detailedDescription: "Learned end-to-end electronic hardware design principles, from Proteus simulation to PCB track layout, noise suppression, grounding practices, and physical soldering."
  },
  {
    id: "fibercat",
    company: "Fibercat Technology Private Limited",
    role: "Software Development Intern",
    period: "January 2024",
    duration: "15 Days",
    type: "software",
    icon: "Code",
    keyHighlights: [
      "Worked on Oracle APEX application development and client custom software modules",
      "Modified web UI pages, button actions, component alignments, and report views",
      "Wrote SQL queries for database retrieval, data filtering, and dynamic reporting",
      "Participated in daily peer code reviews, software testing, and debugging workflows"
    ],
    detailedDescription: "Gained valuable exposure to agile client-focused software engineering, database interactions, dynamic reporting, and structured code review cycles."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "POWER SYSTEMS & HIGH VOLTAGE",
    code: "PS-HV",
    color: "red",
    skills: [
      { name: "Power Systems Modeling", level: "ETAP Applied", tooltip: "Single-line diagram modeling, bus voltage profiling, and power flow evaluation." },
      { name: "Electrical Distribution", level: "Industrial Exposure", tooltip: "110 kV, 11 kV & 415 V distribution networks, busbars, and PCC/MCC panels." },
      { name: "Protection & Relays", level: "Practical Exposure", tooltip: "VCB, ACB, MCCB circuit breakers, overcurrent relays, and protective coordination." },
      { name: "Transformers & Switchgear", level: "Industrial Exposure", tooltip: "11/0.415 kV power transformers, tap changers, switchgear maintenance." },
      { name: "Load Flow Analysis", level: "ETAP Certified", tooltip: "Newton-Raphson & Gauss-Seidel load flow calculations in ETAP." },
      { name: "Short Circuit Studies", level: "ETAP Applied", tooltip: "Calculating 3-phase & line-to-ground fault levels for breaker sizing." },
      { name: "Single Line Diagrams (SLD)", level: "AutoCAD & ETAP", tooltip: "Drafting and interpreting single-line electrical schematics." }
    ]
  },
  {
    title: "RENEWABLE ENERGY & SOLAR",
    code: "RE-SOLAR",
    color: "green",
    skills: [
      { name: "Solar PV Systems", level: "30 kW Site Intern", tooltip: "On-grid solar installation, array layout, string cabling, and mounting." },
      { name: "Inverters & MPPT", level: "Sungrow SG33CX-P2", tooltip: "Maximum Power Point Tracking, 1100V DC input, multi-MPPT stringing." },
      { name: "Grid Synchronization", level: "Practical Knowledge", tooltip: "Anti-islanding protection, frequency matching, 50 Hz AC synchronization." },
      { name: "Net Metering & Earthing", level: "Site Exposure", tooltip: "Bidirectional energy metering, earthing grid layout, and surge protection." }
    ]
  },
  {
    title: "ENGINEERING SOFTWARE & SIMULATION",
    code: "SW-SIM",
    color: "blue",
    skills: [
      { name: "ETAP", level: "Certified", tooltip: "Electrical Transient Analyzer Program for SLD, load flow, fault, and arc flash." },
      { name: "AutoCAD Electrical", level: "Certified", tooltip: "Schematic generation, wire numbering, panel layouts, and symbol libraries." },
      { name: "MATLAB / Simulink", level: "Academic Applied", tooltip: "Power electronics simulation, mathematical system modeling, and control loops." },
      { name: "Figma", level: "Project Applied", tooltip: "UI/UX wireframing for Vasavi CRM and SpaceCraft AI platforms." },
      { name: "GitHub & Version Control", level: "Project Applied", tooltip: "Repository management, code commits, and collaborative development." }
    ]
  },
  {
    title: "HARDWARE, IOT & SOFTWARE",
    code: "HW-IOT",
    color: "amber",
    skills: [
      { name: "ESP32 & Microcontrollers", level: "Project Applied", tooltip: "Hardware interfacing, sensor integration, GPIO programming, and power management." },
      { name: "IoT Protocols (MQTT/HTTPS)", level: "EcoBin Applied", tooltip: "Telemetry streaming, MQTT broker communication, RESTful APIs." },
      { name: "Supabase & PostgreSQL", level: "Vasavi CRM", tooltip: "Database schema design, SQL queries, Row Level Security (RLS) policies." },
      { name: "AI Vision (YOLOv8 & OAK-D)", level: "EcoBin Applied", tooltip: "Object classification for automated waste sorting at point of disposal." },
      { name: "Flutter & Mobile Apps", level: "EcoBin Applied", tooltip: "Cross-platform mobile dashboard creation for live sensor monitoring." }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    number: "01",
    title: "1st Prize - Sairam SDG Innovathon 4.0",
    organization: "Sri Sai Ram Institute of Technology",
    details: "Awarded First Place for EcoBin - Automated Waste Segregation, Disposal and Sanitization IoT system aligned with UN SDG 15 (Life on Land).",
    badge: "WINNER 🥇",
    type: "award"
  },
  {
    id: "ach-2",
    number: "02",
    title: "IEEE ICGCCT 2026 Research Publication",
    organization: "IEEE International Conference",
    details: "Published peer-reviewed research paper on IoT-based Automated Waste Segregation and Real-time Telemetry Systems.",
    badge: "IEEE PAPER 📄",
    type: "publication"
  },
  {
    id: "ach-3",
    number: "03",
    title: "EcoBin Patent / IPR Work",
    organization: "IPR India / Patent Office",
    details: "Completed Intellectual Property Rights (IPR) documentation and patent filing for automated physical waste segregation hardware mechanism.",
    badge: "PATENT FILED 📜",
    type: "ipr"
  },
  {
    id: "ach-4",
    number: "04",
    title: "Finalist - EDII Tamil Nadu IVP",
    organization: "Entrepreneurship Development & Innovation Institute",
    details: "Shortlisted finalist for Innovation Voucher Program (IVP) voucher worth ₹3 Lakh for prototype commercialization.",
    badge: "₹3 LAKH VOUCHER 🚀",
    type: "award"
  },
  {
    id: "ach-5",
    number: "05",
    title: "6th Position - Pitch Circuit (CIIC)",
    organization: "Crescent Innovation & Incubation Centre",
    details: "Ranked 6th among regional startups competing for ₹10 Lakh seed funding allocation.",
    badge: "TOP 6 FINALIST 💡",
    type: "competition"
  },
  {
    id: "ach-6",
    number: "06",
    title: "IEEE Xtreme 18.0 & 19.0 Competitor",
    organization: "IEEE Global Hackathon",
    details: "Participated in consecutive 24-hour global competitive programming marathons solving complex algorithm problems.",
    badge: "24-HR GLOBAL 💻",
    type: "competition"
  }
];

export const HOW_I_THINK_STEPS = [
  {
    step: "01",
    title: "PROBLEM",
    subtitle: "Identify Real World Needs",
    description: "Whether it's manual waste sorting in smart cities, high energy losses in an industrial plant, or manual paper registers in a business, I begin by defining the core operational constraint.",
    example: "EcoBin: Manual waste segregation failure & improper bin overflow monitoring."
  },
  {
    step: "02",
    title: "UNDERSTAND",
    subtitle: "Domain Deep-Dive",
    description: "Perform field research, study Single-Line Diagrams, interview plant engineers or business owners, and analyze physical limits.",
    example: "Kothari Sugars: Studying 110kV/11kV steam turbine cogeneration power balance."
  },
  {
    step: "03",
    title: "ANALYZE",
    subtitle: "Calculations & ETAP Studies",
    description: "Run mathematical models, ETAP load-flow/fault simulations, or sensor calibration testing to predict behavior under all operating conditions.",
    example: "ETAP: Evaluating 11kV bus fault current and transformer loading % under peak load."
  },
  {
    step: "04",
    title: "DESIGN",
    subtitle: "Schematics & Architecture",
    description: "Draft electrical schematics in AutoCAD Electrical, design PCB layouts in Proteus, or prototype Supabase database schemas and Figma UI wireframes.",
    example: "Vasavi CRM: Designing PostgreSQL tables with Row Level Security (RLS)."
  },
  {
    step: "05",
    title: "BUILD",
    subtitle: "Hardware & Code Integration",
    description: "Assemble microcontrollers (ESP32, Raspberry Pi), connect sensors, build web/mobile dashboards, or program protective switchgear loops.",
    example: "EcoBin: Interfacing Luxonis OAK-D Lite AI camera with YOLOv8 & Raspberry Pi."
  },
  {
    step: "06",
    title: "TEST",
    subtitle: "Simulation vs Reality Verification",
    description: "Test under extreme fault conditions, verify anti-islanding inverter response, debug database date serialization, and calibrate sensor precision.",
    example: "Aswin Solar: Verifying 33 kW Sungrow inverter grid synchronization & MPPT range."
  },
  {
    step: "07",
    title: "IMPROVE",
    subtitle: "Iterate & Optimize",
    description: "Refine algorithms, optimize waste collection routes, improve user rewards, and document results for research publication or patent submission.",
    example: "IEEE Publication & Patent Filing: Documenting EcoBin for Clean & Green Tech."
  }
];
