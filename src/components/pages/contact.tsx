"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection, SectionHeader } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { VerificationNotice } from "@/components/kiplan/related-content";
import { ArrowRight } from "lucide-react";

const INQUIRY_TYPES = [
  { value: "trademark", label: "Trademark matter" },
  { value: "patent", label: "Patent matter" },
  { value: "design", label: "Industrial design matter" },
  { value: "copyright", label: "Copyright matter" },
  { value: "trade-secret", label: "Trade secret / confidentiality" },
  { value: "gi", label: "Geographical indication" },
  { value: "domain", label: "Domain / online IP" },
  { value: "portfolio", label: "IP portfolio / multi-right" },
  { value: "other", label: "Other" },
];

export function ContactLanding() {
  const cards = [
    { label: "Consultation", href: "/contact/consultation", body: "Discuss an IP matter with a qualified practitioner." },
    { label: "IP Inquiry", href: "/contact/ip-inquiry", body: "Ask a specific IP question." },
    { label: "Research Inquiry", href: "/contact/research-inquiry", body: "Propose research collaboration." },
    { label: "General Contact", href: "/contact/general", body: "General enquiries about KIPLAN IP." },
  ];
  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell>
        <Breadcrumbs items={[{ label: "Contact" }]} />
        <SectionHeader eyebrow="Contact" title="Get in touch" subtitle="KIPLAN IP is the Intellectual Property division of KIPLAN Law Firm, Kathmandu, Nepal. Choose the inquiry path that matches your need." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <Link key={c.href} to={c.href} className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 hover:border-[var(--color-accent)]/40 transition-colors">
              <h3 className="font-display text-lg font-medium text-foreground">{c.label}</h3>
              <p className="text-sm text-muted-foreground">{c.body}</p>
              <span className="mt-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)] opacity-0 group-hover:opacity-100">Open <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
        <div className="mt-10 rounded-lg border border-border bg-card/40 p-6">
          <h3 className="font-display text-lg font-medium text-foreground">Kathmandu, Nepal</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">KIPLAN IP is the Intellectual Property division of KIPLAN Law Firm, Kathmandu, Nepal.</p>
          <div className="mt-4"><VerificationNotice body="Specific office address, phone number, email address and contact channels require verification. KIPLAN IP does not publish unverified contact details." /></div>
        </div>
      </SectionShell>
    </MotionSection>
  );
}

interface FormConfig {
  title: string;
  eyebrow: string;
  description: string;
  fields: { name: string; label: string; type: "text" | "email" | "textarea" | "select"; required?: boolean; placeholder?: string; options?: { value: string; label: string }[]; counter?: boolean }[];
  submitLabel: string;
  reference: string;
}

