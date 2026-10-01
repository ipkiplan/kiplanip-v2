"use client";

import { Link } from "@/components/router/HashRouter";
import { SectionShell, MotionSection } from "@/components/kiplan/motion-section";
import { Breadcrumbs } from "@/components/kiplan/breadcrumbs";

export function LegalPage({ topic }: { topic: "privacy" | "terms" | "disclaimer" | "copyright" | "accessibility" | "sitemap" }) {
  const data = {
    privacy: {
      title: "Privacy",
      body: [
        "KIPLAN IP respects your privacy. This privacy statement describes how KIPLAN IP handles information you provide through the contact forms and AI research interface on this website.",
        "Information you submit through contact and inquiry forms (name, email, organisation, matter type, brief description) is used solely to respond to your inquiry. KIPLAN IP does not share inquiry information with third parties.",
        "The AI research interface processes your questions on the client side. No question text is transmitted to a third-party AI service through this website.",
        "KIPLAN IP does not currently use analytics cookies. The website uses local storage for theme preference (light/dark) only.",
        "If you have questions about this privacy statement, please contact KIPLAN IP through the verified contact channels once available.",
      ],
    },
    terms: {
      title: "Terms of Use",
      body: [
        "By accessing this website you agree to these terms of use. The information provided on this website is general in nature and is intended for informational and research purposes only.",
        "It does not constitute legal advice. Laws and official procedures may change without notice and must be verified against authoritative sources. AI-assisted content is not legal advice and does not become the evidence on which a decision is made.",
        "Specific matters may require professional legal advice from a qualified practitioner.",
        "KIPLAN IP does not warrant that the information on this website is complete, accurate or up to date. Where information is marked 'Verification required', it has not been verified by KIPLAN IP and must be verified directly with the issuing organisation.",
        "Draft and working papers are subject to revision. They are not peer reviewed and do not carry institutional endorsement.",
        "KIPLAN IP is the Intellectual Property division of KIPLAN Law Firm, Kathmandu, Nepal. Specific contact details require verification.",
      ],
    },
    disclaimer: {
      title: "Disclaimer",
      body: [
        "The information provided on this website is general in nature and is intended for informational and research purposes only. It does not constitute legal advice.",
        "Laws and official procedures may change without notice and must be verified against authoritative sources (WIPO, WTO, EPO, USPTO, Government of Nepal and other relevant authorities).",
        "AI-assisted content helps you find and understand evidence; it does not become the evidence on which a decision is made. AI output is Level 5 (KIPLAN/AI Interpretation) and is never presented as Level 1 (authoritative text).",
        "Where information is marked 'Verification required', it has not been verified by KIPLAN IP. Specific matters may require professional legal advice from a qualified practitioner.",
        "KIPLAN IP does not publish fabricated content. Attorney names, case studies, statistics and credentials are not invented.",
      ],
    },
    copyright: {
      title: "Copyright",
      body: [
        "The content of this website (text, graphics, logos, icons, and software) is © KIPLAN IP, Kathmandu, Nepal, except where otherwise indicated.",
        "Publicly verifiable structural facts about international IP treaties, organisations and classification systems are presented with attribution to their authoritative sources (WIPO, WTO, EPO, USPTO). The structural facts themselves are not subject to copyright.",
        "KIPLAN IP's editorial and research content — including research papers, working papers, articles and IP updates — is published under the KIPLAN IP attribution. Draft and working papers are subject to revision.",
        "Trademarks and service marks referenced on this website are the property of their respective owners. WIPO, WTO, EPO and USPTO references are made for informational purposes only.",
      ],
    },
    accessibility: {
      title: "Accessibility",
      body: [
        "KIPLAN IP is committed to making this website accessible to all users, including those with disabilities.",
        "The website uses semantic HTML, ARIA labels, keyboard-navigable components, and respects the prefers-reduced-motion CSS media query.",
        "The website supports light and dark themes. The theme toggle is keyboard-accessible.",
        "If you encounter an accessibility issue, please contact KIPLAN IP through the verified contact channels once available.",
      ],
    },
    sitemap: {
      title: "Sitemap",
      body: [
        "KIPLAN IP is a single-page application using hash-based routing. The principal routes are listed below.",
        "Home — the KIPLAN IP homepage, including the Identify Your IP pathway and the Nepal, International, Research, AI Research, Publications and Contact sections.",
        "IP Rights — Trademarks, Patents, Industrial Designs, Copyright, Trade Secrets / Confidential Information, Geographical Indications, Domain / Online IP Issues, IP Portfolio / Multiple Rights.",
        "Resources — split into General Resources (IP Basics, IP Dictionary, FAQs, Guides, Identify Your IP) and Professional Resources (Research Centre, Nepal IP, International IP, Laws, Treaties, Classifications, Countries, Country Participation, Organizations, IP Offices, Filing Systems, Sources, Documents).",
        "About — KIPLAN IP, KIPLAN Law Firm, Team, Philosophy, Research Philosophy.",
        "Publications — Research Papers, Draft Papers, Working Papers, Research Notes, Reports, IP Updates, Articles, Commentaries.",
        "Contact — Get in Touch, Consultation, IP Inquiry, Research Inquiry, General Contact.",
        "Research — AI Research Interface, plus detail routes for Treaties, Classifications, Countries, Offices, Organizations, Filing Systems, Laws and Publications.",
        "Legal — Privacy, Terms of Use, Disclaimer, Copyright, Accessibility, Sitemap.",
      ],
    },
  }[topic];

  return (
    <MotionSection className="py-12 md:py-16">
      <SectionShell containerClassName="max-w-3xl">
        <Breadcrumbs items={[{ label: "Legal", href: "/" }, { label: data.title }]} />
        <h1 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-foreground">{data.title}</h1>
        <div className="mt-6 space-y-4 text-sm md:text-base text-foreground/90 leading-relaxed">
          {data.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/" className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground hover:border-[var(--color-accent)]/40 hover:text-[var(--color-accent)] transition-colors">
            Return home
          </Link>
        </div>
      </SectionShell>
    </MotionSection>
  );
}
