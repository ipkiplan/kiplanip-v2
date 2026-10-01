"use client";

import { useState, useMemo } from "react";
import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { PUBLICATIONS, getPublication } from "@/data/publications";
import { StatusBadge } from "@/components/kiplan/badges";
import { VerificationNotice, RelatedContent } from "@/components/kiplan/related-content";
import { KiplanImage } from "@/components/kiplan/kiplan-image";
import { ArrowRight, ArrowLeft, FileText, ScrollText, BookMarked, FileWarning, Compass } from "lucide-react";

const TYPE_LABELS: Record<string, string> = {
  "Research Paper": "Research Papers",
  "Draft Paper": "Draft Papers",
  "Working Paper": "Working Papers",
  "Research Note": "Research Notes",
  "Report": "Reports",
  "IP Update": "IP Updates",
  "Article": "Articles",
  "Commentary": "Commentaries",
};

const TYPE_HREF: Record<string, string> = {
  "Research Paper": "/publications/research-papers",
  "Draft Paper": "/publications/draft-papers",
  "Working Paper": "/publications/working-papers",
  "Research Note": "/publications/research-notes",
  "Report": "/publications/reports",
  "IP Update": "/publications/ip-updates",
  "Article": "/publications/articles",
  "Commentary": "/publications/commentaries",
};

