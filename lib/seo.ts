import type { Metadata } from "next";
import { CONTACT, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/constants";

export const DEFAULT_TITLE =
  "ImmoZen Groupe Casablanca | Agence immobilière — 0 DH de commission propriétaire";

export const DEFAULT_DESCRIPTION =
  "ImmoZen Groupe, agence immobilière à Casablanca (Casa), accompagne les propriétaires pour vendre ou louer appartement, villa, maison, terrain ou commerce — 0 DH de commission propriétaire, selon conditions applicables.";

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: DEFAULT_TITLE,
      template: `%s | ${SITE_NAME} Casablanca`,
    },
    description: DEFAULT_DESCRIPTION,
    keywords: [
      "agence immobilière Casablanca",
      "agence immobilière Casablanca propriétaire",
      "agence immo Casablanca",
      "immobilier Casablanca",
      "immozen casa",
      "immo casa Casablanca",
      "vendre appartement Casablanca",
      "vendre villa Casablanca",
      "vendre maison Casablanca",
      "vendre bien immobilier Casablanca",
      "vendre terrain Casablanca",
      "vendre local commercial Casablanca",
      "vendre sans commission Casablanca",
      "louer appartement Casablanca",
      "louer villa Casablanca",
      "louer son bien à Casablanca",
      "confier bien immobilier Casablanca",
      "estimation bien immobilier Casablanca",
      "agence immobilière sans commission propriétaire Casablanca",
      "0 DH commission propriétaire Casablanca",
    ],
    alternates: {
      canonical: SITE_URL,
    },
    verification: {
      // Vérification de propriété Google Search Console (préfixe d'URL
      // https://www.immozencasablanca.com). Ne jamais retirer cette balise
      // sous peine de perdre le statut de propriétaire confirmé.
      google: "oNgtiS2MzK5aE5K_DWf7HhhoNznxOIIgpsle9kd_DG8",
    },
    openGraph: {
      type: "website",
      locale: "fr_MA",
      url: SITE_URL,
      siteName: SITE_NAME,
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    },
    twitter: {
      card: "summary_large_image",
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    ...overrides,
  };
}

/**
 * JSON-LD Schema.org — regroupe RealEstateAgent + WebSite dans un même
 * `@graph` pour éviter deux `<script>` distincts et deux entités dupliquées.
 * Ne contient que des informations réellement présentes dans le projet
 * (téléphone, email, ville, réseaux sociaux) — aucun avis, note ou adresse
 * postale inventés.
 */
export function siteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": `${SITE_URL}/#agence`,
        name: SITE_NAME,
        alternateName: "ImmoZen",
        description: DEFAULT_DESCRIPTION,
        url: SITE_URL,
        image: `${SITE_URL}/images/logo.png`,
        logo: `${SITE_URL}/images/logo.png`,
        telephone: CONTACT.phoneRaw,
        email: CONTACT.email,
        areaServed: {
          "@type": "City",
          name: "Casablanca",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Casablanca",
          addressCountry: "MA",
        },
        knowsLanguage: ["fr", "ar"],
        sameAs: SOCIAL_LINKS.map((social) => social.href),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#site`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "fr-MA",
        publisher: { "@id": `${SITE_URL}/#agence` },
      },
    ],
  };
}

/**
 * JSON-LD FAQPage — doit rester strictement synchronisé avec les questions/
 * réponses affichées visuellement (voir `components/sections/FaqSection.tsx`).
 * Note : Google a restreint depuis 2023 l'affichage des rich results FAQ aux
 * sites gouvernementaux/santé, mais ce balisage reste utile aux moteurs de
 * réponse IA (ChatGPT, Perplexity, Copilot, Gemini) pour extraire et citer
 * ce contenu de façon fiable.
 */
export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * JSON-LD BreadcrumbList pour les pages secondaires (légales). Non utilisé
 * sur la page d'accueil (racine du site, sans intérêt pour un breadcrumb).
 */
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
