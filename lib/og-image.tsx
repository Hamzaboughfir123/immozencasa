import { SITE_NAME } from "@/lib/constants";

/**
 * Élément partagé par `app/opengraph-image.tsx` et `app/twitter-image.tsx`
 * pour générer une image 1200×630 locale (via `next/og`), sans dépendre
 * d'une photo externe (ex: Unsplash). Contenu purement factuel : nom,
 * offre 0 DH commission propriétaire, ville. Un seul endroit à modifier
 * pour les deux fichiers, afin d'éviter toute divergence.
 */
export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #10120F 0%, #06733D 100%)",
        fontFamily: "Georgia, serif",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          fontSize: 40,
          fontWeight: 700,
          letterSpacing: 1,
          marginBottom: 28,
        }}
      >
        {SITE_NAME}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 168,
          fontWeight: 700,
          color: "#A5D232",
          lineHeight: 1,
        }}
      >
        0 DH
      </div>
      <div
        style={{
          fontSize: 34,
          fontWeight: 600,
          marginTop: 20,
        }}
      >
        de commission propriétaire
      </div>
      <div
        style={{
          fontSize: 26,
          fontWeight: 400,
          marginTop: 16,
          color: "#A5D232",
          textTransform: "uppercase",
          letterSpacing: 4,
        }}
      >
        Casablanca
      </div>
    </div>
  );
}
