export type JourneyPhase = "promise" | "grind" | "breakthrough" | "rise";

export type JourneyDay = {
  day: number;
  phase: JourneyPhase;
  phaseLabel: string;
  title: string;
  caption: string;
  postIdea: string;
  /** Add matching file under public/journey/ (jpg, jpeg, png, or webp). */
  imageBase: string;
  mood: "hope" | "doubt" | "focus" | "win" | "grateful";
};

const phaseLabels: Record<JourneyPhase, string> = {
  promise: "Week 1 — The Promise",
  grind: "Week 2 — The Grind",
  breakthrough: "Week 3 — The Breakthrough",
  rise: "Week 4 — The Rise",
};

function dayImageBase(n: number): string {
  return `/journey/day-${String(n).padStart(2, "0")}`;
}

export const journeyIntro = {
  headline: "30 days of showing up",
  subline:
    "A raw, public journey—from quiet doubt to banking-grade backends, SSO platforms, and the confidence to own hard problems.",
  cta: "Swipe through each day. Drop your photos in public/journey/ as day-01.jpg … day-30.jpg.",
};

export const journeyDays: JourneyDay[] = [
  {
    day: 1,
    phase: "promise",
    phaseLabel: phaseLabels.promise,
    title: "Day 1 — I said yes to myself",
    caption:
      "I hit publish on a promise: 30 days of honesty about becoming the Java developer I knew I could be. My hands were shaking; my heart was sure.",
    postIdea: "Carousel slide 1: your workspace + caption “Starting today.”",
    imageBase: dayImageBase(1),
    mood: "hope",
  },
  {
    day: 2,
    phase: "promise",
    phaseLabel: phaseLabels.promise,
    title: "Day 2 — Imposter syndrome visited",
    caption:
      "Everyone else looked ahead of me. I wrote down three things I already knew—Spring basics, SQL, showing up—and breathed.",
    postIdea: "Notebook photo + “Not starting from zero.”",
    imageBase: dayImageBase(2),
    mood: "doubt",
  },
  {
    day: 3,
    phase: "promise",
    phaseLabel: phaseLabels.promise,
    title: "Day 3 — First post, first fear",
    caption:
      "Sharing in public felt louder than any compiler error. I posted anyway. Courage is a muscle; today I trained it.",
    postIdea: "Screenshot of your first LinkedIn post.",
    imageBase: dayImageBase(3),
    mood: "hope",
  },
  {
    day: 4,
    phase: "promise",
    phaseLabel: phaseLabels.promise,
    title: "Day 4 — Remembering Texed",
    caption:
      "Flashed back to my first enterprise code—construction CMS, budgets, inventory. Messy domain, real users. That’s where I learned software matters.",
    postIdea: "Throwback to early project / college era.",
    imageBase: dayImageBase(4),
    mood: "grateful",
  },
  {
    day: 5,
    phase: "promise",
    phaseLabel: phaseLabels.promise,
    title: "Day 5 — Community replied",
    caption:
      "One thoughtful comment turned my doubt into fuel. I wasn’t alone—other women in tech had walked this path before me.",
    postIdea: "Screenshot of supportive comments (blur names).",
    imageBase: dayImageBase(5),
    mood: "hope",
  },
  {
    day: 6,
    phase: "promise",
    phaseLabel: phaseLabels.promise,
    title: "Day 6 — Routine beats motivation",
    caption:
      "Motivation dipped; discipline didn’t. One hour of Spring docs, one small commit, one line in the journal.",
    postIdea: "Calendar or habit tracker snapshot.",
    imageBase: dayImageBase(6),
    mood: "focus",
  },
  {
    day: 7,
    phase: "promise",
    phaseLabel: phaseLabels.promise,
    title: "Day 7 — One week down",
    caption:
      "Seven days of visibility. I’m still here. That alone is a win I didn’t give myself credit for before.",
    postIdea: "Celebration selfie or coffee reward.",
    imageBase: dayImageBase(7),
    mood: "win",
  },
  {
    day: 8,
    phase: "grind",
    phaseLabel: phaseLabels.grind,
    title: "Day 8 — Deep work on APIs",
    caption:
      "REST isn’t just endpoints—it’s contracts, errors, and empathy for the next developer. I refactored one messy controller and slept proud.",
    postIdea: "IDE screenshot — hide sensitive code.",
    imageBase: dayImageBase(8),
    mood: "focus",
  },
  {
    day: 9,
    phase: "grind",
    phaseLabel: phaseLabels.grind,
    title: "Day 9 — Bug that humbled me",
    caption:
      "A null pointer in production’s shadow taught me logging and tests aren’t optional. I fixed it, documented it, shared the lesson.",
    postIdea: "Before/after fix or stack trace (redacted).",
    imageBase: dayImageBase(9),
    mood: "doubt",
  },
  {
    day: 10,
    phase: "grind",
    phaseLabel: phaseLabels.grind,
    title: "Day 10 — Oneable memories",
    caption:
      "Remembered integrating Jira, Git, and Teams—data from everywhere, one story for managers. Integrations are patience plus precision.",
    postIdea: "Diagram of integration flow you drew.",
    imageBase: dayImageBase(10),
    mood: "focus",
  },
  {
    day: 11,
    phase: "grind",
    phaseLabel: phaseLabels.grind,
    title: "Day 11 — Code review sting",
    caption:
      "Feedback stung, then sharpened me. Senior devs weren’t attacking me—they were investing in the engineer I’m becoming.",
    postIdea: "Quote card: “Feedback is a gift.”",
    imageBase: dayImageBase(11),
    mood: "doubt",
  },
  {
    day: 12,
    phase: "grind",
    phaseLabel: phaseLabels.grind,
    title: "Day 12 — Redis & sessions",
    caption:
      "Sessions at scale clicked today—Redis isn’t magic, it’s clarity about state. I sketched token flow until it felt obvious.",
    postIdea: "Whiteboard photo of session architecture.",
    imageBase: dayImageBase(12),
    mood: "focus",
  },
  {
    day: 13,
    phase: "grind",
    phaseLabel: phaseLabels.grind,
    title: "Day 13 — Almost quit posting",
    caption:
      "Exhausted after a long sprint at work. I almost skipped today. I posted a single line: “Still showing up.” That was enough.",
    postIdea: "Minimal text-only graphic — authenticity wins.",
    imageBase: dayImageBase(13),
    mood: "doubt",
  },
  {
    day: 14,
    phase: "grind",
    phaseLabel: phaseLabels.grind,
    title: "Day 14 — Halfway mirror",
    caption:
      "Fifteen days to go. I’m not the same person who started—more vocal, more precise, more willing to be seen while still learning.",
    postIdea: "Split image: Day 1 vs Day 14 you.",
    imageBase: dayImageBase(14),
    mood: "hope",
  },
  {
    day: 15,
    phase: "breakthrough",
    phaseLabel: phaseLabels.breakthrough,
    title: "Day 15 — SSO clicked",
    caption:
      "SAML and OAuth2 used to intimidate me. Today I explained SSO to a teammate without notes. Understanding is my favorite feeling.",
    postIdea: "Simple SAML/OAuth explainer graphic.",
    imageBase: dayImageBase(15),
    mood: "win",
  },
  {
    day: 16,
    phase: "breakthrough",
    phaseLabel: phaseLabels.breakthrough,
    title: "Day 16 — LDAP directory day",
    caption:
      "Enterprise identity is a puzzle of trust. LDAP integration finally felt like building bridges, not fighting fires.",
    postIdea: "Team whiteboard or architecture snippet.",
    imageBase: dayImageBase(16),
    mood: "focus",
  },
  {
    day: 17,
    phase: "breakthrough",
    phaseLabel: phaseLabels.breakthrough,
    title: "Day 17 — Security is care",
    caption:
      "RBAC and MFA aren’t buzzwords—they’re promises to users whose money and data we protect. I build like someone’s life depends on it.",
    postIdea: "Quote about building secure banking software.",
    imageBase: dayImageBase(17),
    mood: "hope",
  },
  {
    day: 18,
    phase: "breakthrough",
    phaseLabel: phaseLabels.breakthrough,
    title: "Day 18 — CBS module shipped",
    caption:
      "Another CBS enhancement live—accounts, transactions, compliance. Small release, big responsibility. I celebrated quietly then got back to work.",
    postIdea: "Release notes or “shipped” badge (no client secrets).",
    imageBase: dayImageBase(18),
    mood: "win",
  },
  {
    day: 19,
    phase: "breakthrough",
    phaseLabel: phaseLabels.breakthrough,
    title: "Day 19 — Mentor moment",
    caption:
      "A junior asked how I stay calm in incidents. I told the truth: prepare, communicate, learn. Giving back felt as good as shipping.",
    postIdea: "Photo with team (with permission) or mentorship quote.",
    imageBase: dayImageBase(19),
    mood: "grateful",
  },
  {
    day: 20,
    phase: "breakthrough",
    phaseLabel: phaseLabels.breakthrough,
    title: "Day 20 — Veefin chapter",
    caption:
      "Banking-grade work at Veefin sharpened every instinct—detail, audit trails, calm under pressure. I belong in this room.",
    postIdea: "Office / laptop — professional but personal.",
    imageBase: dayImageBase(20),
    mood: "win",
  },
  {
    day: 21,
    phase: "breakthrough",
    phaseLabel: phaseLabels.breakthrough,
    title: "Day 21 — Three weeks of voice",
    caption:
      "Twenty-one days of telling my story. People DM me saying they started coding again. That’s success bigger than any title.",
    postIdea: "Collage of engagement or thank-you messages.",
    imageBase: dayImageBase(21),
    mood: "grateful",
  },
  {
    day: 22,
    phase: "rise",
    phaseLabel: phaseLabels.rise,
    title: "Day 22 — Microservices map",
    caption:
      "Drew service boundaries until the system breathed. Microservices aren’t splitting for sport—they’re clarity at scale.",
    postIdea: "Architecture diagram (sanitized).",
    imageBase: dayImageBase(22),
    mood: "focus",
  },
  {
    day: 23,
    phase: "rise",
    phaseLabel: phaseLabels.rise,
    title: "Day 23 — Interview confidence",
    caption:
      "Recruiter call went well because I spoke in stories—Texed, Oneable, SSO, CBS—not buzzwords. My journey is my resume.",
    postIdea: "Professional headshot or LinkedIn refresh.",
    imageBase: dayImageBase(23),
    mood: "win",
  },
  {
    day: 24,
    phase: "rise",
    phaseLabel: phaseLabels.rise,
    title: "Day 24 — Family pride",
    caption:
      "Mom called after seeing my post. She doesn’t read Java, but she reads courage in her daughter. I cried happy tears.",
    postIdea: "Family photo or heartfelt text graphic.",
    imageBase: dayImageBase(24),
    mood: "grateful",
  },
  {
    day: 25,
    phase: "rise",
    phaseLabel: phaseLabels.rise,
    title: "Day 25 — Fail forward post",
    caption:
      "Shared my worst bug and what it taught me. Vulnerability attracted more trust than any perfect highlight reel.",
    postIdea: "“What broke / what I learned” thread.",
    imageBase: dayImageBase(25),
    mood: "hope",
  },
  {
    day: 26,
    phase: "rise",
    phaseLabel: phaseLabels.rise,
    title: "Day 26 — Telugu + English",
    caption:
      "Posted in Telugu for cousins who rooted for me, English for global peers. Both languages, one identity—fully mine.",
    postIdea: "Bilingual quote card.",
    imageBase: dayImageBase(26),
    mood: "grateful",
  },
  {
    day: 27,
    phase: "rise",
    phaseLabel: phaseLabels.rise,
    title: "Day 27 — Portfolio live",
    caption:
      "This site went live—not perfect, but honest. Four years of work, thirty days of story, one developer who refused to hide.",
    postIdea: "Screenshot of this portfolio URL.",
    imageBase: dayImageBase(27),
    mood: "win",
  },
  {
    day: 28,
    phase: "rise",
    phaseLabel: phaseLabels.rise,
    title: "Day 28 — Gratitude list",
    caption:
      "OJAS mentors, Veefin teammates, open-source docs, late-night coffee—none of this journey is solo. I named every blessing.",
    postIdea: "Handwritten thank-you list.",
    imageBase: dayImageBase(28),
    mood: "grateful",
  },
  {
    day: 29,
    phase: "rise",
    phaseLabel: phaseLabels.rise,
    title: "Day 29 — Tomorrow’s goals",
    caption:
      "Thirty days taught me visibility compounds skill. Next: deeper cloud, open-source PRs, lifting other women into backend roles.",
    postIdea: "Roadmap graphic for next 90 days.",
    imageBase: dayImageBase(29),
    mood: "hope",
  },
  {
    day: 30,
    phase: "rise",
    phaseLabel: phaseLabels.rise,
    title: "Day 30 — I made it",
    caption:
      "From nervous Day 1 to this line: I am a Java developer who builds secure systems and tells the truth while learning. The journey continues—prouder, stronger, seen.",
    postIdea: "Victory photo + “30/30” + link to portfolio.",
    imageBase: dayImageBase(30),
    mood: "win",
  },
];

export const journeyPhaseColors: Record<
  JourneyPhase,
  { from: string; to: string; accent: string }
> = {
  promise: { from: "#7c3aed", to: "#c026d3", accent: "violet" },
  grind: { from: "#4f46e5", to: "#7c3aed", accent: "indigo" },
  breakthrough: { from: "#db2777", to: "#7c3aed", accent: "fuchsia" },
  rise: { from: "#059669", to: "#7c3aed", accent: "emerald" },
};

/** Extensions tried in order when loading day images. */
export const journeyImageExtensions = [".jpg", ".jpeg", ".png", ".webp"] as const;
