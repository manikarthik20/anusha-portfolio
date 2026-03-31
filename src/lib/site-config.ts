/** Update contact links and optional GitHub as needed. */
export const siteConfig = {
  name: "Anusha Jagari",
  role: "Java Developer",
  resumeHeadlineRole: "Java Developer",
  resumeHeadlineStack: "Java | Spring Boot | Microservices",
  phone: "+91 95057 75302",
  /** Used for tel: links (digits with country code). */
  phoneTel: "+919505775302",
  githubUrl: "",
  tagline:
    "Dynamic, detail-oriented Java developer building secure banking and enterprise backends with Spring Boot, microservices, and strong collaboration across teams.",
  techSubtitle: "Java · Spring Boot · Spring Security · LDAP · Microservices",
  experienceYears: "4.3",
  location: "India",
  languages: ["Telugu", "English"],
  email: "anushajagari@gmail.com",
  linkedin: "https://www.linkedin.com/in/anusha-jagari-b8b09a183/",
  resumeUrl: "/api/resume",
  resumeDownloadFilenameRole: "",
  education: {
    degree: "B.Tech — Electronics and Communication Engineering",
    institution:
      "Nova College of Engineering & Technology, Hyderabad — Affiliated to JNTUH",
    period: "",
  },
  projects: [
    {
      title: "Core Banking & Security (CBS)",
      description:
        "Backend work on Core Banking System modules with a focus on account lifecycle, transaction processing, and compliance-friendly workflows. Partnered on integrating CBS with authentication services so financial operations stay secure end to end.",
      tech: ["Java", "Spring Boot", "CBS", "Security"],
      resumeBullets: [
        "Applied RBAC and MFA patterns for high-security banking-facing applications.",
        "Integrated CBS with authentication services for consistent, auditable access to financial operations.",
        "Extended CBS modules covering accounts, transactions, and compliance-oriented flows.",
      ],
    },
    {
      title: "Enterprise SSO & Session Platform",
      description:
        "Designed and hardened authentication flows for enterprise users: session lifecycle, token validation, and Redis-backed storage for scale. Delivered SAML and OAuth2-based Single Sign-On for internal and external systems, with LDAP directory integration where required.",
      tech: ["Spring Security", "OAuth2", "SAML", "LDAP", "Redis", "JWT"],
      resumeBullets: [
        "Built and maintained authentication, session management, and token validation services.",
        "Implemented Redis-backed session storage for scalable, low-latency session handling.",
        "Integrated SSO using SAML and OAuth2 across enterprise consumers.",
      ],
    },
    {
      title: "Oneable — Integrations & Activity Insights",
      description:
        "Integration layer for a user performance and activity tracking product, pulling structured data from engineering and collaboration tools into a unified view.",
      tech: ["Java", "Spring Boot", "REST APIs", "Jira", "Git", "Microsoft Teams"],
      resumeBullets: [
        "Developed the integration module tracking user activity across applications and web surfaces.",
        "Built APIs sourcing live data from Jira, Git, and Microsoft Teams (issues, tasks, meetings, commits).",
      ],
    },
    {
      title: "Construction Management System",
      description:
        "Contributed to a construction-sector CMS improving budgeting, stakeholder communication, and day-to-day operations—from inventory to equipment and materials planning.",
      tech: ["Java", "Spring", "MySQL"],
      resumeBullets: [
        "Shipped features for budget visibility, communication, and operational decision support.",
        "Extended modules for inventory, materials, and equipment to streamline distribution and tracking.",
      ],
    },
  ],
  jobs: [
    {
      company: "Veefin",
      location: "Mumbai, India",
      role: "Java Developer",
      period: "Feb 2025 – Present",
      bullets: [
        "Implement high-security patterns including RBAC and MFA for banking applications.",
        "Integrate Core Banking System (CBS) with authentication services for secure, seamless financial operations.",
        "Develop and enhance CBS modules: account management, transaction processing, and compliance workflows.",
      ],
    },
    {
      company: "OJAS (client: Veefin)",
      location: "Mumbai, India",
      role: "Java Developer",
      period: "Mar 2024 – Jan 2025",
      bullets: [
        "Built and maintained backend services for user authentication, session management, and token validation.",
        "Introduced Redis-based session storage for efficient, horizontally scalable sessions.",
        "Designed and integrated SSO using SAML and OAuth2 for internal and external enterprise systems.",
      ],
    },
    {
      company: "OJAS (Oneable)",
      location: "Hyderabad, India",
      role: "Java Developer",
      period: "Jan 2023 – Mar 2024",
      bullets: [
        "Delivered the integration module for Oneable, a user performance tracking system across apps and web.",
        "Implemented APIs to ingest real-time data from Jira, Git, and Microsoft Teams (issues, tasks, meetings, commits).",
      ],
    },
    {
      company: "OJAS (client: Texed)",
      location: "Dehradun, India",
      role: "Java Developer",
      period: "Jan 2022 – Dec 2022",
      bullets: [
        "Contributed to a Construction Management System improving budgeting, communication, and project decisions.",
        "Developed features for daily operations, inventory, and materials/equipment management.",
      ],
    },
  ],
} as const;

/** First letters of the first two name parts (e.g. "Anusha Jagari" → "AJ"). */
export function getNameInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

export function getResumeDownloadFilename(): string {
  const nameSlug = siteConfig.name.replace(/\s+/g, "-");
  const custom = siteConfig.resumeDownloadFilenameRole.trim();
  const roleSlug = custom
    ? custom.replace(/\s+/g, "-")
    : siteConfig.role.replace(/\s+/g, "-");
  return `${nameSlug}-${roleSlug}.pdf`;
}
