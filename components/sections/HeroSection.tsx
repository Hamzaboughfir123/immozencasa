import { OpenPropertyLeadButton } from "@/components/property-lead/OpenPropertyLeadButton";
import Image from "next/image";

export function HeroSection() {
  return (
    <section id="accueil" className="coastal-hero" aria-labelledby="hero-title">
      <Image src="/images/hero-terrace-casablanca.png" alt="Terrasse contemporaine donnant sur l’océan et la côte de Casablanca" fill priority sizes="100vw" className="coastal-hero__image" />
      <div className="coastal-hero__wash" aria-hidden="true" />
      <div className="coastal-hero__content">
        <p className="coastal-hero__eyebrow">Agence immobilière nouvelle génération · Casablanca</p>
        <h1 id="hero-title" className="coastal-hero__title">
          <span>Propriétaires</span>
          <span className="coastal-hero__city">à Casablanca,</span>
          <span className="coastal-hero__question">pourquoi encore<br />payer une commission ?</span>
        </h1>
        <div className="coastal-hero__rule" aria-hidden="true" />
        <p className="coastal-hero__intro">Avec ImmoZen Groupe,</p>
        <p className="coastal-hero__offer"><strong><span>0</span><span>DH</span></strong><span>de commission propriétaire<sup>*</sup></span></p>
        <p className="coastal-hero__transactions">Vente et location</p>
        <div className="coastal-hero__actions">
          <OpenPropertyLeadButton className="coastal-hero__primary">Confier mon bien <span aria-hidden="true">↗</span></OpenPropertyLeadButton>
          <OpenPropertyLeadButton variant="ghost" className="coastal-hero__estimate">Estimer mon bien <span aria-hidden="true">⟶</span></OpenPropertyLeadButton>
        </div>
      </div>
      <div className="coastal-hero__location">
        <svg width="34" height="42" viewBox="0 0 24 30" fill="none" aria-hidden="true">
          <path d="M12 1a10 10 0 0 0-10 10c0 7 10 18 10 18s10-11 10-18A10 10 0 0 0 12 1Z" fill="currentColor" />
          <circle cx="12" cy="11" r="4" fill="#faf8f2" />
        </svg>
        <span>Casablanca</span>
      </div>
    </section>
  );
}
