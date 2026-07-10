export function SiteFooter() {
  return (
    <footer className="border-t border-surface-line px-6 py-14 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl italic tracking-wide text-foreground/80">Labrax</p>
          <p className="mt-1 font-label text-[0.62rem] uppercase tracking-[0.28em] text-muted-foreground">
            Fish &amp; Wine Bar — Zadar, Hrvatska
          </p>
        </div>
        <p className="font-label text-[0.6rem] uppercase tracking-[0.24em] text-muted-foreground">
          © 2026 Labrax. Stalni postav, bez kataloga za van.
        </p>
      </div>
    </footer>
  );
}
