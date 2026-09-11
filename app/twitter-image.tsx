import { ImageResponse } from "next/og";
import { OgImageContent } from "@/lib/og-image";

export const alt =
  "ImmoZen Groupe Casablanca — 0 DH de commission propriétaire";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<OgImageContent />, size);
}
