"use client";

import { useState } from "react";
import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { KiplanImage } from "@/components/kiplan/kiplan-image";
import { ChevronRight, HelpCircle, ArrowRight, Search, MapPin } from "lucide-react";
import { useTranslation } from "@/i18n/provider";

interface PathwayDef {
  triggerKey: string;
  href: string;
  ipRight: string;
  hint: string;
}

const PATHWAY_DEFS: PathwayDef[] = [
  { triggerKey: "pathway.brand", href: "/ip-rights/trademarks", ipRight: "Trademarks", hint: "Names, logos, signs used in trade" },
  { triggerKey: "pathway.invention", href: "/ip-rights/patents", ipRight: "Patents", hint: "New, non-obvious, industrially applicable" },
  { triggerKey: "pathway.created", href: "/ip-rights/copyright", ipRight: "Copyright", hint: "Original literary, artistic, musical works" },
  { triggerKey: "pathway.designed", href: "/ip-rights/industrial-designs", ipRight: "Industrial Designs", hint: "Ornamental or aesthetic aspects" },
  { triggerKey: "pathway.confidential", href: "/ip-rights/trade-secrets", ipRight: "Trade Secrets", hint: "Secret, valuable, protected" },
  { triggerKey: "pathway.regional", href: "/ip-rights/geographical-indications", ipRight: "Geographical Indications", hint: "Origin-linked qualities" },
  { triggerKey: "pathway.online", href: "/ip-rights/domain-online-ip", ipRight: "Domain / Online IP", hint: "Domains, online platforms, digital enforcement" },
  { triggerKey: "pathway.multiple", href: "/ip-rights/ip-portfolio", ipRight: "IP Portfolio", hint: "Layered protection strategy" },
];

const METHODOLOGY = ["Sources", "Evidence", "Data", "Search", "Knowledge", "AI"];

export function IdentifyYourIP() {
  const [selected, setSelected] = useState<string | null>(null);
  const { t } = useTranslation();

  const steps = [
    { step: "01", icon: <HelpCircle className="h-4 w-4" />, title: t("identify.step1Title"), body: t("identify.step1Body") },
    { step: "02", icon: <Search className="h-4 w-4" />, title: t("identify.step2Title"), body: t("identify.step2Body") },
    { step: "03", icon: <MapPin className="h-4 w-4" />, title: t("identify.step3Title"), body: t("identify.step3Body") },
  ];

  return (
    <MotionSection id="identify-your-ip" className="py-20 md:py-28 border-t border-border/40 bg-card/20">
      <SectionShell>
        <SectionHeader
          eyebrow={t("identify.eyebrow")}
          title={t("identify.title")}
          subtitle={t("identify.subtitle")}
        />

        {/* Three-step orientation framing */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="rounded-lg border border-border bg-background/60 p-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  Step {s.step}
                </span>
                <span className="text-[var(--color-accent)]">{s.icon}</span>
              </div>
              <h3 className="mt-2 font-display text-base font-medium text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Methodology chip */}
        <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-[var(--color-accent)]">{t("identify.methodology")}</span>
          <span className="text-border">·</span>
          {METHODOLOGY.map((m, i) => (
            <span key={m} className="flex items-center gap-2">
              <span className="text-foreground/70">{m}</span>
              {i < METHODOLOGY.length - 1 && (
                <ChevronRight className="h-3 w-3 text-[var(--color-accent)]/40" aria-hidden="true" />
              )}
            </span>
          ))}
        </div>

        {/* Conceptual image + supporting copy */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <KiplanImage
            src="/image/Trademark.jpg"
            alt="Three golden three-dimensional icons representing intellectual property categories — a lightbulb containing a swirl (innovation), a shield with a gear (protection), and a padlock marked IP (confidentiality) — connected by glowing circuit traces."
            aspect="aspect-[16/9]"
            loading="eager"
            caption={t("identify.caption")}
          />
          <div className="text-sm text-muted-foreground leading-relaxed">
            <p>
              A single product, brand or technology can engage several IP rights at once. The pathway selector below
              helps you identify which of the eight IP categories applies to what you have — and routes you directly
              to the structured research for that right.
            </p>
            <p className="mt-3">
              Not sure where your situation fits? Use the{" "}
              <button
                type="button"
                onClick={() => setSelected("not-sure")}
                className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-accent)] hover:underline"
              >
                {t("identify.notSure")}
              </button>{" "}
              pathway to browse the full IP landscape first.
            </p>
          </div>
        </div>

        {/* Pathway selector */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PATHWAY_DEFS.map((p) => {
            const trigger = t(p.triggerKey as any);
            const active = selected === trigger;
            return (
              <button
                key={p.triggerKey}
                onClick={() => setSelected(trigger)}
                className={`group flex flex-col gap-1.5 rounded-lg border bg-background/60 p-4 text-left card-hover-lift ${
                  active ? "border-[var(--color-accent)] bg-[var(--color-accent)]/8" : "border-border hover:border-[var(--color-accent)]/40"
                }`}
              >
                <div className="font-display text-base font-medium text-foreground">{trigger}</div>
                <div className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">{p.ipRight}</div>
                <div className="text-[11px] text-muted-foreground leading-relaxed">{p.hint}</div>
              </button>
            );
          })}
          <button
            onClick={() => setSelected("not-sure")}
            className={`group flex flex-col gap-1.5 rounded-lg border border-dashed bg-background/40 p-4 text-left card-hover-lift ${
              selected === "not-sure" ? "border-[var(--color-accent)] bg-[var(--color-accent)]/8" : "border-border hover:border-[var(--color-accent)]/40"
            }`}
          >
            <div className="flex items-center gap-1.5 font-display text-base font-medium text-foreground">
              <HelpCircle className="h-4 w-4 text-[var(--color-accent)]" />
              {t("identify.notSure")}
            </div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{t("identify.notSureHint")}</div>
            <div className="text-[11px] text-muted-foreground leading-relaxed">{t("identify.notSureDesc")}</div>
          </button>
        </div>

        {selected && (
          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/6 p-4">
            <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--color-accent)]">
              {t("identify.pathwaySelected")}
            </div>
            <div className="text-sm text-foreground">
              {selected === "not-sure"
                ? t("identify.notSureDesc")
                : `${t("identify.continue")} → ${selected}`}
            </div>
            <Link
              to={selected === "not-sure" ? "/ip-rights" : PATHWAY_DEFS.find((p) => t(p.triggerKey as any) === selected)?.href ?? "/ip-rights"}
              className="ml-auto inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90"
            >
              {t("identify.continue")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between text-xs text-muted-foreground">
          <span></span>
          <Link to="/resources/professional/research" className="inline-flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors">
            {t("identify.researchCentre")} <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}
