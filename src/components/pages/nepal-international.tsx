"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { VerificationNotice } from "@/components/kiplan/related-content";
import { KiplanImage } from "@/components/kiplan/kiplan-image";
import { TREATIES } from "@/data/treaties";
import { CLASSIFICATIONS } from "@/data/classifications";
import { FILING_SYSTEMS } from "@/data/organizations";
import { ArrowRight } from "lucide-react";

export function NepalIPPage() {
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional", href: "/resources/professional" }, { label: "Nepal IP" }]} />
        <SectionHeader eyebrow="Professional Resources" title="Nepal IP Hub" subtitle="Nepal's position in the international IP system. All Nepal-specific treaty participation, IP office details and statutory provisions require verification from authoritative sources." />

        <div className="mt-8"><VerificationNotice body="Nepal's precise participation status under the principal international IP treaties (Paris, Berne, PCT, TRIPS, Madrid, Hague, Budapest, Rome, WCT, WPPT), the Nepal IP Office's official name and procedures, and the titles, dates and provisions of Nepalese IP legislation all require verification from authoritative sources (WIPO treaties database, WTO member list, Government of Nepal). KIPLAN IP does not publish unverified status claims." /></div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <KiplanImage
            src="/image/complete 1.webp"
            alt="A collage of nine photographs and eight icons representing intellectual property in Nepal — including Kathmandu's tiered-roof architecture, a craftsman carving wood, a scientist examining a microscope slide, books titled Intellectual Property, an office interior, and the exterior of a modern building labeled Department of Patents — a visual map of the KIPLAN IP Nepal research domain."
            aspect="aspect-[3/2]"
            caption="Nepal IP research domain — architecture, craft, science, legislation, office"
            wrapperClassName="rounded-lg overflow-hidden border border-border/60 bg-foreground/[0.92] shadow-sm"
            imgClassName="h-full w-full object-cover opacity-95"
            captionClassName="mt-2 px-1 font-mono text-[10px] uppercase tracking-wider text-background/60"
          />
          <div className="text-sm text-muted-foreground leading-relaxed">
            <p>
              The Nepal IP Hub brings together the strands of intellectual property practice and
              research that touch Nepal — from the country's treaty participation and IP office
              procedures to its legislation and place in the regional and international IP system.
            </p>
            <p className="mt-3">
              Every Nepal-specific fact presented here is either verifiable against authoritative
              sources (WIPO, WTO, Government of Nepal) or marked{" "}
              <span className="font-mono text-[11px] uppercase tracking-wider text-amber-700 dark:text-amber-300">Verification required</span>{" "}
              — never fabricated.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-display text-lg font-medium text-foreground">Nepal — Treaty Participation</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Comparative view of Nepal's participation across the principal international IP treaties, with precise status distinctions preserved.</p>
            <Link to="/resources/professional/country-participation" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">Open participation table <ArrowRight className="h-3 w-3" /></Link>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-display text-lg font-medium text-foreground">Nepal — IP Office</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Nepal IP Office details — name, official designation, URL, address and procedures — require verification.</p>
            <Link to="/research/office/nepal-ip-office" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">View office record <ArrowRight className="h-3 w-3" /></Link>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-display text-lg font-medium text-foreground">Nepal — IP Legislation</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Specific statute titles, dates, section numbers and amendments require verification directly with the Government of Nepal.</p>
            <Link to="/research/law/nepal-ip-laws" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">View law record <ArrowRight className="h-3 w-3" /></Link>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-display text-lg font-medium text-foreground">Nepal — Country Record</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">A consolidated Nepal country record with treaty participation table.</p>
            <Link to="/research/country/nepal" className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] hover:underline">View country record <ArrowRight className="h-3 w-3" /></Link>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="mb-4 font-display text-xl font-medium text-foreground">How KIPLAN IP treats Nepal-specific facts</h2>
          <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />Nepal participation status is never reduced to "Member: Yes/No". Precise status distinctions (Signatory, Party, Member, Acceded, Ratified, Accepted, Approved, Effective, Observer, Not a Party) are preserved where verifiable.</li>
            <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />Where a Nepal-specific fact cannot be corroborated by authoritative sources (WIPO, WTO, Government of Nepal), the field displays "Verification required" rather than a guess.</li>
            <li className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />Nepal-specific statutes, treaty ratification dates and IP office procedures are not invented. They are marked for verification.</li>
          </ul>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

export function InternationalIPPage() {
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Professional", href: "/resources/professional" }, { label: "International IP" }]} />
        <SectionHeader eyebrow="Professional Resources" title="International IP Architecture" subtitle="The structural backbone of the international IP system — treaties, classification systems and filing routes." />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-3 font-display text-xl font-medium text-foreground">Principal Treaties</h3>
            <ul className="divide-y divide-border/60 rounded-lg border border-border bg-card/40">
              {TREATIES.map((t) => (
                <li key={t.slug}>
                  <Link to={`/research/treaty/${t.slug}`} className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted/40 transition-colors">
                    <div>
                      <div className="font-display font-medium text-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.subject}</div>
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t.adoptionDate}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 font-display text-xl font-medium text-foreground">Classifications</h3>
            <ul className="divide-y divide-border/60 rounded-lg border border-border bg-card/40">
              {CLASSIFICATIONS.map((c) => (
                <li key={c.slug}>
                  <Link to={`/research/classification/${c.slug}`} className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted/40 transition-colors">
                    <div>
                      <div className="font-display font-medium text-foreground">{c.name}</div>
                      <div className="text-xs text-muted-foreground">{c.purpose}</div>
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{c.abbreviation}</div>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 mb-3 font-display text-xl font-medium text-foreground">Filing Systems</h3>
            <ul className="divide-y divide-border/60 rounded-lg border border-border bg-card/40">
              {FILING_SYSTEMS.map((f) => (
                <li key={f.slug}>
                  <Link to={`/research/filing-system/${f.slug}`} className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-muted/40 transition-colors">
                    <div>
                      <div className="font-display font-medium text-foreground">{f.name}</div>
                      <div className="text-xs text-muted-foreground">{f.type}</div>
                    </div>
                    {f.abbreviation && <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{f.abbreviation}</div>}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>
    </MotionSection>
  );
}
