export interface Role {
  title: string;
  company: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
}

export interface Tool {
  name: string;
  use: string;
}

export interface ToolCategory {
  id: string;
  label: string;
  badge: string;
  tools: Tool[];
}

export const profile = {
  name: "Rose Mae M. Alipan",
  role: "Medical Virtual Assistant",
  location: "Davao City, Philippines",
  availability: "Aligned to U.S. Business Hours",
  email: "alipanrosemae@gmail.com",
  phone: "+63 976 083 4518",
  linkedin: "https://www.linkedin.com/in/rose-mae-alipan-570a8b372/",
  linkedinLabel: "linkedin.com/in/rose-mae-alipan-570a8b372",
  resume: "/Rose-Mae-Alipan-Resume.pdf",
  bio: "7+ years managing insurance eligibility, prior authorizations, and claims for U.S. healthcare providers.",
} as const;

export const metrics = [
  { value: "7+ Years", label: "Supporting U.S. Practices" },
  { value: "100%", label: "HIPAA Compliant Workflows" },
  { value: "ICD-10 / CPT", label: "Coding & Claims Finalization" },
] as const;

export const toolCategories: ToolCategory[] = [
  {
    id: "healthcare",
    label: "Healthcare Portals",
    badge: "Daily Production Use",
    tools: [
      {
        name: "Availity",
        use: "Daily real-time eligibility and benefits verification across U.S. payers",
      },
      {
        name: "UHC Portal",
        use: "UnitedHealthcare provider lookups, claim status, and prior authorization submissions",
      },
      {
        name: "IMS",
        use: "Patient charting, scheduling, and clinical documentation in the practice system",
      },
    ],
  },
  {
    id: "crm",
    label: "CRM & Support",
    badge: "Hands-On Experience",
    tools: [
      {
        name: "HubSpot",
        use: "Lead records, call logging, and follow-up sequencing through the outbound pipeline",
      },
      {
        name: "Zendesk",
        use: "Ticket triage and resolution tracking across inbound patient and customer queues",
      },
      {
        name: "Slack",
        use: "Day-to-day async coordination with providers and remote operations teams",
      },
    ],
  },
  {
    id: "admin",
    label: "Administrative",
    badge: "Core Workflow",
    tools: [
      {
        name: "Patient Scheduling",
        use: "Booking, confirmation, and rescheduling to keep provider calendars fully utilized",
      },
      {
        name: "Data Analysis",
        use: "Reconciling claim and eligibility data to surface denials and documentation gaps",
      },
      {
        name: "Medical Scribing",
        use: "Documenting exams, clinical history, diagnoses, and physician orders in real time",
      },
      {
        name: "Canva",
        use: "Building patient-facing intake sheets and internal process reference material",
      },
    ],
  },
];

export const roles: Role[] = [
  {
    title: "Sales Development Representative",
    company: "Labsy",
    start: "Jan 2025",
    end: "Present",
    current: true,
    summary: "Outbound lead qualification and CRM management.",
    highlights: [
      "Run outbound calls to prospective customers using a structured discovery talk track",
      "Qualify leads on interest, need, and purchasing potential before handoff",
      "Identify decision-makers and log contact details for structured follow-up",
      "Maintain CRM records for every conversation, follow-up, and outcome",
    ],
  },
  {
    title: "Medical Assistant & Data Analyst",
    company: "Truelife Hospital",
    start: "Sep 2017",
    end: "Jun 2024",
    summary:
      "Seven years managing benefits verification, prior authorizations, ICD-10/CPT coding, and patient scheduling.",
    highlights: [
      "Verified insurance eligibility and benefits and processed prior authorizations for a weekly patient caseload",
      "Documented patient exams, clinical history, diagnoses, and physician orders for compliance",
      "Applied ICD-10 and CPT codes and finalized claims for submission",
      "Handled provider queries and scheduling to keep patient throughput on time",
    ],
  },
  {
    title: "Customer Service Representative",
    company: "iQOR Philippines",
    start: "Mar 2016",
    end: "May 2017",
    summary: "Insurance claims resolution and member benefits routing.",
    highlights: [
      "Processed, reviewed, and resolved customer insurance claims against policy terms",
      "Guided members through enrollment and maintained accurate member records",
      "Provided benefits information and routed complex cases to the correct department",
    ],
  },
  {
    title: "Technical Support & Billing Representative",
    company: "Teleperformance Davao",
    start: "May 2013",
    end: "Jan 2016",
    summary: "Billing, troubleshooting, and dispatch for a U.S. telecommunications provider.",
    highlights: [
      "Supported service activation and technical troubleshooting for U.S. customers",
      "Processed payments, refunds, and replacements; coordinated technician dispatch",
      "Handled cancellations and returns end to end",
    ],
  },
  {
    title: "Administrative Assistant / Cashier",
    company: "RD Pawnshop Inc.",
    start: "Jun 2009",
    end: "Mar 2012",
    summary: "Office administration, records, and reconciliation.",
    highlights: [
      "Managed scheduling, correspondence, and document preparation for office leadership",
      "Maintained filing systems, meeting minutes, and office inventory",
      "Compiled data for fiscal reviews and reconciled expense reports",
    ],
  },
];

export const credentials = [
  { label: "HIPAA Certified", detail: "Saiber" },
  { label: "College Graduate", detail: "University of Southern Philippines" },
] as const;

export const navLinks = [
  { href: "#systems", label: "Systems" },
  { href: "#workflows", label: "Workflows" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;
