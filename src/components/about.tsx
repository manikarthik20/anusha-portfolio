import { siteConfig } from "@/lib/site-config";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-slate-200/80 bg-slate-50/50 py-20 dark:border-slate-800 dark:bg-slate-900/30"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400">
          About me
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Secure Java backends for banking and enterprise
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              I&apos;m <strong className="text-slate-900 dark:text-white">{siteConfig.name}</strong>, a{" "}
              {siteConfig.role.toLowerCase()} with{" "}
              <strong className="text-slate-900 dark:text-white">
                {siteConfig.experienceYears} years
              </strong>{" "}
              of experience building and evolving web applications on{" "}
              <strong className="text-slate-900 dark:text-white">Java</strong>,{" "}
              <strong className="text-slate-900 dark:text-white">Spring Boot</strong>, and{" "}
              <strong className="text-slate-900 dark:text-white">microservices-style</strong> backends. I care about clear
              service boundaries, testable code, and working closely with product and platform teams so releases stay
              predictable.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Recent work spans{" "}
              <strong className="text-slate-900 dark:text-white">Core Banking System (CBS)</strong> modules,{" "}
              <strong className="text-slate-900 dark:text-white">authentication and authorization</strong> (RBAC, MFA,
              JWT, OAuth2, SAML, LDAP), and{" "}
              <strong className="text-slate-900 dark:text-white">Redis-backed session</strong> patterns for scale. I also
              enjoy integration-heavy problems—unifying data from tools like Jira, Git, and Microsoft Teams into coherent
              APIs—and keeping compliance and audit expectations in mind from day one.
            </p>
          </div>
          <aside className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-lg shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="font-medium text-slate-500 dark:text-slate-400">Role</dt>
                <dd className="mt-1 font-semibold text-slate-900 dark:text-white">{siteConfig.role}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500 dark:text-slate-400">Focus</dt>
                <dd className="mt-1 font-semibold text-slate-900 dark:text-white">
                  Spring Boot, security, CBS integrations, APIs
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500 dark:text-slate-400">Location</dt>
                <dd className="mt-1 font-semibold text-slate-900 dark:text-white">{siteConfig.location}</dd>
              </div>
              <div>
                <dt className="font-medium text-slate-500 dark:text-slate-400">Languages</dt>
                <dd className="mt-1 font-semibold text-slate-900 dark:text-white">
                  {siteConfig.languages.join(" · ")}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
