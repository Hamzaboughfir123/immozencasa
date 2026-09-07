import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

const BENEFITS = [
  {
    icon: ZeroIcon,
    title: "0 DH propriétaire",
    text: "Notre réussite, c'est de vendre votre bien — pas de vous facturer. 0 DH de commission ImmoZen Groupe, selon les conditions applicables.*",
    highlight: true,
  },
  {
    icon: SparkIcon,
    title: "Votre bien en lumière",
    text: "Une présentation qui donne envie et met en valeur chaque atout de votre bien dès le premier regard.",
    highlight: false,
  },
  {
    icon: EyeIcon,
    title: "Les bons acheteurs",
    text: "Votre annonce gagne en visibilité auprès de personnes réellement prêtes à acheter ou à louer.",
    highlight: false,
  },
  {
    icon: HandshakeIcon,
    title: "À vos côtés",
    text: "Un accompagnement simple et humain, de la première visite jusqu'à la signature finale.",
    highlight: false,
  },
];

export function BenefitsSection() {
  return (
    <section id="pourquoi-immozen" className="relative overflow-hidden bg-brand-beige/35 py-4 sm:py-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 overflow-hidden opacity-[0.32]">
        <Image
          src="/images/property-types/villa.jpg"
          alt=""
          fill
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-beige/80 to-brand-beige/35" />
      </div>

      <div className="pointer-events-none absolute right-[8%] top-8 hidden h-44 w-44 rotate-[-5deg] items-center justify-center rounded-full border-[3px] border-brand-forest/80 bg-white/45 text-center text-brand-forest shadow-[0_12px_35px_rgba(6,115,61,0.12)] backdrop-blur-[2px] lg:flex xl:right-[14%]">
        <div>
          <strong className="block font-display text-6xl font-bold leading-none">0 DH</strong>
          <span className="mt-1 block -rotate-2 text-sm font-extrabold uppercase leading-tight">
            de commission
            <br />
            propriétaire<span className="text-brand-pistachio">*</span>
          </span>
        </div>
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Propriétaires au Maroc"
          title={
            <>
              Votre bien mérite
              <br className="hidden sm:block" /> une meilleure histoire.
            </>
          }
          description="Nous faisons tout pour que votre bien se démarque, trouve le bon acquéreur et vous rapporte davantage, sans commission pour vous, propriétaire."
          className="max-w-4xl"
        />

        <div className="mt-3 grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 80}>
              <div
                className={`group relative min-w-0 h-full overflow-visible rounded-3xl p-3 transition-all duration-300 ${
                  benefit.highlight
                    ? "bg-brand-forest text-white shadow-[0_20px_60px_-20px_rgba(6,115,61,0.5)] sm:p-4"
                    : "bg-white/85 text-brand-ink ring-1 ring-brand-forest/10 backdrop-blur-sm hover:-translate-y-1 hover:shadow-[0_20px_45px_-24px_rgba(16,18,15,0.35)]"
                }`}
              >
                {benefit.highlight ? (
                  <span className="absolute -right-3 -top-3 flex h-14 w-14 rotate-12 flex-col items-center justify-center rounded-full border-2 border-dashed border-brand-pistachio bg-brand-ink text-center text-[9px] font-bold uppercase leading-tight text-brand-pistachio shadow-lg">
                    100%
                    <br />
                    garanti
                  </span>
                ) : null}
                <div
                  className={`mb-2 flex h-9 w-9 items-center justify-center rounded-2xl ${
                    benefit.highlight
                      ? "bg-brand-pistachio text-brand-ink"
                      : "bg-white text-brand-forest"
                  }`}
                >
                  <benefit.icon />
                </div>
                <h3 className="font-display text-base font-semibold sm:text-lg">
                  {benefit.title}
                </h3>
                <p
                  className={`mt-1.5 text-xs leading-snug sm:text-[13px] ${
                    benefit.highlight ? "text-white/85" : "text-brand-ink/65"
                  }`}
                >
                  {benefit.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-3 flex justify-center">
          <Reveal delay={320}>
            <Button href="#confier-mon-bien" size="md" className="px-6 sm:px-8">
              Je confie mon bien à ImmoZen Groupe
              <ArrowIcon />
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2l2.2 6.8L21 11l-6.8 2.2L12 20l-2.2-6.8L3 11l6.8-2.2L12 2z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 11l4-4 4 3 4-3 4 4M7 10l4 5 4-5M5 12l-2 3 3 3M19 12l2 3-3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ZeroIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 16L16 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