function InquiryForm({ config }: { config: FormConfig }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      const ref = `${config.reference}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
      toast.success("Inquiry received", {
        description: `Your reference is ${ref}. We will respond as soon as possible. This is a demonstration — no email was actually sent.`,
      });
      setValues({});
    }, 900);
  }

  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-3xl">
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }, { label: config.title }]} />
        <SectionHeader eyebrow={config.eyebrow} title={config.title} subtitle={config.description} />
        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          {config.fields.map((f) => (
            <div key={f.name} className="grid gap-1.5">
              <Label htmlFor={f.name} className="text-xs uppercase tracking-wider text-muted-foreground">
                {f.label}{f.required && <span className="ml-0.5 text-[var(--color-accent)]">*</span>}
              </Label>
              {f.type === "textarea" ? (
                <Textarea
                  id={f.name}
                  required={f.required}
                  placeholder={f.placeholder}
                  value={values[f.name] ?? ""}
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                  maxLength={f.counter ? 800 : undefined}
                  className="min-h-[120px]"
                />
              ) : f.type === "select" ? (
                <select
                  id={f.name}
                  required={f.required}
                  value={values[f.name] ?? ""}
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm"
                >
                  <option value="">Select…</option>
                  {f.options?.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              ) : (
                <Input
                  id={f.name}
                  type={f.type}
                  required={f.required}
                  placeholder={f.placeholder}
                  value={values[f.name] ?? ""}
                  onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                />
              )}
              {f.counter && (
                <div className="text-right font-mono text-[10px] text-muted-foreground">
                  {(values[f.name] ?? "").length}/800
                </div>
              )}
            </div>
          ))}
          <div className="mt-2 rounded-lg border border-border bg-card/40 p-3">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <strong className="font-medium text-foreground/80">Privacy.</strong> Information submitted through this form is used only to respond to your inquiry. KIPLAN IP does not share inquiry information with third parties.
            </p>
          </div>
          <Button type="submit" disabled={submitting} className="w-fit">
            {submitting ? "Sending…" : config.submitLabel}
          </Button>
          <p className="text-xs text-muted-foreground italic">This is a demonstration form — submissions are not actually transmitted. Please use the verified contact channels once available.</p>
        </form>
      </SectionShell>
    </MotionSection>
  );
}

const consultationConfig: FormConfig = {
  title: "Consultation",
  eyebrow: "Contact",
  description: "Request a consultation on an IP matter. KIPLAN IP is the Intellectual Property division of KIPLAN Law Firm, Kathmandu, Nepal.",
  fields: [
    { name: "name", label: "Full name", type: "text", required: true, placeholder: "Your name" },
    { name: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
    { name: "organisation", label: "Organisation", type: "text", placeholder: "Optional" },
    { name: "matter", label: "Matter type", type: "select", required: true, options: INQUIRY_TYPES },
    { name: "brief", label: "Brief description", type: "textarea", required: true, placeholder: "Briefly describe the matter (no confidential information).", counter: true },
  ],
  submitLabel: "Request consultation",
  reference: "KIP-CONS",
};

const ipInquiryConfig: FormConfig = {
  title: "IP Inquiry",
  eyebrow: "Contact",
  description: "Ask a specific IP question. Note that general information provided is not legal advice.",
  fields: [
    { name: "name", label: "Full name", type: "text", required: true, placeholder: "Your name" },
    { name: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
    { name: "topic", label: "Topic", type: "select", required: true, options: INQUIRY_TYPES },
    { name: "question", label: "Your question", type: "textarea", required: true, placeholder: "Ask your IP question (no confidential information).", counter: true },
  ],
  submitLabel: "Submit inquiry",
  reference: "KIP-IPQ",
};

const researchInquiryConfig: FormConfig = {
  title: "Research Inquiry",
  eyebrow: "Contact",
  description: "Propose a research collaboration or commission a research output.",
  fields: [
    { name: "name", label: "Full name", type: "text", required: true, placeholder: "Your name" },
    { name: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
    { name: "organisation", label: "Organisation", type: "text", placeholder: "Optional" },
    { name: "topic", label: "Research topic", type: "text", required: true, placeholder: "e.g. 'Nepal participation in PCT'" },
    { name: "brief", label: "Brief", type: "textarea", required: true, placeholder: "Briefly describe the research need (no confidential information).", counter: true },
  ],
  submitLabel: "Submit research inquiry",
  reference: "KIP-RES",
};

const generalContactConfig: FormConfig = {
  title: "General Contact",
  eyebrow: "Contact",
  description: "General enquiries about KIPLAN IP.",
  fields: [
    { name: "name", label: "Full name", type: "text", required: true, placeholder: "Your name" },
    { name: "email", label: "Email", type: "email", required: true, placeholder: "you@example.com" },
    { name: "subject", label: "Subject", type: "text", required: true, placeholder: "Subject of your message" },
    { name: "message", label: "Message", type: "textarea", required: true, placeholder: "Your message", counter: true },
  ],
  submitLabel: "Send message",
  reference: "KIP-GEN",
};

export function ConsultationForm() { return <InquiryForm config={consultationConfig} />; }
export function IPInquiryForm() { return <InquiryForm config={ipInquiryConfig} />; }
export function ResearchInquiryForm() { return <InquiryForm config={researchInquiryConfig} />; }
export function GeneralContactForm() { return <InquiryForm config={generalContactConfig} />; }
