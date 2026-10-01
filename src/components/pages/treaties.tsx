"use client";

import { useState, useMemo } from "react";
import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { TREATIES, getTreaty } from "@/data/treaties";
import { SOURCES } from "@/data/sources";
import { PUBLICATIONS } from "@/data/publications";
import { IP_RIGHTS } from "@/data/ip-rights";
import { StatusBadge, SourceBadge, LastUpdated } from "@/components/kiplan/badges";
import { RelatedContent, VerificationNotice } from "@/components/kiplan/related-content";
import { ArrowRight, ArrowLeft, Compass } from "lucide-react";

export function TreatyExplorer() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | "filing" | "non-filing">("all");
  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    return TREATIES.filter((x) => {
      if (filter === "filing" && !x.filingSystem) return false;
      if (filter === "non-filing" && x.filingSystem) return false;
      if (!t) return true;
      return x.name.toLowerCase().includes(t) || x.subject.toLowerCase().includes(t);
    });
  }, [q, filter]);

  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional", href: "/resources/professional" }, { label: "Treaties" }]} />
        <SectionHeader eyebrow="Professional Resources" title="Treaty Explorer" subtitle="Principal international IP treaties and filing systems. Each record preserves adoption date, administering organisation, Nepal status, and official source." />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search treaties — e.g. 'Paris', 'patent', 'digital'..."
            className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm"
            aria-label="Search treaties"
          />
          <div className="flex gap-2">
            {(["all", "filing", "non-filing"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-md border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-colors ${
                  filter === f ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]" : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {f === "all" ? "All" : f === "filing" ? "Filing systems" : "Non-filing"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-muted/40">
              <tr>
                <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Treaty</th>
                <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Subject</th>
                <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Adopted</th>
                <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Admin. Org.</th>
                <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Nepal Status</th>
                <th className="border-b border-border px-4 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Type</th>
                <th className="border-b border-border px-4 py-2" />
              </tr>
            </thead>
            <tbody>
              {filtered.map((t) => (
                <tr key={t.slug} className="hover:bg-muted/30 transition-colors">
                  <td className="border-b border-border/60 px-4 py-3 font-display font-medium text-foreground">
                    <Link to={`/research/treaty/${t.slug}`} className="hover:text-[var(--color-accent)]">{t.name}</Link>
                  </td>
                  <td className="border-b border-border/60 px-4 py-3 text-muted-foreground text-xs">{t.subject}</td>
                  <td className="border-b border-border/60 px-4 py-3 font-mono text-xs">{t.adoptionDate ?? "—"}</td>
                  <td className="border-b border-border/60 px-4 py-3 text-xs">{t.administeringOrg?.name ?? "—"}</td>
                  <td className="border-b border-border/60 px-4 py-3"><StatusBadge status={t.nepalStatus as any} /></td>
                  <td className="border-b border-border/60 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t.filingSystem ? "Filing System" : "Treaty"}</td>
                  <td className="border-b border-border/60 px-4 py-3 text-right">
                    <Link to={`/research/treaty/${t.slug}`} className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">
                      View <ArrowRight className="h-3 w-3" />
                    </Link>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={7} className="px-4 py-8 text-center text-sm text-muted-foreground">No treaties found for "{q}".</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function TreatyDetail({ slug }: { slug: string }) {
  const t = getTreaty(slug);
  if (!t) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">Treaty not found</h1>
          <Link to="/resources/professional/treaties" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background">
            <ArrowLeft className="h-4 w-4" /> Treaty Explorer
          </Link>
        </div>
      </SectionShell>
    );
  }

  const sources = SOURCES.filter((s) => t.officialSource && s.url && s.url === t.officialSource).concat(SOURCES.filter((s) => t.relatedRights.some((r) => s.relatedIPRight?.includes(r))));

  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional", href: "/resources/professional" }, { label: "Treaties", href: "/resources/professional/treaties" }, { label: t.name }]} />

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">
            {t.filingSystem ? "International Filing System" : "Treaty"} · {t.administeringOrg?.name}
          </div>
          <h1 className="mt-1 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{t.name}</h1>
          {t.abbreviation && <p className="mt-1 font-mono text-sm text-muted-foreground">{t.abbreviation}</p>}
        </div>

        <LastUpdated className="mt-4" date={t.adoptionDate} sourceDate={t.entryIntoForce} />

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">Summary</h2>
          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{t.summary}</p>
        </section>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Field label="Subject" value={t.subject} />
          <Field label="Adoption Date" value={t.adoptionDate ?? "Verification required"} />
          <Field label="Entry into Force" value={t.entryIntoForce ?? "Verification required"} />
          <Field label="Administering Organisation" value={t.administeringOrg?.name ?? "Verification required"} link={t.administeringOrg?.slug ? `/research/organization/${t.administeringOrg.slug}` : undefined} />
          <Field label="Type" value={t.filingSystem ? "International Filing System" : "Treaty"} />
          <Field label="Official Source" value={t.officialSource ?? "Verification required"} link={t.officialSource ?? undefined} external />
        </div>

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">Key Provisions</h2>
          <ul className="space-y-2">
            {t.keyProvisions.map((k, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/90 leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
                {k}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">Nepal Status</h2>
          <div className="flex flex-wrap items-center gap-3">
            <StatusBadge status={t.nepalStatus as any} />
            <span className="text-sm text-muted-foreground">{t.nepalStatusNotes}</span>
          </div>
          <VerificationNotice body="Nepal's precise signature, ratification, accession, acceptance, approval and effective dates require verification from authoritative sources (WIPO treaties database, WTO member list, Government of Nepal). KIPLAN IP does not publish unverified status claims." />
        </section>

        <RelatedContent
          groups={[
            { heading: "Administering Organisation", links: t.administeringOrg?.slug ? [{ label: t.administeringOrg.name, href: `/research/organization/${t.administeringOrg.slug}` }] : [] },
            { heading: "Related IP Rights", links: t.relatedRights.map((r) => { const right = IP_RIGHTS.find((x) => x.slug === r); return { label: right?.name ?? r, href: `/ip-rights/${r}` }; }) },
            { heading: "Related Classifications", links: t.relatedClassifications.map((c) => ({ label: c, href: `/research/classification/${c}` })) },
            { heading: "Related Filing Systems", links: t.relatedFilingSystems.map((f) => ({ label: f, href: `/research/filing-system/${f}` })) },
            { heading: "Related Publications", links: PUBLICATIONS.filter((p) => p.relatedTreaties?.includes(t.slug)).map((p) => ({ label: p.title, href: `/research/publication/${p.slug}` })) },
            { heading: "Sources", links: sources.map((s) => ({ label: s.title, href: `/research/source/${s.slug}` })) },
          ]}
        />

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/research/ai" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors">
            <Compass className="h-4 w-4" /> Ask AI about {t.abbreviation ?? t.name}
          </Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

function Field({ label, value, link, external }: { label: string; value: string; link?: string; external?: boolean }) {
  return (
    <div className="rounded-lg border border-border bg-card/40 p-4">
      <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      {link ? (
        external ? (
          <a href={link} target="_blank" rel="noreferrer" className="mt-1 block break-all text-sm text-[var(--color-accent)] hover:underline">{value}</a>
        ) : (
          <Link to={link} className="mt-1 block text-sm text-[var(--color-accent)] hover:underline">{value}</Link>
        )
      ) : (
        <div className="mt-1 text-sm text-foreground">{value}</div>
      )}
    </div>
  );
}
