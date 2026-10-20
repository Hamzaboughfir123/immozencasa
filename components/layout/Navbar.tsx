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
            href={CONTACT.whatsappHref}
            className="site-navbar__phone"
            aria-label="Contacter ImmoZen Groupe sur WhatsApp"
          >
            <WhatsAppIcon />
            <span>{CONTACT.phoneRaw}</span>
          </a>
          <Button className="site-navbar__cta" onClick={() => openPropertyLeadModal()} size="md">
            Confier mon bien
          </Button>
        </div>

        <a
          href={CONTACT.whatsappHref}
          className="site-navbar__mobile-phone"
          aria-label="Contacter ImmoZen Groupe sur WhatsApp"
        >
          <WhatsAppIcon />
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
            href={CONTACT.whatsappHref}
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full border border-brand-forest/25 px-5 py-3 text-sm font-semibold text-brand-forest"
          >
            <WhatsAppIcon />
            WhatsApp
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

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-1.5-.7-2.5-1.3-3.5-3-.3-.5.3-.4.8-1.4.1-.2 0-.4 0-.5C11 9.6 10.6 8.5 10.4 8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9 1-.9 2.3 0 1.3 1 2.6 1.1 2.8.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.6-.7 1.9-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.6-.3z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.1L2 22l5-1.3c1.5.8 3.2 1.3 5 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3C4.2 15.1 3.7 13.6 3.7 12c0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3-3.7 8.3-8.3 8.3z" />
    </svg>
  );
}

