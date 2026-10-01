import { ArrowRight } from "lucide-react";

export function FormCta() {
  return (
    <section className="relative z-1 mx-auto w-[min(100%-2.5rem,980px)] py-10 text-center sm:py-14">
      <p className="font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]">Prêt à vous lancer ?</p>
      <a className="mt-4 inline-flex min-h-13 items-center justify-center gap-2.5 rounded-xl border-2 border-[#65891c] px-5 py-3.5 text-[15px] font-extrabold text-[#bafc0c] transition hover:-translate-y-0.5 hover:bg-[#65891c] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#bafc0c]" href="#project-form">
        Obtenez votre MVP gratuitement <ArrowRight size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
