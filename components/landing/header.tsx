"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-10 left-0 z-50 flex h-18 w-full items-center justify-between px-5 transition-colors duration-300 sm:px-8 lg:px-16 ${scrolled ? "bg-[#0a0c0d]/90 shadow-lg backdrop-blur-md" : "bg-transparent"}`}
    >
      <a
        className="flex items-center gap-2 text-xs font-extrabold tracking-[.08em] sm:text-sm"
        href="#top"
        aria-label="Accueil de Stallion Advertising"
      >
        <Image src="/unicorn.png" alt="" width={28} height={28} priority />
        <span>
          STALLION <strong className="text-[#bafc0c]">ADVERTISING</strong>
        </span>
      </a>
      <nav
        className="flex items-center gap-1 text-sm font-semibold text-white"
        aria-label="Navigation principale"
      >
        <a
          className="hidden px-3 py-2 hover:text-[#bafc0c] md:block"
          href="#development-service"
        >
          Développement
        </a>
        <a
          className="hidden px-3 py-2 hover:text-[#bafc0c] lg:block"
          href="#case-studies"
        >
          Réalisations
        </a>
        <a
          className="hidden px-3 py-2 hover:text-[#bafc0c] lg:block"
          href="#team"
        >
          Équipe
        </a>
        <a
          className="hidden px-3 py-2 hover:text-[#bafc0c] lg:block"
          href="#faq"
        >
          Questions fréquentes
        </a>
        <a
          className="ml-1 hidden rounded-xl border-2 border-[#65891c] px-3 py-2 text-white hover:bg-[#65891c] sm:block"
          href="#project-form"
        >
          Nous contacter
        </a>
      </nav>
    </header>
  );
}
