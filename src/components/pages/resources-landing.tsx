"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { ArrowRight } from "lucide-react";

const GENERAL = [
  { label: "IP Basics", href: "/resources/general/ip-basics", body: "Foundational concepts of intellectual property." },
  { label: "IP Dictionary", href: "/resources/general/dictionary", body: "Searchable glossary of IP terms." },
  { label: "FAQs", href: "/resources/general/faqs", body: "Frequently asked questions." },
  { label: "Guides", href: "/resources/general/guides", body: "Step-by-step explainers." },
  { label: "Identify Your IP", href: "/resources/general/identify-your-ip", body: "Find the IP right that applies to you." },
  { label: "Useful Resources", href: "/resources/professional/sources", body: "Curated authoritative sources." },
];

const PROFESSIONAL = [
  { label: "Research Centre", href: "/resources/professional/research", body: "Unified search across all entities." },
  { label: "Nepal IP", href: "/resources/professional/nepal-ip", body: "Nepal IP hub." },
  { label: "International IP", href: "/resources/professional/international-ip", body: "International IP architecture." },
  { label: "Laws", href: "/resources/professional/laws", body: "Statutes and regulations." },
  { label: "Treaties", href: "/resources/professional/treaties", body: "Treaty Explorer." },
  { label: "Classifications", href: "/resources/professional/classifications", body: "Classification Explorer." },
  { label: "Countries", href: "/resources/professional/countries", body: "Country Research." },
  { label: "Country Participation", href: "/resources/professional/country-participation", body: "Treaty participation per country." },
  { label: "Organizations", href: "/resources/professional/organizations", body: "WIPO, WTO, EPO, USPTO." },
  { label: "IP Offices", href: "/resources/professional/offices", body: "IP Office directory." },
  { label: "Filing Systems", href: "/resources/professional/filing-systems", body: "PCT, Madrid, Hague." },
  { label: "Source Library", href: "/resources/professional/sources", body: "Tier 1 / 2 / 3 sources." },
  { label: "Document Library", href: "/resources/professional/documents", body: "Authoritative documents." },
];

export function ResourcesLanding() {
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources" }]} />
        <SectionHeader
          eyebrow="Resources"
          title="General & Professional resources"
          subtitle="Resources are organised into two divisions: General (basics, dictionary, FAQs, guides) and Professional (research, treaties, classifications, countries, offices, sources, documents)."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 font-display text-xl font-medium text-foreground">General Resources</h2>
            <div className="grid gap-3">
              {GENERAL.map((g) => (
                <Link
                  key={g.href}
                  to={g.href}
                  className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-4 hover:border-[var(--color-accent)]/40 transition-colors"
                >
                  <div className="min-w-0">
                    <div className="font-display font-medium text-foreground">{g.label}</div>
                    <div className="text-xs text-muted-foreground">{g.body}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-[var(--color-accent)]" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-display text-xl font-medium text-foreground">Professional Resources</h2>
            <div className="grid gap-3">
              {PROFESSIONAL.map((p) => (
                <Link
                  key={p.href}
                  to={p.href}
                  className="group flex items-center justify-between gap-3 rounded-lg border border-border bg-card p-4 hover:border-[var(--color-accent)]/40 transition-colors"
                >
                  <div className="min-w-0">
                    <div className="font-display font-medium text-foreground">{p.label}</div>
                    <div className="text-xs text-muted-foreground">{p.body}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-[var(--color-accent)]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function GeneralResourcesLanding() {
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "General Resources" }]} />
        <SectionHeader eyebrow="General Resources" title="Foundations of IP" subtitle="Accessible explanations of IP concepts for non-specialists." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GENERAL.map((g) => (
            <Link key={g.href} to={g.href} className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 hover:border-[var(--color-accent)]/40 transition-colors">
              <h3 className="font-display text-lg font-medium text-foreground">{g.label}</h3>
              <p className="text-sm text-muted-foreground">{g.body}</p>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">Open <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function ProfessionalResourcesLanding() {
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional Resources" }]} />
        <SectionHeader eyebrow="Professional Resources" title="The full IP research architecture" subtitle="Treaties, classifications, filing systems, countries, offices, laws, sources, documents — the structured infrastructure of professional IP research." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROFESSIONAL.map((p) => (
            <Link key={p.href} to={p.href} className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 hover:border-[var(--color-accent)]/40 transition-colors">
              <h3 className="font-display text-lg font-medium text-foreground">{p.label}</h3>
              <p className="text-sm text-muted-foreground">{p.body}</p>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">Open <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}
