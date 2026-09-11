import { Container } from "@/components/ui/Container";
import Image from "next/image";

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

      <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col items-center justify-between gap-5 py-8 sm:gap-6 sm:py-7 lg:gap-3 lg:py-4">
        <div className="flex w-full flex-1 flex-col items-center justify-center text-center">
          <span className="mb-6 inline-flex items-center rounded-full border border-brand-pistachio/80 bg-brand-ink/85 px-4 py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-brand-pistachio shadow-[0_8px_24px_rgba(16,18,15,0.35)] backdrop-blur-sm sm:mb-4 sm:px-5 sm:py-2.5 sm:text-xs">
            Agence immobilière nouvelle génération · Casablanca
          </span>

          <h1 className="max-w-4xl text-balance font-sans text-2xl font-extrabold uppercase leading-[1.02] tracking-[0.01em] text-white sm:text-4xl sm:leading-[0.98] sm:tracking-[0.02em] lg:text-5xl xl:text-6xl">
            Propriétaires à Casablanca,
            <br />
            pourquoi encore
            <br />
            <span className="text-brand-pistachio">payer une commission ?</span>
          </h1>

          <div className="my-6 h-px w-3/4 max-w-xl bg-brand-pistachio/70 sm:my-4" />

          <div className="relative flex w-full max-w-sm flex-col items-center rounded-[2rem] border-2 border-brand-pistachio bg-brand-ink/90 px-6 py-8 shadow-[0_24px_70px_-18px_rgba(165,210,50,0.85)] backdrop-blur-md sm:max-w-md sm:px-10 sm:py-5">
            <div className="-mt-12 mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-brand-pistachio text-brand-ink shadow-[0_0_30px_rgba(165,210,50,0.7)]">
              <CrownIcon />
            </div>
            <span className="text-base font-semibold text-white sm:text-lg">Avec ImmoZen Groupe,</span>
            <strong className="font-sans text-7xl font-extrabold leading-none text-brand-pistachio sm:text-7xl">
              0 DH
            </strong>
            <span className="text-sm font-semibold text-white sm:text-base">
              de commission propriétaire<span className="text-brand-pistachio">*</span>
            </span>
          </div>

          <p className="mt-5 text-sm font-medium text-white/90 sm:mt-3 sm:text-base">
            <strong className="text-brand-pistachio">Casablanca</strong>
          </p>
        </div>

      </Container>
    </section>
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



