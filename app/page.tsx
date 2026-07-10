import { SiteChrome } from "@/components/site-chrome";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { Artwork } from "@/components/artwork";

const IMG = {
  carpaccio: "https://images.unsplash.com/photo-1777891257734-3d86f2fc3f53",
  risotto: "https://images.unsplash.com/photo-1778104683416-5fc7eba1799f",
  linguine: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
  gamberi: "https://images.unsplash.com/photo-1559847844-5315695dadae",
  branzino: "https://images.unsplash.com/photo-1700760933394-976f1d27dff2",
  cellar: "https://images.unsplash.com/photo-1547595628-c61a29f496f0",
  dessert: "https://images.unsplash.com/photo-1551024506-0bccd828d307",
};

const WINES = [
  { n: "01", name: "Bora — Pošip", note: "bijelo, domaća sorta" },
  { n: "02", name: "Sladićeva Plavina", note: "crno, lagano ohlađeno" },
  { n: "03", name: "Bomary", note: "desertno, vino i maraschino, Degarra" },
  { n: "04", name: "Prosecco", note: "pjenušavo, za početak večeri" },
];

export default function Home() {
  return (
    <>
      <SiteChrome />

      <main className="flex-1 bg-background">
        {/* PRAG — Threshold */}
        <section
          id="prag"
          className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center"
          style={{ backgroundImage: "var(--hero-vignette)" }}
        >
          <p className="font-label text-[0.68rem] uppercase tracking-[0.36em] text-bronze">
            Zadar · Stari grad · Stalni postav
          </p>
          <h1
            className="mt-8 font-display italic text-foreground"
            style={{ fontSize: "var(--hero-title-size)", lineHeight: "var(--hero-title-leading)" }}
          >
            Labrax
          </h1>
          <p className="mt-4 font-label text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Fish &amp; Wine Bar
          </p>
          <p className="mx-auto mt-10 max-w-md font-sans text-base font-light leading-relaxed text-foreground/70">
            Riba, školjkaši i vino s jadranske obale, izloženi jedan po jedan —
            kao djela na zidu, ne kao stavke na jelovniku.
          </p>
          <a
            href="#uvod"
            className="mt-16 font-label text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-bronze"
          >
            Prva dvorana ↓
          </a>
        </section>

        {/* UVOD — Prologue / curator's statement */}
        <section id="uvod" className="border-t border-surface-line px-6 py-28 md:px-10 md:py-40">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <span className="font-label text-[0.66rem] uppercase tracking-[0.3em] text-bronze">
                01 — Uvod
              </span>
              <h2 className="mt-5 font-display text-4xl italic leading-tight text-foreground md:text-5xl">
                O ovom postavu
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 space-y-6 font-sans text-[1.05rem] font-light leading-relaxed text-foreground/75">
                <p>
                  Chef Saša Began godinama je oblikovao tanjure u Foši, jednoj od
                  najuglednijih ribljih adresa u Zadru, prije nego što je 2024.
                  otvorio vlastiti prostor na Poljani Šime Budinića — korak od
                  crkve sv. Šime, u samom srcu starog grada.
                </p>
                <p>
                  Njegov rukopis nije klasična dalmatinska konoba. Riba se ovdje
                  rastavlja, preslaguje, iznenađuje — fuzija bez straha od
                  kontrasta. Rezultat je uvrštenje u Michelin Guide i ocjena
                  15/20 Gault&amp;Millau, priznanja rijetka za grad ove veličine.
                </p>
                <p className="border-l border-surface-line pl-6 font-display text-xl italic text-foreground/85">
                  &ldquo;Svaki zalogaj osjeća se kao ljubavno pismo Jadranu.&rdquo;
                  <span className="mt-2 block font-label text-[0.62rem] not-italic uppercase tracking-[0.24em] text-muted-foreground">
                    — gost, TripAdvisor
                  </span>
                </p>
                <p>
                  Pedesetak recenzija, ocjena 5,0 od 5 — rijetko je slaganje
                  gostiju toliko dosljedno.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ZBIRKA — The Collection */}
        <section id="zbirka">
          <div className="border-t border-surface-line px-6 pt-28 md:px-10 md:pt-40">
            <div className="mx-auto max-w-2xl">
              <Reveal>
                <span className="font-label text-[0.66rem] uppercase tracking-[0.3em] text-bronze">
                  02 — Zbirka
                </span>
                <h2 className="mt-5 font-display text-4xl italic leading-tight text-foreground md:text-5xl">
                  Šest komada
                </h2>
                <p className="mt-6 font-sans text-base font-light leading-relaxed text-foreground/70">
                  Iz stalnog postava, jedan po jedan, bez žurbe — kao u galeriji,
                  ne u jelovniku.
                </p>
              </Reveal>
            </div>
          </div>

          <Artwork
            n="I"
            tag="Predjelo"
            title="Karpačo odležanog brancina"
            vernacular="Dicentrarchus labrax"
            medium="odležani brancin, fermentirani krem od naranče, morska sol"
            note="Riba odleži dok meso ne postane gotovo prozirno — tehnika koju je chef Began doveo do ruba onoga što svježina još dopušta."
            src={IMG.carpaccio}
            alt="Tanko rezano karpačo ribe na tanjuru, gornji kut"
            align="left"
          />
          <Artwork
            n="II"
            tag="Rižoto"
            title="Arancini di nero"
            vernacular="crni rižoto, jastog, gorgonzola"
            medium="crni rižoto od sipe, tartar od jastoga, krem od gorgonzole i parmigiana"
            note="Rižoto se prvo skuha do savršenstva, zatim — protiv vlastite logike — panira i prži. Iznutra kremasto, izvana krhko."
            src={IMG.risotto}
            alt="Zdjela crnog rižota s morskim plodovima, pogled odozgo"
            align="right"
          />
          <Artwork
            n="III"
            tag="Tjestenina"
            title="Linguine alla granseola"
            vernacular="modra rakovica, rajčica, bisque"
            medium="domaći linguine, meso modre rakovice, pikantni umak od rajčice, bisque od rakovice"
            note="Bisque se kuha danima prije nego što uopće dotakne tanjur — koncentrat mora, ne dodatak."
            src={IMG.linguine}
            alt="Tava tjestenine s morskim plodovima i rajčicama"
            align="left"
          />
          <Artwork
            n="IV"
            tag="Škampi"
            title="Gamberi al naturale"
            vernacular="jadranski škampi, mjed i limun"
            medium="škampi s Jadrana, morska sol, limun, pribor od mjedi"
            note="Bez umaka koji bi se isprečio — samo škamp, vatra i minuta manje nego što biste očekivali."
            src={IMG.gamberi}
            alt="Škampi na bijelom tanjuru s limunom i mjedenim priborom"
            align="right"
          />
          <Artwork
            n="V"
            tag="Glavno jelo"
            title="Odležani brancin za dvoje"
            vernacular="dimljeni pire, crna leća beluga"
            medium="cijeli odležani brancin, dimljeni pire krumpira, crna leća beluga, mladi špinat, pečena mrkva"
            note="Jelo se dijeli — kao i pažnja koju mu posvećuje cijela kuhinja dok stiže do stola."
            src={IMG.branzino}
            alt="Cijela pečena riba na tanjuru uz čašu crnog vina"
            align="left"
          />
          <Artwork
            n="VI"
            tag="Desert"
            title="Zelena kruška"
            vernacular="tonka, lješnjak, maslinovo ulje"
            medium="kruška, krem sir, maslinovo ulje, keks od tonke i lješnjaka, pire od kruške"
            note="Slatko je ovdje tek nagovještaj — maslinovo ulje i tonka drže desert bliže vinskoj karti nego kolaču."
            src={IMG.dessert}
            alt="Desert na tamnom tanjuru s karamelom, krupni kadar"
            align="right"
          />
        </section>

        {/* PODRUM — The Cellar */}
        <section id="podrum" className="border-t border-surface-line px-6 py-28 md:px-10 md:py-40">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <span className="font-label text-[0.66rem] uppercase tracking-[0.3em] text-bronze">
                03 — Podrum
              </span>
              <h2 className="mt-5 font-display text-4xl italic leading-tight text-foreground md:text-5xl">
                Podrum
              </h2>
              <p className="mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-foreground/70">
                Karta koja pokriva cijelu Hrvatsku, s pokojim stranim gostom. U
                žarištu — domaća imena i vinarije koje rijetko dođu do velikih
                lista.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-14 md:grid-cols-[1.1fr_1fr] md:items-center">
              <Reveal>
                <div className="border border-surface-line p-2 md:p-3">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-card">
                    <img
                      src={`${IMG.cellar}?auto=format&fit=crop&w=1100&q=78`}
                      alt="Vino se toči u čašu u tamnom, prigušenom prostoru"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <ul className="flex flex-col">
                  {WINES.map((w) => (
                    <li
                      key={w.n}
                      className="flex items-baseline gap-5 border-t border-surface-line py-5 first:border-t-0"
                    >
                      <span className="font-label text-xs tracking-[0.2em] text-bronze">{w.n}</span>
                      <span className="flex flex-1 flex-col">
                        <span className="font-display text-2xl italic text-foreground/85">{w.name}</span>
                        <span className="mt-1 font-label text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                          {w.note}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* POSJET — Visit */}
        <section id="posjet" className="border-t border-surface-line px-6 py-28 md:px-10 md:py-40">
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <span className="font-label text-[0.66rem] uppercase tracking-[0.3em] text-bronze">
                04 — Posjet
              </span>
              <h2 className="mt-5 font-display text-4xl italic leading-tight text-foreground md:text-5xl">
                Posjet
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 grid grid-cols-3 gap-6 border-y border-surface-line py-8">
                <div className="text-center">
                  <p className="font-display text-3xl italic text-bronze md:text-4xl">5.0</p>
                  <p className="mt-1 font-label text-[0.58rem] uppercase tracking-[0.16em] text-muted-foreground">
                    Tripadvisor · 50 recenzija
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl italic text-bronze md:text-4xl">MG</p>
                  <p className="mt-1 font-label text-[0.58rem] uppercase tracking-[0.16em] text-muted-foreground">
                    Michelin Guide
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl italic text-bronze md:text-4xl">15/20</p>
                  <p className="mt-1 font-label text-[0.58rem] uppercase tracking-[0.16em] text-muted-foreground">
                    Gault&amp;Millau
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-14 flex flex-col gap-8 md:flex-row md:justify-between">
                <div>
                  <p className="font-label text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
                    Adresa
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Poljana+%C5%A0ime+Budini%C4%87a+1+Zadar"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block font-display text-xl italic text-foreground/85 hover:text-bronze"
                  >
                    Poljana Šime Budinića 1
                    <br />
                    23000 Zadar
                  </a>
                </div>
                <div>
                  <p className="font-label text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
                    Rezervacije
                  </p>
                  <a
                    href="tel:+38523317401"
                    className="mt-2 block font-display text-xl italic text-foreground/85 hover:text-bronze"
                  >
                    +385 23 317 401
                  </a>
                  <a
                    href="mailto:labr@net.hr"
                    className="mt-1 block font-display text-xl italic text-foreground/85 hover:text-bronze"
                  >
                    labr@net.hr
                  </a>
                </div>
              </div>
              <p className="mt-10 font-sans text-sm font-light italic text-muted-foreground">
                Večernji termini, rezervacija toplo preporučena — postav je malen.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
