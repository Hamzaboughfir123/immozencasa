"use client";

import { Button } from "@/components/ui/Button";
import { openPropertyLeadModal } from "@/components/property-lead/lead-modal-events";
import { CONTACT, NAV_LINKS, SITE_NAME } from "@/lib/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const dismiss = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("keydown", dismiss);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", dismiss);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={`site-navbar ${scrolled ? "site-navbar--scrolled" : ""}`}
    >
      <div className="site-navbar__bar">
        <a href="#accueil" onClick={() => setOpen(false)} className="site-navbar__logo" aria-label={SITE_NAME}>
          <Image
            src="/images/logo-transparent.png"
            alt={SITE_NAME}
            width={242}
            height={83}
            className="site-navbar__logo-image"
          />
        </a>

        <nav className="site-navbar__links" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="site-navbar__link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-navbar__actions">
          <a
            href={CONTACT.phoneHref}
            className="site-navbar__phone"
            aria-label={`Appeler ImmoZen Groupe au ${CONTACT.phoneRaw}`}
          >
            <PhoneIcon />
            {CONTACT.phoneRaw}
          </a>
          <Button className="site-navbar__cta" onClick={() => openPropertyLeadModal()} size="md">
            Confier mon bien
          </Button>
        </div>

        <a
          href={CONTACT.phoneHref}
          className="site-navbar__mobile-phone"
          aria-label={`Appeler ImmoZen Groupe au ${CONTACT.phoneRaw}`}
        >
          <PhoneIcon />
          <span>{CONTACT.phoneRaw}</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="site-navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="site-navbar__mobile-menu"
        >
          <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-brand-ink/80 hover:bg-brand-beige"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={CONTACT.phoneHref}
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full border border-brand-forest/25 px-5 py-3 text-sm font-semibold text-brand-forest"
          >
            <PhoneIcon />
            {CONTACT.phoneRaw}
          </a>
          <Button
            className="site-navbar__cta mt-4 w-full"
            onClick={() => {
              setOpen(false);
              openPropertyLeadModal();
            }}
          >
            Confier mon bien
          </Button>
        </div>
      ) : null}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 3h3l1.5 4.2-2 1.7a15.5 15.5 0 006 6l1.7-2L21 14.4v3c0 2-1.6 3.6-3.6 3.6C9.4 21 3 14.6 3 6.6 3 4.6 4.6 3 6.6 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
