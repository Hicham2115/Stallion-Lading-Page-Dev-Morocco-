import Image from "next/image";
import { AtSign, Link } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-1 mx-auto mt-24 mb-6 w-[min(100%-2.5rem,1180px)]">
      <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[.025] p-8 sm:p-10 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <a
            className="flex items-center gap-2 text-sm font-extrabold tracking-[.08em]"
            href="#top"
          >
            <Image src="/unicorn.png" alt="" width={28} height={28} />
            <span>
              STALLION <strong className="text-[#bafc0c]">ADVERTISING</strong>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#b6b9bb]">
            Nous transformons les entreprises grâce à des solutions numériques
            qui stimulent une croissance mesurable.
          </p>
        </div>
        <div className="grid content-start gap-3">
          <h3 className="text-xs font-black uppercase tracking-[.08em]">
            Liens rapides
          </h3>
          <a
            className="text-sm text-[#b6b9bb] hover:text-[#bafc0c]"
            href="#top"
          >
            Accueil
          </a>
          <a
            className="text-sm text-[#b6b9bb] hover:text-[#bafc0c]"
            href="#development-service"
          >
            Développement
          </a>
          <a
            className="text-sm text-[#b6b9bb] hover:text-[#bafc0c]"
            href="#case-studies"
          >
            Réalisations
          </a>
          <a
            className="text-sm text-[#b6b9bb] hover:text-[#bafc0c]"
            href="#team"
          >
            Notre équipe
          </a>
        </div>
        <div className="grid content-start gap-3">
          <h3 className="text-xs font-black uppercase tracking-[.08em]">
            Explorer
          </h3>
          <a
            className="text-sm text-[#b6b9bb] hover:text-[#bafc0c]"
            href="#faq"
          >
            Questions fréquentes
          </a>
          <a
            className="text-sm text-[#b6b9bb] hover:text-[#bafc0c]"
            href="#testimonials"
          >
            Témoignages
          </a>
          <a
            className="text-sm text-[#b6b9bb] hover:text-[#bafc0c]"
            href="#project-form"
          >
            Nous contacter
          </a>
          <a
            className="flex items-center gap-2 text-sm text-[#b6b9bb] hover:text-[#bafc0c]"
            href="https://www.instagram.com/stallion_advertising/"
            target="_blank"
            rel="noreferrer"
          >
            <AtSign size={16} aria-hidden="true" />
            Instagram
          </a>
          <a
            className="flex items-center gap-2 text-sm text-[#b6b9bb] hover:text-[#bafc0c]"
            href="https://www.linkedin.com/company/stallionadvertising/"
            target="_blank"
            rel="noreferrer"
          >
            <Link size={16} aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </div>
      <p className="py-6 text-center text-xs text-[#818789]">
        © {new Date().getFullYear()} Stallion Advertising. Tous droits réservés.
      </p>
    </footer>
  );
}
