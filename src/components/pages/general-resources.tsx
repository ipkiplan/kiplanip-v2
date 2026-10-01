"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { IP_RIGHTS } from "@/data/ip-rights";
import { TREATIES } from "@/data/treaties";
import { CLASSIFICATIONS } from "@/data/classifications";
import { SOURCES } from "@/data/sources";
import { ORGANIZATIONS, OFFICES } from "@/data/organizations";
import { PUBLICATIONS } from "@/data/publications";
import { COUNTRIES } from "@/data/countries";
import { EntityCard } from "@/components/cards/entity-card";
import { ArrowRight } from "lucide-react";

export function IPBasics() {
  const basics = [
    { title: "What is Intellectual Property?", body: "Intellectual property (IP) refers to creations of the mind — inventions, literary and artistic works, designs, symbols, names and images used in commerce. IP is protected in law through patents, copyright, trademarks, industrial designs and related rights.", href: "/about/kiplan-ip" },
    { title: "The eight categories of IP rights", body: "KIPLAN IP organises IP rights into eight categories — trademarks, patents, industrial designs, copyright, trade secrets, geographical indications, domain/online IP, and IP portfolio strategy.", href: "/ip-rights" },
    { title: "How does international IP work?", body: "International IP is built on a network of treaties (Paris, Berne, PCT, TRIPS), classification systems (Nice, Vienna, Locarno, IPC, CPC) and international filing routes (PCT, Madrid, Hague).", href: "/resources/professional/international-ip" },
    { title: "Who administers IP internationally?", body: "WIPO (Geneva) administers most IP treaties and the international classification systems. WTO (Geneva) administers TRIPS. EPO and USPTO are major regional/national patent offices.", href: "/resources/professional/organizations" },
    { title: "What is the difference between a treaty and a filing system?", body: "A treaty (e.g. PCT) is an international legal instrument. An international filing system (e.g. the PCT international filing procedure) is the procedural route built on a treaty for filing across multiple jurisdictions.", href: "/resources/professional/filing-systems" },
    { title: "How are IP rights classified?", body: "Different classification systems apply to different IP rights: Nice (trademark goods/services), Vienna (figurative marks), Locarno (industrial designs), IPC and CPC (patents).", href: "/resources/professional/classifications" },
  ];
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "General", href: "/resources/general" }, { label: "IP Basics" }]} />
        <SectionHeader eyebrow="General Resources" title="IP Basics" subtitle="Foundational concepts of intellectual property, presented without invented statutory references." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {basics.map((b) => (
            <Link key={b.title} to={b.href} className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 hover:border-[var(--color-accent)]/40 transition-colors">
              <h3 className="font-display text-lg font-medium text-foreground">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.body}</p>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">Read more <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function FAQs() {
  const faqs = [
    { q: "Is the information on KIPLAN IP legal advice?", a: "No. The information provided is general in nature and intended for informational and research purposes. It does not constitute legal advice. Specific matters may require professional legal advice from a qualified practitioner." },
    { q: "Why are some Nepal-specific facts marked 'Verification required'?", a: "KIPLAN IP does not publish unverified status claims. Where a fact — such as Nepal's participation in a treaty or the name of the Nepal IP Office — cannot be corroborated by authoritative sources, we mark it 'Verification required' rather than guessing." },
    { q: "What is the difference between Tier 1, Tier 2 and Tier 3 sources?", a: "Tier 1 sources are official/primary (governments, IP offices, WIPO, WTO, treaties, legislation). Tier 2 sources are recognised institutional/academic. Tier 3 sources are professional/secondary commentary. Each research record preserves its source tier." },
    { q: "What are the five levels of legal information?", a: "Level 1 is the original legal/authoritative text. Level 2 is official explanation. Level 3 is institutional/academic material. Level 4 is professional commentary. Level 5 is KIPLAN/AI interpretation. Level 5 is never presented as Level 1." },
    { q: "Is AI-assisted content authoritative?", a: "No. AI-assisted content is Level 5 — KIPLAN/AI Interpretation. It helps you find and understand evidence; it does not become the evidence. AI cannot verify specific legal citations, dates or treaty provisions." },
    { q: "Why are draft and working papers labelled?", a: "Draft and working papers are visibly labelled DRAFT or WORKING PAPER with version and review status. They are never presented as peer-reviewed or as carrying institutional endorsement." },
    { q: "Does KIPLAN IP have offices outside Nepal?", a: "No. KIPLAN IP is the Intellectual Property division of KIPLAN Law Firm in Kathmandu, Nepal. The 'International' scope of the platform refers to the international IP system (treaties, organisations, classifications, filing systems) — not to KIPLAN having offices elsewhere." },
    { q: "How can I verify a Nepal-specific fact myself?", a: "Consult the WIPO treaties database (wipo.int/treaties), the WTO member list (wto.org), and the Government of Nepal's authoritative channels. KIPLAN IP provides these pointers rather than inventing specific details." },
  ];
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "General", href: "/resources/general" }, { label: "FAQs" }]} />
        <SectionHeader eyebrow="General Resources" title="Frequently Asked Questions" subtitle="Honest answers about how KIPLAN IP works and what it does — and does not — claim." />
        <div className="mt-12 divide-y divide-border/60 rounded-lg border border-border bg-card/40">
          {faqs.map((f, i) => (
            <details key={i} className="group px-5 py-4 [&_summary]:list-none">
              <summary className="flex cursor-pointer items-center justify-between gap-3">
                <span className="font-display text-base font-medium text-foreground">{f.q}</span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function Guides() {
  const guides = [
    { title: "Identify Your IP", body: "An interactive pathway to find the IP right that applies to you — including a 'Not sure' option.", href: "/resources/general/identify-your-ip" },
    { title: "Browse IP Rights", body: "Each IP right has its own structured page — overview, protection, registration, classification, Nepal context, treaties, sources.", href: "/ip-rights" },
    { title: "Explore Treaties", body: "A treaty explorer with detail pages for Paris, Berne, PCT, TRIPS, Madrid, Hague and others.", href: "/resources/professional/treaties" },
    { title: "Explore Classifications", body: "Five classification systems with responsible organisations, structures and update cadences.", href: "/resources/professional/classifications" },
    { title: "Research Centre", body: "Unified search across all entity types — IP rights, treaties, classifications, countries, publications, sources.", href: "/resources/professional/research" },
    { title: "AI Research Interface", body: "Source-first AI research — Question, Answer, Sources, Documents, Related Rights, Jurisdiction, Qualification.", href: "/research/ai" },
  ];
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "General", href: "/resources/general" }, { label: "Guides" }]} />
        <SectionHeader eyebrow="General Resources" title="Guides & Explainers" subtitle="Curated entry points into the KIPLAN IP platform." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Link key={g.title} to={g.href} className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 hover:border-[var(--color-accent)]/40 transition-colors">
              <h3 className="font-display text-lg font-medium text-foreground">{g.title}</h3>
              <p className="text-sm text-muted-foreground">{g.body}</p>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">Open <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function ResearchCentre() {
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional", href: "/resources/professional" }, { label: "Research Centre" }]} />
        <SectionHeader eyebrow="Professional Resources" title="Research Centre" subtitle="Unified search across all entity types: IP rights, treaties, classifications, countries, organisations, offices, publications, sources, glossary terms." />

        <div className="mt-12">
          <p className="text-sm text-muted-foreground">
            The Research Centre is the unified entry point to the KIPLAN IP knowledge architecture. Browse the major entity collections below, or open the AI Research interface for source-first AI-assisted search.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <EntityCard title="IP Rights" eyebrow={`${IP_RIGHTS.length} categories`} href="/ip-rights" description="The eight IP right categories with full structured modules." />
          <EntityCard title="Treaties" eyebrow={`${TREATIES.length} instruments`} href="/resources/professional/treaties" description="Paris, Berne, PCT, TRIPS, Madrid, Hague, Budapest, Rome, WCT, WPPT." />
          <EntityCard title="Classifications" eyebrow={`${CLASSIFICATIONS.length} systems`} href="/resources/professional/classifications" description="Nice, Vienna, Locarno, IPC, CPC." />
          <EntityCard title="Countries" eyebrow={`${COUNTRIES.length} records`} href="/resources/professional/countries" description="Nepal + selected major jurisdictions." />
          <EntityCard title="Organizations" eyebrow={`${ORGANIZATIONS.length} records`} href="/resources/professional/organizations" description="WIPO, WTO, EPO, USPTO." />
          <EntityCard title="IP Offices" eyebrow={`${OFFICES.length} records`} href="/resources/professional/offices" description="Offices directory." />
          <EntityCard title="Publications" eyebrow={`${PUBLICATIONS.length} records`} href="/publications" description="Research papers, draft papers, working papers, research notes, articles, updates." />
          <EntityCard title="Sources" eyebrow="3 tiers" href="/resources/professional/sources" description="Tier 1 official, Tier 2 institutional, Tier 3 professional." />
          <EntityCard title="AI Research Interface" eyebrow="source-first" href="/research/ai" description="Question, Answer, Sources, Documents, Related, Jurisdiction, Qualification." />
        </div>

        <div className="mt-12 rounded-lg border border-border bg-card/40 p-6">
          <h3 className="font-display text-lg font-medium text-foreground">Entity Counts</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {[
              { label: "IP Rights", count: IP_RIGHTS.length },
              { label: "Treaties", count: TREATIES.length },
              { label: "Classifications", count: CLASSIFICATIONS.length },
              { label: "Source Records", count: SOURCES.length },
              { label: "Organizations", count: ORGANIZATIONS.length },
              { label: "Publications", count: PUBLICATIONS.length },
            ].map((s, i) => (
              <div key={i} className="rounded-lg border border-border bg-background/60 p-4 text-center">
                <div className="font-display text-2xl font-medium text-[var(--color-accent)]">{s.count}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground italic">
            Illustrative — counts reflect currently published records and will grow as additional verified records are added.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Counts represent records currently published in the KIPLAN IP research dataset. A source record does not necessarily represent a separate independent institution or publication.
          </p>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

// (helper removed — page is fully static)