export function PublicationsLanding() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return PUBLICATIONS;
    return PUBLICATIONS.filter((p) => p.title.toLowerCase().includes(t) || p.abstract.toLowerCase().includes(t) || p.keywords.some((k) => k.toLowerCase().includes(t)));
  }, [q]);

  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Publications" }]} />
        <SectionHeader eyebrow="Publications" title="Research papers, working papers, articles and updates" subtitle="Draft and working papers are visibly labelled DRAFT or WORKING PAPER with version and review status — never implying peer review or institutional endorsement." />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <KiplanImage
            src="/image/reflection-sunrise.webp"
            alt="Sunrise illuminating a Himalayan mountain valley, with the sun's rays and surrounding peaks reflecting in a calm body of water in the foreground — the editorial atmosphere of the KIPLAN IP publications archive."
            aspect="aspect-[3/2]"
            caption="Reflection — the editorial stance of KIPLAN IP research"
          />
          <div className="text-sm text-muted-foreground leading-relaxed">
            <p>
              The KIPLAN IP publications archive collects research papers, working papers, draft
              papers, research notes, reports, IP updates, articles and commentaries — each with
              structured metadata, source directory, and visible review status.
            </p>
            <p className="mt-3">
              Draft and working papers carry DRAFT or WORKING PAPER labels with version and review
              status — never implying peer review or institutional endorsement unless that is actually
              established.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {Object.entries(TYPE_LABELS).map(([type, label]) => (
            <Link key={type} to={TYPE_HREF[type]} className="rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/40 transition-colors">
              {label}
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search publications — e.g. 'portfolio', 'TRIPS', 'digital'..."
            className="w-full max-w-xl rounded-md border border-border bg-background px-3 py-2 text-sm"
            aria-label="Search publications"
          />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {filtered.length === 0 ? (
            <div className="col-span-full rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">No publications found for "{q}".</div>
          ) : (
            filtered.map((p) => <PublicationCard key={p.slug} slug={p.slug} />)
          )}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

function PublicationCard({ slug }: { slug: string }) {
  const p = getPublication(slug);
  if (!p) return null;
  const Icon = p.type.includes("Update") ? <BookMarked className="h-4 w-4" /> : p.type.includes("Working") ? <ScrollText className="h-4 w-4" /> : p.type.includes("Draft") ? <FileWarning className="h-4 w-4" /> : <FileText className="h-4 w-4" />;
  return (
    <Link to={`/research/publication/${p.slug}`} className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-5 hover:border-[var(--color-accent)]/40 transition-colors">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{Icon}{p.type}</span>
        <StatusBadge status={p.verification as any} />
      </div>
      <h3 className="font-display text-lg font-medium leading-snug text-foreground">{p.title}</h3>
      <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">{p.abstract}</p>
      {p.disclaimer && <p className="font-mono text-[10px] uppercase tracking-wider text-amber-700 dark:text-amber-300">{p.disclaimer}</p>}
      <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">Read <ArrowRight className="h-3 w-3" /></span>
    </Link>
  );
}

export function PublicationsByType({ type }: { type: string }) {
  const items = PUBLICATIONS.filter((p) => p.type === type);
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Publications", href: "/publications" }, { label: TYPE_LABELS[type] ?? type }]} />
        <SectionHeader eyebrow="Publications" title={TYPE_LABELS[type] ?? type} subtitle={type === "Draft Paper" || type === "Working Paper" ? "Clearly labelled DRAFT or WORKING PAPER. Subject to revision. Not peer reviewed." : "KIPLAN IP Research — not peer reviewed. Not legal advice."} />
        {items.length === 0 ? (
          <div className="mt-12 rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            No {TYPE_LABELS[type]?.toLowerCase() ?? "publications"} currently published.
          </div>
        ) : (
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {items.map((p) => <PublicationCard key={p.slug} slug={p.slug} />)}
          </div>
        )}
      </SectionShell>
    </MotionSection>
  );
}

export function PublicationDetail({ slug }: { slug: string }) {
  const p = getPublication(slug);
  if (!p) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">Publication not found</h1>
          <Link to="/publications" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background"><ArrowLeft className="h-4 w-4" /> Publications</Link>
        </div>
      </SectionShell>
    );
  }
  const isDraft = p.type === "Draft Paper";
  const isWorking = p.type === "Working Paper";
  const isResearch = p.type === "Research Paper";
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-4xl">
        <Breadcrumbs items={[{ label: "Publications", href: "/publications" }, { label: TYPE_LABELS[p.type] ?? p.type, href: TYPE_HREF[p.type] }, { label: p.title }]} />

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{p.type}</span>
            {p.version && <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{p.version}</span>}
            {p.reviewStatus && <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{p.reviewStatus}</span>}
          </div>
          <h1 className="mt-2 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground leading-tight">{p.title}</h1>
          {p.authorsNote && <p className="mt-2 font-mono text-xs text-muted-foreground">{p.authorsNote}</p>}
        </div>

        {(isDraft || isWorking) && (
          <div className="mt-6 rounded-lg border border-amber-600/30 bg-amber-50/60 dark:bg-amber-950/20 px-4 py-3">
            <p className="font-mono text-[11px] uppercase tracking-wider text-amber-700 dark:text-amber-300">
              {isDraft ? "DRAFT PAPER" : "WORKING PAPER"} · {p.version ?? "version not specified"} · {p.reviewStatus ?? "review status not specified"}
            </p>
            <p className="mt-1 text-xs text-amber-700/90 dark:text-amber-300/90 leading-relaxed">
              This document is a {isDraft ? "draft" : "working paper"} — subject to revision. Not peer reviewed. Not legal advice. KIPLAN IP Research — no institutional endorsement implied.
            </p>
          </div>
        )}

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">Abstract</h2>
          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{p.abstract}</p>
        </section>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.keywords.map((k) => (
            <span key={k} className="rounded-full border border-border bg-card px-2.5 py-0.5 text-[11px] text-muted-foreground">{k}</span>
          ))}
        </div>

        {isResearch && p.sections && p.sections.length > 0 ? (
          <section className="mt-10 border-t border-border/60 pt-6">
            <h2 className="mb-4 font-display text-xl font-medium text-foreground">Full Research Paper — 23 Sections</h2>
            <ol className="space-y-5">
              {p.sections.map((s, i) => (
                <li key={i} className="rounded-lg border border-border bg-card/40 p-4">
                  <h3 className="font-display font-medium text-foreground">{s.heading}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </li>
              ))}
            </ol>
          </section>
        ) : (
          <section className="mt-10 border-t border-border/60 pt-6">
            <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">Full Text</h2>
            <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{p.abstract}</p>
            <p className="mt-4 text-xs text-muted-foreground italic">Full text available on request. This summary reflects the structural content of the publication.</p>
          </section>
        )}

        {p.disclaimer && (
          <div className="mt-8 rounded-lg border border-border bg-card/40 p-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">Disclaimer</p>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.disclaimer}</p>
          </div>
        )}

        {p.verification !== "Verified" && <div className="mt-6"><VerificationNotice body="Specific facts cited in this publication require verification from authoritative sources." /></div>}

        <RelatedContent
          groups={[
            { heading: "Related IP Rights", links: (p.relatedRights ?? []).map((r) => ({ label: r, href: `/ip-rights/${r}` })) },
            { heading: "Related Treaties", links: (p.relatedTreaties ?? []).map((t) => ({ label: t, href: `/research/treaty/${t}` })) },
            { heading: "Related Countries", links: (p.relatedCountries ?? []).map((c) => ({ label: c, href: `/research/country/${c}` })) },
            { heading: "Sources", links: (p.sources ?? []).map((s) => ({ label: s, href: `/research/source/${s}` })) },
          ]}
        />

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/research/ai" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors">
            <Compass className="h-4 w-4" /> Ask AI about this research
          </Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}
