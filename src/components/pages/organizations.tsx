"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { ORGANIZATIONS, getOrganization, OFFICES, getOffice, FILING_SYSTEMS } from "@/data/organizations";
import { SOURCES, getSource } from "@/data/sources";
import { StatusBadge, SourceBadge, LastUpdated } from "@/components/kiplan/badges";
import { RelatedContent, VerificationNotice } from "@/components/kiplan/related-content";
import { ArrowRight, ArrowLeft, Compass, ExternalLink } from "lucide-react";

export function OrganizationsPage() {
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional", href: "/resources/professional" }, { label: "Organizations" }]} />
        <SectionHeader eyebrow="Professional Resources" title="International IP Organizations" subtitle="WIPO (Geneva), WTO (Geneva), EPO (Munich), USPTO (Alexandria) — the institutions that administer IP treaties, classifications and filing systems." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {ORGANIZATIONS.map((o) => (
            <Link key={o.slug} to={`/research/organization/${o.slug}`} className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-6 hover:border-[var(--color-accent)]/40 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{o.abbreviation}</div>
                  <h3 className="font-display text-xl font-medium text-foreground">{o.name}</h3>
                </div>
                <StatusBadge status={o.verification as any} />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{o.purpose}</p>
              <div className="mt-auto flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <span>HQ: {o.headquarters ?? "—"}</span>
                <span>·</span>
                <span>Est: {o.established ?? "—"}</span>
              </div>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">View <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function OrganizationDetail({ slug }: { slug: string }) {
  const o = getOrganization(slug);
  if (!o) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">Organization not found</h1>
          <Link to="/resources/professional/organizations" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background"><ArrowLeft className="h-4 w-4" /> Organizations</Link>
        </div>
      </SectionShell>
    );
  }
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional", href: "/resources/professional" }, { label: "Organizations", href: "/resources/professional/organizations" }, { label: o.name }]} />

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{o.type} · {o.abbreviation}</div>
          <h1 className="mt-1 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{o.name}</h1>
        </div>

        <LastUpdated className="mt-4" date={o.established} sourceDate={null} />

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">Purpose</h2>
          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{o.purpose}</p>
        </section>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Field label="Type" value={o.type} />
          <Field label="Headquarters" value={o.headquarters ?? "Verification required"} />
          <Field label="Established" value={o.established ?? "Verification required"} />
        </div>

        {o.administers && o.administers.length > 0 && (
          <section className="mt-8 border-t border-border/60 pt-6">
            <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">Administers</h2>
            <ul className="divide-y divide-border/60 rounded-lg border border-border bg-card/40">
              {o.administers.map((a, i) => (
                <li key={i}>
                  <Link to={a.slug ? `/research/treaty/${a.slug}` : "/resources/professional/treaties"} className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted/40 transition-colors">
                    <span className="font-display font-medium text-foreground">{a.name}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {o.classificationSystems && o.classificationSystems.length > 0 && (
          <section className="mt-8 border-t border-border/60 pt-6">
            <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">Classification Systems</h2>
            <div className="flex flex-wrap gap-2">
              {o.classificationSystems.map((c) => (
                <Link key={c.slug} to={`/research/classification/${c.slug}`} className="inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/8 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--color-accent)] hover:bg-[var(--color-accent)]/15">
                  {c.name} <ArrowRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {o.website && (
          <a href={o.website} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors">
            <ExternalLink className="h-4 w-4" /> Official website
          </a>
        )}

        <RelatedContent
          groups={[
            { heading: "Administers Treaties", links: (o.administers ?? []).map((a) => ({ label: a.name, href: a.slug ? `/research/treaty/${a.slug}` : "/resources/professional/treaties" })) },
            { heading: "Classification Systems", links: (o.classificationSystems ?? []).map((c) => ({ label: c.name, href: `/research/classification/${c.slug}` })) },
            { heading: "Related IP Rights", links: ["patents", "trademarks", "industrial-designs", "copyright", "geographical-indications"].map((r) => ({ label: r, href: `/ip-rights/${r}` })) },
          ]}
        />

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link to="/research/ai" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors">
            <Compass className="h-4 w-4" /> Ask AI about {o.abbreviation}
          </Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function OfficesPage() {
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional", href: "/resources/professional" }, { label: "IP Offices" }]} />
        <SectionHeader eyebrow="Professional Resources" title="IP Offices Directory" subtitle="National, regional and international IP offices. Nepal IP Office details are marked Verification required." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {OFFICES.map((o) => (
            <Link key={o.slug} to={`/research/office/${o.slug}`} className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-6 hover:border-[var(--color-accent)]/40 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-medium text-foreground">{o.name}</h3>
                <StatusBadge status={o.verification as any} />
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{o.jurisdictionLevel} · {o.country}</div>
              {o.acronym && <div className="font-mono text-xs text-[var(--color-accent)]">{o.acronym}</div>}
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">View <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function OfficeDetail({ slug }: { slug: string }) {
  const o = getOffice(slug);
  if (!o) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">Office not found</h1>
          <Link to="/resources/professional/offices" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background"><ArrowLeft className="h-4 w-4" /> IP Offices</Link>
        </div>
      </SectionShell>
    );
  }
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional", href: "/resources/professional" }, { label: "IP Offices", href: "/resources/professional/offices" }, { label: o.name }]} />

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{o.jurisdictionLevel} IP Office · {o.country}</div>
          <h1 className="mt-1 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{o.name}</h1>
          {o.acronym && <p className="mt-1 font-mono text-sm text-muted-foreground">{o.acronym}</p>}
        </div>

        <div className="mt-4"><StatusBadge status={o.verification as any} /></div>

        {o.notes && <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{o.notes}</p>}

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Field label="Jurisdiction Level" value={o.jurisdictionLevel} />
          <Field label="Country" value={o.country} link={o.countrySlug ? `/research/country/${o.countrySlug}` : undefined} />
          <Field label="Website" value={o.website ?? "Verification required"} link={o.website ?? undefined} external />
          <Field label="Address" value={o.address ?? "Verification required"} />
        </div>

        {o.administers && o.administers.length > 0 && (
          <section className="mt-8 border-t border-border/60 pt-6">
            <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">Administers</h2>
            <ul className="flex flex-wrap gap-2">
              {o.administers.map((a, i) => (
                <li key={i} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground">{a}</li>
              ))}
            </ul>
          </section>
        )}

        {o.verification !== "Verified" && (
          <div className="mt-6"><VerificationNotice body="Specific office details (name, address, procedures, fees) require direct verification from the issuing authority." /></div>
        )}

        <RelatedContent
          groups={[
            { heading: "Country", links: o.countrySlug ? [{ label: o.country, href: `/research/country/${o.countrySlug}` }] : [] },
            { heading: "Filing Systems", links: FILING_SYSTEMS.map((f) => ({ label: f.name, href: `/research/filing-system/${f.slug}` })) },
          ]}
        />
      </SectionShell>
    </MotionSection>
  );
}

export function FilingSystemsPage() {
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional", href: "/resources/professional" }, { label: "Filing Systems" }]} />
        <SectionHeader eyebrow="Professional Resources" title="International Filing Systems" subtitle="PCT (patents), Madrid (trademarks), Hague (industrial designs) — the procedural routes that allow a single filing to reach multiple jurisdictions." />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {FILING_SYSTEMS.map((f) => (
            <Link key={f.slug} to={`/research/filing-system/${f.slug}`} className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-6 hover:border-[var(--color-accent)]/40 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-medium text-foreground">{f.name}</h3>
                {f.abbreviation && <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{f.abbreviation}</span>}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.purpose}</p>
              <div className="mt-auto font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Administered by: {f.administeredBy.name}</div>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">View <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function FilingSystemDetail({ slug }: { slug: string }) {
  const f = FILING_SYSTEMS.find((x) => x.slug === slug);
  if (!f) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">Filing system not found</h1>
          <Link to="/resources/professional/filing-systems" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background"><ArrowLeft className="h-4 w-4" /> Filing Systems</Link>
        </div>
      </SectionShell>
    );
  }
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional", href: "/resources/professional" }, { label: "Filing Systems", href: "/resources/professional/filing-systems" }, { label: f.name }]} />
        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{f.type} · administered by {f.administeredBy.name}</div>
          <h1 className="mt-1 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{f.name}</h1>
          {f.abbreviation && <p className="mt-1 font-mono text-sm text-muted-foreground">{f.abbreviation}</p>}
        </div>
        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">Purpose</h2>
          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{f.purpose}</p>
        </section>
        <RelatedContent
          groups={[
            { heading: "Administering Organisation", links: [{ label: f.administeredBy.name, href: `/research/organization/${f.administeredBy.slug}` }] },
            { heading: "Related Treaties", links: f.relatedTreaties.map((t) => ({ label: t.name, href: `/research/treaty/${t.slug}` })) },
            { heading: "Related IP Rights", links: f.relatedRights.map((r) => ({ label: r, href: `/ip-rights/${r}` })) },
          ]}
        />
      </SectionShell>
    </MotionSection>
  );
}

export function SourcesPage() {
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional", href: "/resources/professional" }, { label: "Source Library" }]} />
        <SectionHeader eyebrow="Professional Resources" title="Source Library" subtitle="Three tiers of sources: Tier 1 official, Tier 2 institutional/academic, Tier 3 professional/secondary. Each source preserves type, jurisdiction, issuing body, URL and verification status." />

        <div className="mt-12 space-y-8">
          {(["tier-1-official", "tier-2-institutional", "tier-3-professional"] as const).map((tier) => (
            <div key={tier}>
              <h2 className="mb-4 font-display text-xl font-medium text-foreground flex items-center gap-2">
                <SourceBadge tier={tier} />
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{SOURCES.filter((s) => s.tier === tier).length} sources</span>
              </h2>
              <div className="grid gap-3 md:grid-cols-2">
                {SOURCES.filter((s) => s.tier === tier).map((s) => (
                  <Link key={s.slug} to={`/research/source/${s.slug}`} className="group rounded-lg border border-border bg-card p-4 hover:border-[var(--color-accent)]/40 transition-colors">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display font-medium text-foreground text-sm leading-snug">{s.title}</h3>
                    </div>
                    <p className="mt-2 line-clamp-2 text-xs text-muted-foreground leading-relaxed">{s.description}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <StatusBadge status={s.verificationStatus as any} />
                      {s.url && <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">→ source</span>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function SourceDetail({ slug }: { slug: string }) {
  const s = getSource(slug);
  if (!s) {
    return (
      <SectionShell className="py-16">
        <div className="rounded-lg border border-dashed border-border p-12 text-center">
          <h1 className="font-display text-2xl text-foreground">Source not found</h1>
          <Link to="/resources/professional/sources" className="mt-4 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background"><ArrowLeft className="h-4 w-4" /> Source Library</Link>
        </div>
      </SectionShell>
    );
  }
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional", href: "/resources/professional" }, { label: "Source Library", href: "/resources/professional/sources" }, { label: s.title }]} />

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">{s.sourceType} · {s.jurisdiction}</div>
          <h1 className="mt-1 font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{s.title}</h1>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <SourceBadge tier={s.tier} />
          <StatusBadge status={s.verificationStatus as any} />
        </div>

        <LastUpdated className="mt-4" date={s.date} sourceDate={s.retrievalDate} />

        <section className="mt-8 border-t border-border/60 pt-6">
          <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">Description</h2>
          <p className="text-sm md:text-base text-foreground/90 leading-relaxed">{s.description}</p>
        </section>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Field label="Publisher" value={s.publisher ?? "Verification required"} />
          <Field label="Issuing Body" value={s.issuingBody ?? "Verification required"} />
          <Field label="Jurisdiction" value={s.jurisdiction ?? "—"} />
          <Field label="Date" value={s.date ?? "Verification required"} />
          <Field label="Retrieval Date" value={s.retrievalDate ?? "—"} />
          <Field label="URL" value={s.url ?? "Verification required"} link={s.url ?? undefined} external />
        </div>

        {s.verificationStatus !== "Verified" && (
          <div className="mt-6"><VerificationNotice body="This source requires direct verification with the issuing organisation. KIPLAN IP does not present unverified sources as authoritative." /></div>
        )}

        {s.relatedTopic && s.relatedTopic.length > 0 && (
          <section className="mt-8 border-t border-border/60 pt-6">
            <h2 className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--color-accent)]">Related Topics</h2>
            <div className="flex flex-wrap gap-2">
              {s.relatedTopic.map((t) => (
                <span key={t} className="rounded-full border border-border bg-card px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t}</span>
              ))}
            </div>
          </section>
        )}

        <RelatedContent
          groups={[
            { heading: "Related IP Rights", links: (s.relatedIPRight ?? []).map((r) => ({ label: r, href: `/ip-rights/${r}` })) },
          ]}
        />
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
