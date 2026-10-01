// Centralised navigation config — exactly 6 top-level items per spec.

export interface NavChild {
  label: string;
  href: string;
  description?: string;
  group?: string;
}

export interface NavSection {
  label: string;
  href: string;
  children?: NavChild[];
}

export const NAV: NavSection[] = [
  {
    label: "HOME",
    href: "/",
  },
  {
    label: "IP RIGHTS",
    href: "/ip-rights",
    children: [
      { label: "Trademarks", href: "/ip-rights/trademarks", description: "Signs distinguishing goods or services." },
      { label: "Patents", href: "/ip-rights/patents", description: "Exclusive rights for new, non-obvious inventions." },
      { label: "Industrial Designs", href: "/ip-rights/industrial-designs", description: "Ornamental or aesthetic aspects of articles." },
      { label: "Copyright", href: "/ip-rights/copyright", description: "Original literary and artistic works." },
      { label: "Trade Secrets", href: "/ip-rights/trade-secrets", description: "Commercially valuable secret information." },
      { label: "Geographical Indications", href: "/ip-rights/geographical-indications", description: "Origin-linked product qualities." },
      { label: "Domain / Online IP", href: "/ip-rights/domain-online-ip", description: "Domains, online platforms, digital enforcement." },
      { label: "IP Portfolio", href: "/ip-rights/ip-portfolio", description: "Strategy across multiple IP rights." },
    ],
  },
  {
    label: "RESOURCES",
    href: "/resources",
    children: [
      { label: "General Resources", href: "/resources/general", description: "IP basics, dictionary, FAQs, guides.", group: "General" },
      { label: "IP Basics", href: "/resources/general/ip-basics", group: "General" },
      { label: "IP Dictionary", href: "/resources/general/dictionary", group: "General" },
      { label: "FAQs", href: "/resources/general/faqs", group: "General" },
      { label: "Guides", href: "/resources/general/guides", group: "General" },
      { label: "Identify Your IP", href: "/resources/general/identify-your-ip", group: "General" },
      { label: "Professional Resources", href: "/resources/professional", description: "Research, treaties, classifications, offices.", group: "Professional" },
      { label: "Research Centre", href: "/resources/professional/research", group: "Professional" },
      { label: "Nepal IP", href: "/resources/professional/nepal-ip", group: "Professional" },
      { label: "International IP", href: "/resources/professional/international-ip", group: "Professional" },
      { label: "Laws", href: "/resources/professional/laws", group: "Professional" },
      { label: "Treaties", href: "/resources/professional/treaties", group: "Professional" },
      { label: "Classifications", href: "/resources/professional/classifications", group: "Professional" },
      { label: "Countries", href: "/resources/professional/countries", group: "Professional" },
      { label: "Country Participation", href: "/resources/professional/country-participation", group: "Professional" },
      { label: "Organizations", href: "/resources/professional/organizations", group: "Professional" },
      { label: "IP Offices", href: "/resources/professional/offices", group: "Professional" },
      { label: "Filing Systems", href: "/resources/professional/filing-systems", group: "Professional" },
      { label: "Source Library", href: "/resources/professional/sources", group: "Professional" },
      { label: "Document Library", href: "/resources/professional/documents", group: "Professional" },
    ],
  },
  {
    label: "ABOUT",
    href: "/about",
    children: [
      { label: "KIPLAN IP", href: "/about/kiplan-ip", description: "The platform and its positioning." },
      { label: "KIPLAN Law Firm", href: "/about/kiplan-law-firm", description: "The associated law firm." },
      { label: "Team", href: "/about/team", description: "Role-based team overview." },
      { label: "Philosophy", href: "/about/philosophy", description: "Practice philosophy." },
      { label: "Research Philosophy", href: "/about/research-philosophy", description: "Source-first, primary-source verification." },
    ],
  },
  {
    label: "PUBLICATIONS",
    href: "/publications",
    children: [
      { label: "Research Papers", href: "/publications/research-papers", description: "Full research papers (23-section structure)." },
      { label: "Draft Papers", href: "/publications/draft-papers", description: "Drafts — clearly labelled DRAFT." },
      { label: "Working Papers", href: "/publications/working-papers", description: "Working papers — subject to revision." },
      { label: "Research Notes", href: "/publications/research-notes", description: "Concise research notes." },
      { label: "Reports", href: "/publications/reports", description: "Reports." },
      { label: "IP Updates", href: "/publications/ip-updates", description: "Structural IP updates." },
      { label: "Articles", href: "/publications/articles", description: "Articles." },
      { label: "Commentaries", href: "/publications/commentaries", description: "Commentaries." },
    ],
  },
  {
    label: "CONTACT",
    href: "/contact",
    children: [
      { label: "Consultation", href: "/contact/consultation", description: "Request a consultation." },
      { label: "IP Inquiry", href: "/contact/ip-inquiry", description: "IP-related inquiry." },
      { label: "Research Inquiry", href: "/contact/research-inquiry", description: "Research collaboration inquiry." },
      { label: "General Contact", href: "/contact/general", description: "General enquiries." },
    ],
  },
];

export function findNavSection(href: string) {
  return NAV.find((n) => n.href === href || (n.children && n.children.some((c) => c.href === href)));
}
