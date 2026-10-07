import { ArrowRight } from "lucide-react";

export function FormCta() {
  return (
    <section className="relative z-1 mx-auto w-[min(100%-2.5rem,980px)] py-10 text-center sm:py-14">
      <p className="font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]">Prêt à vous lancer ?</p>
      <a className="mt-4 inline-flex min-h-13 max-w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-[#65891c] px-3 py-3.5 text-[12px] font-extrabold text-[#bafc0c] transition hover:-translate-y-0.5 hover:bg-[#65891c] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#bafc0c] sm:gap-2.5 sm:px-5 sm:text-[15px]" href="#project-form">
        Obtenez votre prototype gratuitement <ArrowRight className="shrink-0" size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
