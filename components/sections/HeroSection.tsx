import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Image from "next/image";

const PROPERTY_KINDS = [
  "Appartement",
  "Villa",
  "Terrain",
  "Commerce",
  "Riad",
  "Immeuble",
];

export function HeroSection() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-brand-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/property-types/villa.jpg"
          alt="Villa contemporaine avec piscine et palmiers dans la région de Casablanca"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/75 via-brand-ink/40 to-brand-ink/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/55 via-brand-ink/5 to-transparent" />
      </div>

      <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-center gap-8 py-10">
        <div className="max-w-3xl lg:max-w-xl xl:max-w-2xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-ink/90 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-pistachio shadow-[0_8px_24px_rgba(16,18,15,0.35)] backdrop-blur-sm ring-2 ring-brand-pistachio/70">
            Agence immobilière nouvelle génération · Maroc
          </span>

          <h1 className="text-balance font-display text-4xl font-medium leading-[1.02] text-white sm:text-5xl lg:text-6xl">
            Vendez votre bien,
            <br />
            sans payer de <span className="text-brand-pistachio">commission.</span>
          </h1>

          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-white/80 sm:text-lg">
            Votre projet immobilier accompagné par des experts, avec 0 DH de
            commission pour les propriétaires.*
            <span className="mt-2 flex items-center gap-2 text-sm font-medium text-white/90">
              <span className="text-brand-pistachio" aria-hidden="true">
                <LocationIcon />
              </span>
              <span>
                <strong className="text-brand-pistachio">Priorité Casablanca</strong>
                {' · '}Rabat · Marrakech · Tanger · Agadir
              </span>
            </span>
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="#confier-mon-bien" size="lg">
              Je confie mon bien à ImmoZen Groupe
            </Button>
            <Button href="#simulateur" variant="outline" size="lg">
              Estimer mon économie
            </Button>
          </div>
        </div>

        <div className="relative mt-1 flex w-full max-w-xs items-center gap-3 self-center rounded-2xl border border-brand-pistachio/35 bg-brand-ink/75 p-4 shadow-[0_22px_60px_-20px_rgba(165,210,50,0.75)] backdrop-blur-md lg:absolute lg:left-1/2 lg:top-[39%] lg:mt-0 lg:w-64 lg:-translate-x-1/2 lg:-translate-y-1/2 xl:w-72">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-pistachio text-brand-ink shadow-[0_0_25px_rgba(165,210,50,0.35)]">
            <CrownIcon />
          </div>
          <div>
            <strong className="block font-display text-3xl leading-none text-brand-pistachio">
              0 DH
            </strong>
            <span className="mt-1 block text-xs font-medium leading-snug text-white/90">
              de commission pour les propriétaires.*
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/15 pt-6 text-sm text-white/60">
          {PROPERTY_KINDS.map((kind, i) => (
            <span key={kind} className="flex items-center gap-3">
              {kind}
              {i < PROPERTY_KINDS.length - 1 ? (
                <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
              ) : null}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function LocationIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 7l4.2 3.2L12 4l4.8 6.2L21 7l-2 10H5L3 7z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6 20h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
