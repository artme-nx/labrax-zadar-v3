import { Reveal } from "@/components/reveal";

export function Artwork({
  n,
  tag,
  title,
  vernacular,
  medium,
  note,
  src,
  alt,
  align = "left",
}: {
  n: string;
  tag: string;
  title: string;
  vernacular?: string;
  medium: string;
  note: string;
  src: string;
  alt: string;
  align?: "left" | "right";
}) {
  const labelAlign = align === "left" ? "items-start text-left" : "items-end text-right md:ml-auto";

  return (
    <div className="border-t border-surface-line px-6 py-24 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <figure className="mx-auto w-full max-w-2xl">
            <div className="border border-surface-line p-2 md:p-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-card">
                <img
                  src={`${src}?auto=format&fit=crop&w=1200&q=78`}
                  alt={alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </figure>
        </Reveal>

        <Reveal delay={0.12}>
          <div className={`mx-auto mt-10 flex max-w-2xl flex-col gap-3 md:mt-14 ${labelAlign}`}>
            <span className="font-label text-[0.66rem] uppercase tracking-[0.3em] text-bronze">
              Izložak {n} — {tag}
            </span>
            <h3 className="font-display text-3xl italic leading-[1.1] text-foreground md:text-4xl">
              {title}
            </h3>
            {vernacular && (
              <span className="font-label text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
                {vernacular}
              </span>
            )}
            <p className="font-label text-[0.68rem] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground max-w-md">
              Medij: {medium}
            </p>
            <p className="max-w-md font-sans text-[0.98rem] font-light italic leading-relaxed text-foreground/75">
              {note}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
