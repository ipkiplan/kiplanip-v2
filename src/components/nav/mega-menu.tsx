"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useRouter } from "@/components/router/HashRouter";
import type { NavSection, NavChild } from "@/data/nav";

export function MegaMenu({ section, onNavigate }: { section: NavSection; onNavigate?: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { path } = useRouter();
  const isActive = path === section.href || (section.children?.some((c) => path === c.href || path.startsWith(c.href + "/")));

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    // Close menu on route change — synced with router state
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [path]);

  function handleEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }
  function handleLeave() {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  if (!section.children || section.children.length === 0) {
    return (
      <Link
        to={section.href}
        className={`relative inline-flex items-center px-1 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-[var(--color-accent)] ${
          isActive ? "text-[var(--color-accent)]" : "text-foreground/80"
        }`}
      >
        {section.label}
      </Link>
    );
  }

  // Group children by `group` label
  const groups: Record<string, NavChild[]> = {};
  for (const c of section.children) {
    const g = c.group ?? "All";
    if (!groups[g]) groups[g] = [];
    groups[g].push(c);
  }
  const groupKeys = Object.keys(groups);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
    >
      <Link
        to={section.href}
        className={`relative inline-flex items-center gap-1 px-1 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-[var(--color-accent)] ${
          isActive ? "text-[var(--color-accent)]" : "text-foreground/80"
        }`}
        onClick={() => setOpen(false)}
      >
        {section.label}
        <ChevronDown
          className={`h-3 w-3 opacity-60 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </Link>

      {open && (
        <div
          role="menu"
          className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2"
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <div
            className="w-[680px] max-w-[90vw] rounded-xl border border-border bg-card p-4 shadow-xl"
            style={{ columns: groupKeys.length > 1 ? groupKeys.length : 1 }}
          >
            {groupKeys.map((g) => (
              <div key={g} className="break-inside-avoid px-2">
                {groupKeys.length > 1 && (
                  <div className="mb-2 mt-1 border-b border-border/60 pb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-accent)]">
                    {g}
                  </div>
                )}
                <ul className="space-y-0.5">
                  {groups[g].map((c, i) => (
                    <li key={i}>
                      <Link
                        to={c.href}
                        className="block rounded-md px-3 py-2 hover:bg-muted transition-colors"
                        onClick={() => {
                          setOpen(false);
                          onNavigate?.();
                        }}
                      >
                        <div className="text-sm font-medium text-foreground">{c.label}</div>
                        {c.description && (
                          <div className="mt-0.5 text-[11px] text-muted-foreground leading-snug">
                            {c.description}
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
