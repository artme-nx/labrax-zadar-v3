"use client";

import { useEffect, useState } from "react";

const ROOMS = [
  { href: "#prag", n: "00", label: "Prag" },
  { href: "#uvod", n: "01", label: "Uvod" },
  { href: "#zbirka", n: "02", label: "Zbirka" },
  { href: "#podrum", n: "03", label: "Podrum" },
  { href: "#posjet", n: "04", label: "Posjet" },
];

// NOTE: the fullscreen index overlay is rendered as a SIBLING of <header>,
// not nested inside it — a fixed/backdrop-blur header creates a new
// containing/stacking context that traps a fixed-position child nav on
// mobile Safari. Keeping them siblings inside this single fragment avoids it.
export function SiteChrome() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 pointer-events-none">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
          <a
            href="#prag"
            className="pointer-events-auto font-display text-lg tracking-[0.14em] text-foreground/90"
          >
            LABRAX
          </a>

          <button
            type="button"
            aria-label={open ? "Zatvori kazalo" : "Otvori kazalo izložbe"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`pointer-events-auto font-label text-[0.68rem] uppercase tracking-[0.32em] transition-colors ${
              scrolled ? "text-bronze" : "text-muted-foreground"
            } hover:text-bronze-bright`}
          >
            {open ? "Zatvori" : "Kazalo"}
          </button>
        </div>
      </header>

      <nav
        aria-hidden={!open}
        className={`fixed inset-0 z-50 flex flex-col justify-between bg-background transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-6 md:px-10 md:py-8">
          <span className="font-display text-lg tracking-[0.14em] text-foreground/90">LABRAX</span>
          <button
            type="button"
            aria-label="Zatvori kazalo"
            onClick={() => setOpen(false)}
            className="font-label text-[0.68rem] uppercase tracking-[0.32em] text-bronze hover:text-bronze-bright"
          >
            Zatvori
          </button>
        </div>

        <ul className="mx-auto w-full max-w-[1400px] flex-1 flex flex-col justify-center gap-1 px-6 md:px-10">
          {ROOMS.map((r) => (
            <li key={r.href} className="border-t border-surface-line first:border-t-0">
              <a
                href={r.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-5 py-4 md:py-5"
              >
                <span className="font-label text-xs tracking-[0.2em] text-bronze">{r.n}</span>
                <span className="font-display text-3xl italic text-foreground/80 transition-colors group-hover:text-foreground md:text-5xl">
                  {r.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mx-auto w-full max-w-[1400px] px-6 py-6 md:px-10 md:py-8">
          <p className="font-label text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
            Poljana Šime Budinića 1, Zadar — +385 23 317 401
          </p>
        </div>
      </nav>
    </>
  );
}
