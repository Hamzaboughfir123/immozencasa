import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Le domaine nu (immozencasablanca.com, sans www) répond 200 sans
 * redirection côté DNS/serveur — Google voit donc deux hôtes distincts pour
 * le même contenu. Le tag `<link rel="canonical">` (déjà correct, voir
 * lib/seo.ts) est un indice pour Google, pas une garantie ; une vraie
 * redirection HTTP est le signal fort recommandé. On la fait ici, au
 * niveau applicatif, plutôt que de dépendre d'une config nginx/DNS externe
 * à ce dépôt.
 */
export function proxy(request: NextRequest) {
  if (request.nextUrl.hostname === "immozencasablanca.com") {
    const url = request.nextUrl.clone();
    url.hostname = "www.immozencasablanca.com";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
