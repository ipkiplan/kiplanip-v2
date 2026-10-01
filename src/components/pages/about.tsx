"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { VerificationNotice } from "@/components/kiplan/related-content";
import { KiplanImage } from "@/components/kiplan/kiplan-image";
import { useTranslation } from "@/i18n/provider";
import { ArrowRight, ExternalLink, Building2, ChevronRight } from "lucide-react";

export function AboutLanding() {
  const cards = [
    { label: "KIPLAN IP", href: "/about/kiplan-ip", body: "The Intellectual Property division of KIPLAN Law Firm — IP research, knowledge and international systems, Kathmandu-based." },
    { label: "KIPLAN Law Firm", href: "/about/kiplan-law-firm", body: "The Kathmandu-based law firm of which KIPLAN IP is the IP division — the practice context." },
    { label: "Team", href: "/about/team", body: "Role-based team overview — information not currently verified." },
    { label: "Philosophy", href: "/about/philosophy", body: "Practice philosophy — evidence over assertion." },
    { label: "Research Philosophy", href: "/about/research-philosophy", body: "Source-first, primary-source verification, jurisdiction awareness." },
  ];
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "About" }]} />
        <SectionHeader eyebrow="About" title="KIPLAN IP — Intellectual Property, Research & Strategy" subtitle="Protecting ideas. Understanding rights. Connecting Nepal with the world. KIPLAN IP is where intellectual property practice, research, evidence, knowledge and international IP systems meet in Nepal." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link key={c.href} to={c.href} className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 card-hover-lift hover:border-[var(--color-accent)]/40">
              <h3 className="font-display text-lg font-medium text-foreground">{c.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">Open <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function KIPLANIPPage() {
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-4xl">
        <Breadcrumbs items={[{ label: "About", href: "/about" }, { label: "KIPLAN IP" }]} />
        <SectionHeader eyebrow="About" title="KIPLAN IP" subtitle="The Intellectual Property division of KIPLAN Law Firm, Kathmandu, Nepal — a research and advisory platform for intellectual property." />
        <div className="mt-8 prose prose-sm max-w-none text-foreground/90 leading-relaxed">
          <p>KIPLAN IP is the Intellectual Property division of KIPLAN Law Firm, Kathmandu, Nepal. It is where intellectual property practice, research, evidence, knowledge and international IP systems meet in Nepal. The platform provides a structured research architecture across the eight categories of intellectual property, the principal international treaties, classification systems, filing routes, organisations, offices, laws, sources, publications, glossary terms and IP updates.</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">Positioning</h3>
          <p className="mt-2">KIPLAN IP is a research platform — not a marketing site. Where information cannot be verified, it is marked "Verification required" rather than fabricated. AI-assisted content is clearly labelled Level 5 (KIPLAN/AI Interpretation) and is never presented as Level 1 (authoritative text).</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">The Relationship with KIPLAN Law Firm</h3>
          <p className="mt-2">KIPLAN IP is the Intellectual Property division of KIPLAN Law Firm, Kathmandu, Nepal. The firm provides the practice context for IP advisory and consultation matters; the division provides the research architecture. Specific personnel, credentials and contact details require verification.</p>
        </div>
        <div className="mt-8"><VerificationNotice body="Specific KIPLAN IP personnel, credentials, awards, rankings, clients, testimonials, memberships, affiliations and years of experience are not currently verified. KIPLAN IP does not publish unverified credentials." /></div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/about/kiplan-law-firm" className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background">About KIPLAN Law Firm <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/about/research-philosophy" className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-[var(--color-accent)]">Research philosophy <ArrowRight className="h-3.5 w-3.5" /></Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function KIPLANLawFirmPage() {
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-4xl">
        <Breadcrumbs items={[{ label: "About", href: "/about" }, { label: "KIPLAN Law Firm" }]} />
        <SectionHeader eyebrow="About" title="KIPLAN Law Firm" subtitle="Kathmandu, Nepal — the practice context for KIPLAN IP, the firm's Intellectual Property division." />
        <div className="mt-8 prose prose-sm max-w-none text-foreground/90 leading-relaxed">
          <p>KIPLAN Law Firm is a Kathmandu-based law firm. KIPLAN IP is its Intellectual Property division. The firm provides the practice context for IP advisory and consultation matters, including trademark prosecution, patent strategy, design protection, copyright licensing, trade secret management, geographical indications, domain name disputes and multi-right IP portfolio strategy.</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">Relationship with KIPLAN IP</h3>
          <p className="mt-2">KIPLAN IP is the Intellectual Property division of KIPLAN Law Firm. The division provides the research and knowledge architecture; the firm provides professional legal advice on specific matters. Specific personnel, credentials and contact details require verification.</p>
        </div>
        <div className="mt-8"><VerificationNotice body="KIPLAN Law Firm personnel, credentials, awards, rankings, clients, testimonials, memberships, affiliations and years of experience are not currently verified. KIPLAN IP does not publish unverified credentials. Specific contact details (phone, email, address) require verification." /></div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/about/team" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]">View Team <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background">Contact <ArrowRight className="h-4 w-4" /></Link>
          <a
            href="https://kiplanlaw.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors"
          >
            Visit KIPLAN Law Firm <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function TeamPage() {
  const { t } = useTranslation();
  const roles = [
    { role: "IP Practice Lead", body: "Overall responsibility for IP advisory matters — trademarks, patents, designs, copyright, GIs, trade secrets, portfolio strategy." },
    { role: "Research Lead", body: "Responsibility for the KIPLAN IP research architecture — source classification, provenance preservation, publication review." },
    { role: "International IP Specialist", body: "Specialist focus on international treaties, classification systems and filing routes (PCT, Madrid, Hague)." },
    { role: "Nepal IP Specialist", body: "Specialist focus on Nepal-specific IP — office procedures, legislation, treaty participation. All Nepal-specifics require verification." },
    { role: "AI-Assisted Research Editor", body: "Responsibility for the AI research interface — ensuring AI-assisted output is clearly labelled Level 5 and never presented as Level 1." },
    { role: "Knowledge Manager", body: "Responsibility for the knowledge base — glossary, FAQs, guides, IP updates, source directory." },
  ];
  // Authentic KIPLAN professional portraits. Per spec §359, no fabricated credentials
  // are attached — full biographies, bar admissions, education and prior experience
  // remain marked "Verification required" until authoritative corroboration is supplied.
  const practitioners = [
    {
      src: "/image/Adv kamal(1).webp",
      alt: "A male practitioner wearing glasses, a black suit jacket and a white shirt, standing against a dark blue background patterned with the repeating text KIPLAN LAW.",
      name: "Kamal Khadka",
      designation: "Advocate · Notary Public · IP Practitioner",
      license: "Advocate License No. 4039/1993 · Notary Public License No. 170/2007",
      education: "LLM · Tribhuvan University · MA-HRM, UoC Canberra, Aus.",
      memberships: "Member: Nepal Bar Council, Nepal Notary Public Association, MAN",
      source: "https://kamalkhadka.vercel.app",
    },
    {
      src: "/image/Adv-r-sharma.png",
      alt: "Adv. R. Sharma — professional portrait of a male practitioner in formal attire.",
    },
  ];
  // Professional & Administrative Team — named individuals with roles, qualifications, and photographs.
  const professionalAdmin = [
    { name: "Ghanashyam Katuwal", role: "Admin Officer", qualifications: "MPA (TU)", image: "/image/ghanashyam-katuwal.jpeg", imageAlt: "Ghanashyam Katuwal — Admin Officer." },
    { name: "Rima Khadka", role: "Administrative Assistant", qualifications: "BA — PSG (TU)", image: "/image/Rima-khadka.jpg", imageAlt: "Rima Khadka — Administrative Assistant." },
    { name: "Bimala Shahi", role: "Office Assistant", qualifications: "Intermediate (CTEVT)", image: "/image/Bimala-Shahi.jpg", imageAlt: "Bimala Shahi — Office Assistant." },
    { name: "Engr. Add News Jha", role: "Engr. / Web Developer", qualifications: "", image: "/image/Engg-news-jha.png", imageAlt: "Engr. Add News Jha — Engr. / Web Developer." },
  ];
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: t("breadcrumb.about"), href: "/about" }, { label: t("breadcrumb.team") }]} />
        <SectionHeader eyebrow={t("breadcrumb.about")} title={t("team.title")} subtitle={t("team.subtitle")} />
        <div className="mt-8"><VerificationNotice body="Specific team members' names, credentials, bar admissions, education, prior experience and biographies are not currently verified. KIPLAN IP does not publish fabricated personnel profiles. Where verification becomes available, named profiles will be added." /></div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-5">
              <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">Role {String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-1 font-display text-lg font-medium text-foreground">{r.role}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
              <div className="mt-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("common.informationNotVerified")}</div>
            </div>
          ))}
        </div>

        {/* Practitioners — authentic portraits, credentials verification-pending */}
        <section className="mt-12 border-t border-border/60 pt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-display text-xl font-medium text-foreground">{t("common.practitioners")}</h2>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{t("common.credentialsPending")}</span>
          </div>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground leading-relaxed">
            The following KIPLAN Law Firm practitioners are presented by visual identification only.
            Full biographies, bar admissions, education, prior experience and specific roles are not
            currently verified and will be added once authoritative corroboration is supplied.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:max-w-3xl">
            {practitioners.map((p, i) => (
              <div key={i} className="rounded-lg border border-border bg-card overflow-hidden">
                <KiplanImage
                  src={p.src}
                  alt={p.alt}
                  aspect="aspect-[4/5]"
                  wrapperClassName="rounded-none border-0 bg-muted/30"
                  loading="lazy"
                />
                <div className="p-4">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
                    Practitioner {String(i + 1).padStart(2, "0")}
                  </div>
                  {p.name ? (
                    <>
                      <div className="mt-1 font-display text-base font-medium text-foreground">{p.name}</div>
                      <div className="mt-1 text-xs text-foreground/80 leading-relaxed font-medium">{p.designation}</div>
                      <div className="mt-2 space-y-1 text-xs text-muted-foreground leading-relaxed">
                        {p.license && <div>{p.license}</div>}
                        {p.education && <div>{p.education}</div>}
                        {p.memberships && <div>{p.memberships}</div>}
                      </div>
                      {p.source && (
                        <a href={p.source} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">
                          Source <ArrowRight className="h-3 w-3" />
                        </a>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="mt-1 font-display text-base font-medium text-foreground">Name — verification pending</div>
                      <div className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        Role, bar admission, education and prior experience are not currently verified.
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional & Administrative Team */}
        <section className="mt-12 border-t border-border/60 pt-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-display text-xl font-medium text-foreground">{t("common.profAdminTeam")}</h2>
          </div>
          <p className="mt-2 max-w-3xl text-sm text-muted-foreground leading-relaxed">
            {t("common.profAdminDesc")}
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {professionalAdmin.map((m, i) => (
              <div key={i} className="rounded-lg border border-border bg-card overflow-hidden">
                {m.image && (
                  <KiplanImage
                    src={m.image}
                    alt={m.imageAlt || m.name}
                    aspect="aspect-[4/5]"
                    wrapperClassName="rounded-none border-0 bg-muted/30"
                    loading="lazy"
                  />
                )}
                <div className="p-4">
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-1.5 font-display text-base font-medium text-foreground leading-tight">{m.name}</h3>
                  <div className="mt-1 text-sm text-foreground/90 font-medium">{m.role}</div>
                  {m.qualifications && (
                    <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{m.qualifications}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </SectionShell>
    </MotionSection>
  );
}

export function PhilosophyPage() {
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-4xl">
        <Breadcrumbs items={[{ label: "About", href: "/about" }, { label: "Philosophy" }]} />
        <SectionHeader eyebrow="About" title="Practice Philosophy" subtitle="Evidence over assertion. Source-first research. Honest about what we know and what we do not." />
        <div className="mt-8 prose prose-sm max-w-none text-foreground/90 leading-relaxed">
          <p>KIPLAN IP's practice philosophy is built on a single principle: evidence over assertion. The platform presents what is verifiable, marks what is not, and refuses to fabricate.</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">Source-First</h3>
          <p className="mt-2">Every research record preserves its source. Tier 1 official sources are presented as such; Tier 2 institutional and Tier 3 professional sources are clearly distinguished. KIPLAN/AI Interpretation (Level 5) is never presented as authoritative legal text (Level 1).</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">Honesty About Uncertainty</h3>
          <p className="mt-2">Where a fact cannot be verified, KIPLAN IP says so. Nepal's treaty participation, the Nepal IP Office's official name, and Nepal IP legislation details are all marked "Verification required" — not guessed.</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">AI ≠ Legal Advice</h3>
          <p className="mt-2">AI-assisted content helps you find and understand evidence; it does not become the evidence. Specific matters may require professional legal advice from a qualified practitioner.</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">Jurisdiction Awareness</h3>
          <p className="mt-2">IP is territorial. The platform preserves jurisdiction context for every record, and never extrapolates one jurisdiction's rules to another.</p>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function ResearchPhilosophyPage() {
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-4xl">
        <Breadcrumbs items={[{ label: "About", href: "/about" }, { label: "Research Philosophy" }]} />
        <SectionHeader eyebrow="About" title="Research Philosophy" subtitle="Source-first, primary-source verification, jurisdiction awareness, transparency about uncertainty." />
        <div className="mt-8 prose prose-sm max-w-none text-foreground/90 leading-relaxed">
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">1. Source-First Architecture</h3>
          <p className="mt-2">Three source tiers (Tier 1 official, Tier 2 institutional, Tier 3 professional). Five legal information levels (1 authoritative text, 2 official explanation, 3 institutional/academic, 4 professional commentary, 5 KIPLAN/AI Interpretation). Each research record carries provenance metadata.</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">2. Primary-Source Verification</h3>
          <p className="mt-2">Nepal-specific facts (treaty participation, IP office details, legislation provisions) are verified against authoritative sources (WIPO treaties database, WTO member list, Government of Nepal). Where verification is not yet available, the field is marked "Verification required".</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">3. Jurisdiction Awareness</h3>
          <p className="mt-2">Every record preserves its jurisdiction context. National rules are not extrapolated across jurisdictions. International IP is presented as a network of treaties, classification systems and filing routes — not as a single uniform regime.</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">4. Transparency About Uncertainty</h3>
          <p className="mt-2">Draft and working papers are visibly labelled DRAFT or WORKING PAPER with version and review status — never implying peer review or institutional endorsement. AI-assisted output states its limitations clearly: "could not be verified", "source unavailable", "verification necessary", "multiple interpretations", "insufficient evidence".</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">5. AI ≠ Evidence</h3>
          <p className="mt-2">AI helps you find and understand evidence. It does not become the evidence. The AI research interface surfaces sources more prominently than the AI answer itself, and states that AI output ≠ legal advice.</p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">6. No Fabrication</h3>
          <p className="mt-2">KIPLAN IP does not invent URLs, document titles, treaty provisions, article numbers, legal sections, dates, country participation, citations, statistics, case studies, attorney names or credentials. When in doubt, the field is omitted or marked "Verification required".</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/resources/professional/sources" className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background">Source Library <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/research/ai" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)]">AI Research Interface <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

/* ============================================================
 *  KIPLAN Family — shared hierarchy panel
 *  Used on the KIPLAN Notary and KIPLAN Scholar pages to show
 *  the institutional structure consistently. Highlights the
 *  current page's position within the wider KIPLAN ecosystem.
 * ============================================================ */
function KiplanFamilyHierarchy({ current }: { current: "kiplan-notary" | "kiplan-scholar" }) {
  const rows: { label: string; role: string; href?: string; isCurrent?: boolean }[] = [
    { label: "KIPLAN Law Firm", role: "Parent Organisation", href: "/about/kiplan-law-firm" },
    { label: "KIPLAN IP", role: "Intellectual Property Division", href: "/about/kiplan-ip" },
    { label: "KIPLAN Notary", role: "Notary Division", href: current === "kiplan-notary" ? undefined : "/about/kiplan-notary", isCurrent: current === "kiplan-notary" },
    { label: "KIPLAN Scholar", role: "Education & Research Platform", href: current === "kiplan-scholar" ? undefined : "/about/kiplan-scholar", isCurrent: current === "kiplan-scholar" },
  ];
  return (
    <div className="rounded-lg border border-border bg-card/40 p-5">
      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] mb-3">
        KIPLAN Family — Institutional Structure
      </div>
      <ul className="space-y-2">
        {rows.map((r, i) => (
          <li key={r.label} className="flex items-start gap-2.5">
            {i > 0 && <ChevronRight className="mt-0.5 h-3 w-3 flex-shrink-0 text-[var(--color-accent)]/50" aria-hidden="true" />}
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-baseline gap-2">
                {r.isCurrent ? (
                  <span className="font-display text-sm font-medium text-foreground">{r.label}</span>
                ) : r.href ? (
                  <Link to={r.href} className="font-display text-sm font-medium text-foreground hover:text-[var(--color-accent)] transition-colors">
                    {r.label}
                  </Link>
                ) : (
                  <span className="font-display text-sm font-medium text-foreground">{r.label}</span>
                )}
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{r.role}</span>
                {r.isCurrent && (
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-1.5 py-0.5 rounded">
                    You are here
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============================================================
 *  KIPLAN Notary — institutional information page
 *  Route: /about/kiplan-notary
 *  Purpose: introduces KIPLAN Notary as the Notary Division of
 *  KIPLAN Law Firm and directs visitors to its external website.
 *  Does NOT duplicate the external Notary website's content.
 * ============================================================ */
export function KIPLANNotaryPage() {
  // Confirmed external URL for KIPLAN Notary.
  const NOTARY_URL = "https://kiplannotary.vercel.app";
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-4xl">
        <Breadcrumbs items={[{ label: "About", href: "/about" }, { label: "KIPLAN Notary" }]} />
        <SectionHeader
          eyebrow="About · KIPLAN Family"
          title="KIPLAN Notary"
          subtitle="Notary Division of KIPLAN Law Firm, Kathmandu, Nepal."
        />

        <div className="mt-8 prose prose-sm max-w-none text-foreground/90 leading-relaxed">
          <p>
            KIPLAN Notary is the Notary Division of KIPLAN Law Firm, Kathmandu, Nepal. It forms part of the wider
            KIPLAN institutional structure, alongside KIPLAN IP (the Intellectual Property division) and KIPLAN Scholar.
          </p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">Role and Purpose</h3>
          <p className="mt-2">
            KIPLAN Notary provides notary services within the practice context of KIPLAN Law Firm. This page is an
            institutional introduction within the KIPLAN IP platform; it does not duplicate the dedicated KIPLAN
            Notary website. For notary services, procedures, qualifications and engagement, please visit the
            KIPLAN Notary website directly.
          </p>
        </div>

        <div className="mt-8"><KiplanFamilyHierarchy current="kiplan-notary" /></div>

        <div className="mt-8"><VerificationNotice body="Specific KIPLAN Notary personnel, credentials, notary licences, service lists, fees and procedures are not detailed on this page. KIPLAN IP does not publish unverified notary information. For authoritative notary information, visit the KIPLAN Notary website." /></div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={NOTARY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
          >
            Visit KIPLAN Notary
            <ExternalLink className="h-4 w-4" />
          </a>
          <Link
            to="/about/kiplan-law-firm"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors"
          >
            About KIPLAN Law Firm <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-[var(--color-accent)] transition-colors"
          >
            About KIPLAN <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

/* ============================================================
 *  KIPLAN Scholar — institutional information page
 *  Route: /about/kiplan-scholar
 *  Purpose: introduces KIPLAN Scholar as an Education &
 *  Research Platform within the wider KIPLAN institutional
 *  structure, associated with KIPLAN Law Firm.
 *
 *  The KIPLAN Scholar website URL is confirmed as
 *  https://kiplanscholar.com and renders as an active external
 *  link via the SCHOLAR_URL constant below.
 * ============================================================ */
export function KIPLANScholarPage() {
  // Confirmed external URL for KIPLAN Scholar.
  const SCHOLAR_URL: string | null = "https://kiplanscholar.com";
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-4xl">
        <Breadcrumbs items={[{ label: "About", href: "/about" }, { label: "KIPLAN Scholar" }]} />
        <SectionHeader
          eyebrow="About · KIPLAN Family"
          title="KIPLAN Scholar"
          subtitle="Education & Research Platform — part of the wider KIPLAN institutional structure, associated with KIPLAN Law Firm, Kathmandu, Nepal."
        />

        <div className="mt-8 prose prose-sm max-w-none text-foreground/90 leading-relaxed">
          <p>
            KIPLAN Scholar is an Education &amp; Research Platform within the wider KIPLAN institutional structure,
            associated with KIPLAN Law Firm, Kathmandu, Nepal. It sits alongside KIPLAN IP (the Intellectual Property
            division) and KIPLAN Notary (the Notary division) as part of the KIPLAN family.
          </p>
          <h3 className="mt-6 font-display text-lg font-medium text-foreground">Role and Purpose</h3>
          <p className="mt-2">
            KIPLAN Scholar&apos;s role, programmes, courses, publications and affiliations are not detailed on this
            page. This page is an institutional introduction within the KIPLAN IP platform; it does not duplicate the
            dedicated KIPLAN Scholar website. For authoritative KIPLAN Scholar information, please visit the
            KIPLAN Scholar website.
          </p>
        </div>

        <div className="mt-8"><KiplanFamilyHierarchy current="kiplan-scholar" /></div>

        <div className="mt-8"><VerificationNotice body="Specific KIPLAN Scholar programmes, courses, publications and affiliations are not detailed on this page. KIPLAN IP does not publish unverified institutional information. For authoritative KIPLAN Scholar information, visit the KIPLAN Scholar website." /></div>

        <div className="mt-8 flex flex-wrap gap-3">
          {SCHOLAR_URL ? (
            <a
              href={SCHOLAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Visit KIPLAN Scholar
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <div
              role="status"
              aria-label="KIPLAN Scholar website URL to be confirmed"
              className="inline-flex items-center gap-2.5 rounded-md border border-border bg-card/40 px-4 py-2 text-sm"
            >
              <ExternalLink className="h-4 w-4 text-[var(--color-accent)]/60" aria-hidden="true" />
              <span className="text-muted-foreground">
                KIPLAN Scholar website
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
                URL to be confirmed
              </span>
            </div>
          )}
          <Link
            to="/about/kiplan-law-firm"
            className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors"
          >
            About KIPLAN Law Firm <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}
