"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { COUNTRIES, getCountry } from "@/data/countries";
import { TREATIES } from "@/data/treaties";
import { StatusBadge } from "@/components/kiplan/badges";
import { RelatedContent, VerificationNotice } from "@/components/kiplan/related-content";
import { ArrowRight, ArrowLeft, Compass } from "lucide-react";

export function CountriesExplorer() {
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional", href: "/resources/professional" }, { label: "Countries" }]} />
        <SectionHeader eyebrow="Professional Resources" title="Country Research" subtitle="Nepal and selected major jurisdictions. Each record includes region, capital, IP office, IP laws, and treaty participation (with status distinctions preserved)." />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {COUNTRIES.map((c) => (
            <Link key={c.slug} to={`/research/country/${c.slug}`} className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-5 hover:border-[var(--color-accent)]/40 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-medium text-foreground">{c.name}</h3>
                <StatusBadge status={c.verification as any} />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {c.region} · {c.capital ?? "Capital: verification required"}
              </div>
              <div className="text-xs text-muted-foreground">{c.ipOffice?.name ?? "IP Office: verification required"}</div>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">View <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function CountryDetail({ slug }: { slug: string }) {
  const c = getCountry(slug);
  if (!c) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">Country not found</h1>
          <Link to="/resources/professional/countries" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background">
            <ArrowLeft className="h-4 w-4" /> Country Research
          </Link>
        </div>
      </SectionShell>
    );
  }
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional", href: "/resources/professional" }, { label: "Countries", href: "/resources/professional/countries" }, { label: c.name }]} />

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">Country · {c.region}</div>
          <h1 className="mt-1 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{c.name}</h1>
          <p className="mt-1 font-mono text-sm text-muted-foreground">{c.iso2} · {c.iso3} · Capital: {c.capital ?? "verification required"}</p>
        </div>

        <div className="mt-4"><StatusBadge status={c.verification as any} /></div>

        {c.notes && <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.notes}</p>}

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">IP Office</h2>
          <div className="rounded-lg border border-border bg-card/40 p-4">
            <div className="text-sm font-medium text-foreground">{c.ipOffice?.name ?? "Verification required"}</div>
            {c.ipOffice?.slug && <Link to={`/research/office/${c.ipOffice.slug}`} className="mt-1 inline-block text-xs text-[var(--color-accent)] hover:underline">View office detail →</Link>}
          </div>
        </section>

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">Treaty Participation</h2>
          {c.slug === "nepal" && (
            <VerificationNotice body="All Nepal-specific treaty participation requires verification from authoritative sources (WIPO treaties database, WTO member list, Government of Nepal). Status terminology distinguishes: Signatory, Party, Member, Acceded, Ratified, Accepted, Approved, Effective, Observer, Not a Party." />
          )}
          <div className="mt-4 overflow-hidden rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/40">
                <tr>
                  <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Treaty</th>
                  <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Status</th>
                  <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Notes</th>
                  <th className="border-b border-border px-4 py-2" />
                </tr>
              </thead>
              <tbody>
                {(c.treatyParticipation ?? []).map((p) => (
                  <tr key={p.treatySlug}>
                    <td className="border-b border-border/60 px-4 py-3 font-display font-medium text-foreground">
                      <Link to={`/research/treaty/${p.treatySlug}`} className="hover:text-[var(--color-accent)]">{p.treatyName}</Link>
                    </td>
                    <td className="border-b border-border/60 px-4 py-3"><StatusBadge status={p.status as any} /></td>
                    <td className="border-b border-border/60 px-4 py-3 text-xs text-muted-foreground">{p.notes ?? "—"}</td>
                    <td className="border-b border-border/60 px-4 py-3 text-right">
                      <Link to={`/research/treaty/${p.treatySlug}`} className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">View <ArrowRight className="h-3 w-3" /></Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <RelatedContent
          groups={[
            { heading: "IP Office", links: c.ipOffice?.slug ? [{ label: c.ipOffice.name, href: `/research/office/${c.ipOffice.slug}` }] : [] },
            { heading: "Treaties", links: (c.treatyParticipation ?? []).map((p) => ({ label: p.treatyName, href: `/research/treaty/${p.treatySlug}` })) },
            { heading: "All Treaties", links: TREATIES.map((t) => ({ label: t.name, href: `/research/treaty/${t.slug}` })) },
          ]}
        />

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/research/ai" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors">
            <Compass className="h-4 w-4" /> Ask AI about {c.name}
          </Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function CountryParticipationPage() {
  // Comparative table — Nepal + others, for each treaty.
  const treaties = TREATIES;
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional", href: "/resources/professional" }, { label: "Country Participation" }]} />
        <SectionHeader eyebrow="Professional Resources" title="Country Participation" subtitle="Comparative view of country participation in international IP treaties. Nepal's status requires verification — never reduced to 'Member: Yes/No'." />

        <div className="mt-6"><VerificationNotice body="All Nepal-specific treaty participation requires verification from authoritative sources (WIPO treaties database, WTO member list, Government of Nepal). KIPLAN IP preserves the precise status distinctions: Signatory, Party, Member, Acceded, Ratified, Accepted, Approved, Effective, Observer, Not a Party." /></div>

        <div className="mt-8 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[700px] text-sm">
            <thead className="bg-muted/40">
              <tr>
                <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Treaty</th>
                {COUNTRIES.map((c) => (
                  <th key={c.slug} className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{c.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {treaties.map((t) => (
                <tr key={t.slug} className="hover:bg-muted/30 transition-colors">
                  <td className="border-b border-border/60 px-4 py-3">
                    <Link to={`/research/treaty/${t.slug}`} className="font-display font-medium text-foreground hover:text-[var(--color-accent)]">{t.name}</Link>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t.adoptionDate}</div>
                  </td>
                  {COUNTRIES.map((c) => {
                    const p = c.treatyParticipation?.find((x) => x.treatySlug === t.slug);
                    return (
                      <td key={c.slug} className="border-b border-border/60 px-4 py-3">
                        {p ? <StatusBadge status={p.status as any} /> : <span className="text-xs text-muted-foreground">—</span>}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionShell>
    </MotionSection>
  );
}
