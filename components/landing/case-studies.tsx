import { ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";

const studies = [
  { title: "Maison Oria", image: "/case-studies/maison oria.png", type: "Boutique en ligne", tags: ["E-commerce", "Marque de luxe", "Découverte de produits"], description: "Une boutique de sacs en cuir haut de gamme, avec une narration éditoriale, des collections sélectionnées, des outils de découverte, une liste de souhaits, un panier, des avis clients et une offre saisonnière.", link: "https://e-com-bags.vercel.app/" },
  { title: "Maison Furniture", image: "/case-studies/Fourniture.png", type: "Boutique en ligne", tags: ["E-commerce", "Mobilier de luxe", "Catalogue produits"], description: "Une expérience e-commerce dédiée au mobilier de luxe, avec des nouveautés sélectionnées, des catégories salon et chambre, des récits produits, des témoignages, une liste de souhaits et un panier.", link: "https://e-commerce-furniture-gilt.vercel.app/" },
  { title: "SOSHouse", image: "/case-studies/sos-house.jpeg", type: "Site vitrine", tags: ["Site web", "Génération de prospects", "SEO"], description: "Une plateforme de services à domicile au Luxembourg, avec un parcours de devis en trois étapes, des pages de services, un contact d’urgence, des témoignages et un blog optimisé pour le référencement.", link: "https://www.sos-house.com/fr" },
  { title: "Arte Piedra", image: "/case-studies/arte-piedra.png", type: "Boutique en ligne", tags: ["Next.js", "E-commerce", "Site de marque"], description: "Une boutique éditoriale en français pour un atelier de marbre et de zellige marocain, mise en valeur par de grands visuels, une typographie raffinée et un positionnement artisanal.", link: "https://arte-piedra.vercel.app/" },
  { title: "Anissa Cosmetics", image: "/case-studies/anissa-cosmetics.png", type: "Boutique en ligne", tags: ["E-commerce", "Vente directe", "Vidéo d’accueil"], description: "Une boutique de soins de la peau au luxe discret, avec une vidéo d’accueil, des routines de soins, des gages de confiance, un panier, une liste de souhaits et des avis clients tout au long du parcours d’achat.", link: "https://www.anissacosmetics.com/" },
  { title: "Stallion CRM", image: "/case-studies/stallion.png", type: "CRM", tags: ["Next.js", "Laravel", "Tableaux de bord"], description: "La plateforme commerciale et opérationnelle conçue pour Stallion Advertising, avec attribution publicitaire, collecte progressive de prospects, suivi du pipeline, marges et tableaux de bord des taux de conversion.", link: "https://stallion-crm-swart.vercel.app/login" },
  { title: "Talk French Canada", image: "/case-studies/talk-french-canada.svg", type: "Plateforme SaaS", tags: ["SaaS", "EdTech", "Next.js"], description: "Une plateforme de cours axée sur la conversion pour préparer le TEF et le TCF Canada, avec examens blancs, simulations orales, suivi de progression, formules tarifaires et paiement en ligne.", link: "https://talkfrenchcanada.co/" },
  { title: "SOS House Marketplace", image: "/case-studies/sos-house.jpeg", type: "Application / plateforme", tags: ["Next.js", "Laravel", "PostGIS"], description: "Une place de marché de services à domicile à Casablanca, avec critères d’éligibilité des prestataires, accès prépayé aux prospects, notifications WhatsApp, vérification d’identité et assistance par IA pour finaliser les demandes.", link: "https://so-s-house-platform-phi.vercel.app/" },
  { title: "Stallion OS", image: "/case-studies/stallion.png", type: "SaaS interne", tags: ["SaaS", "IA", "Outil interne"], description: "Le système de gestion interne de Stallion Advertising : tableaux de bord, projets, tâches Kanban, finances, accès par rôle et copilote IA contextuel.", link: "https://stallion-os-app.vercel.app/signin#chat" },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="relative z-1 mx-auto w-[min(100%-2.5rem,1180px)] py-20 text-center sm:py-28">
      <p className="inline-flex items-center gap-2 rounded-full border border-[#65891c]/50 bg-[#65891c]/15 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]"><span className="size-1.5 rounded-full bg-[#bafc0c]" />Nos dernières réalisations</p>
      <h2 className="mx-auto mt-5 text-balance text-[40px] font-black leading-none tracking-[-.045em] sm:text-[56px]">Conçus pour <em className="text-[#bafc0c]">votre croissance</em></h2>
      <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-[#b6b9bb] sm:text-[18px]">Une sélection de sites web, de plateformes et de systèmes internes créés par l’équipe de développement de Stallion.</p>
      <div className="mt-12 grid gap-5 text-left md:grid-cols-2 lg:grid-cols-3">
        {studies.map((study) => (
          <article key={study.title} className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#65891c] hover:shadow-[0_0_30px_rgba(186,252,12,0.2)]">
            <div className="mb-6 flex items-start justify-between gap-4"><div className="relative grid size-16 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/10 p-2"><Image src={study.image} alt={`${study.title} logo`} fill sizes="64px" className="object-contain p-2" /></div><span className="rounded-full border border-[#65891c]/50 bg-[#65891c]/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[.12em] text-[#bafc0c]">{study.type}</span></div>
            <h3 className="text-[22px] font-black tracking-[-.045em]">{study.title}</h3>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#b6b9bb]">{study.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">{study.tags.map((tag) => <li key={tag} className="flex items-center gap-1.5 text-[12px] text-gray-300"><Check size={12} className="rounded-full bg-[#65891c] p-0.5" aria-hidden="true" />{tag}</li>)}</ul>
            <a className="mt-6 inline-flex items-center gap-2 text-[14px] font-bold text-[#bafc0c] hover:text-white" href={study.link} target="_blank" rel="noreferrer">Voir le projet <ArrowUpRight size={16} aria-hidden="true" /></a>
          </article>
        ))}
      </div>
    </section>
  );
}
