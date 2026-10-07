import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const members = [
  [
    "Bader",
    "Cofondateur",
    "/team/badr.png",
    "Définit la vision, l’offre et la relation client au cœur de chaque projet.",
  ],
  [
    "Abderrahmane",
    "Cofondateur",
    "/team/abderrahmane.png",
    "Veille à la qualité des livraisons et à la cohésion de l’équipe, projet après projet.",
  ],
  [
    "Said",
    "Directeur technique, ingénieur logiciel senior et spécialiste IA",
    "/team/said.png",
    "Conçoit les systèmes et l’IA qui propulsent nos projets les plus exigeants sur le plan technique.",
  ],
  [
    "Hicham",
    "Développeur full stack senior, spécialiste en automatisation",
    "/team/hicham-new.png",
    "Développe des produits complexes et automatise les processus pour assurer leur bon fonctionnement.",
  ],
  [
    "Mohammed",
    "Développeur full stack senior, expert SEO",
    "/team/mohamed.jpg",
    "Crée des fonctionnalités fiables, prêtes à l’emploi, de la base de données à l’interface.",
  ],
  [
    "Anas",
    "Développeur full stack junior",
    "/team/anass.png",
    "Contribue à tous les projets en cours, apprend rapidement et livre avec réactivité.",
  ],
  [
    "Salma",
    "Responsable commerciale",
    "/team/salma.jpeg",
    "Encadre l’équipe commerciale et transforme les premiers échanges en projets signés et livrés.",
  ],
  [
    "Meryem",
    "Cheffe de projet",
    "/team/meryem.jpg",
    "Organise les projets, assure une communication claire et veille au respect des délais de livraison.",
  ],
  // [
  //   "Amine",
  //   "Sales",
  //   "/team/amine.jpg",
  //   "The team behind every call and every follow-up, from your first message to a booked meeting.",
  // ],
  [
    "Marwan",
    "Monteur vidéo senior",
    "/team/marwan.png",
    "Crée des récits visuels captivants grâce au montage cinématographique, au motion design et à une narration soignée.",
  ],
  [
    "Zakaria",
    "Designer graphique",
    "/team/zakaria.jpg",
    "Conçoit des identités de marque percutantes grâce à un univers visuel fort, à la typographie et à des systèmes graphiques modernes.",
  ],
  [
    "Ayoub",
    "Spécialiste de l’achat média",
    "/team/unknown.png",
    "Développe les campagnes grâce à l’optimisation publicitaire fondée sur les données, au ciblage d’audience et à l’analyse des performances numériques.",
  ],
  [
    "Achraf",
    "Commercial",
    "/team/unknown.png",
    "Développe le portefeuille client, entretient les relations et transforme les prospects en partenariats durables.",
  ],
  [
    "Nada Ez Zorzar",
    "Commerciale",
    "/team/nada.png",
    "Accompagne chaque échange et chaque suivi, de votre premier message jusqu’à la prise de rendez-vous.",
  ],
  [
    "Yassmine Dhibi",
    "Commerciale",
    "/team/yassmine.png",
    "Accompagne chaque échange et chaque suivi, de votre premier message jusqu’à la prise de rendez-vous.",
  ],
];

export function Team() {
  return (
    <section
      id="team"
      className="relative z-1 mx-auto w-[min(100%-2.5rem,1180px)] py-20 sm:py-28"
    >
      <div className="text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-[#65891c]/50 bg-[#65891c]/15 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]">
          <span className="size-1.5 rounded-full bg-[#bafc0c]" />
          Les personnes derrière vos produits
        </p>
        <h2 className="mx-auto mt-5 text-balance text-[40px] font-black leading-none tracking-[-.045em] sm:text-[56px]">
          Voici notre <em className="text-[#bafc0c]">équipe.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-[#b6b9bb] sm:text-[18px]">
          Des stratèges, designers, ingénieurs et spécialistes unissent leurs
          compétences pour donner vie à votre produit.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
          dragFree: false,
        }}
        className="relative mx-auto mt-12 w-full max-w-6xl"
      >
        <CarouselContent className="select-none">
          {members.map(([name, role, image, bio]) => (
            <CarouselItem
              key={name}
              className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
            >
              <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[.03] transition duration-300 hover:-translate-y-2 hover:border-[#65891c] hover:shadow-[0_0_30px_rgba(186,252,12,.2)]">
                <div className="relative h-[28rem] overflow-hidden bg-[#14171a] sm:h-[32rem] md:h-[min(600px,95vw)] lg:h-[600px]">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c0d] via-transparent to-transparent" />
                  <p className="absolute inset-x-4 bottom-4 translate-y-3 text-[13px] leading-relaxed text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {bio}
                  </p>
                </div>
                <div className="p-5">
                  <h3 className="text-[20px] font-black tracking-[-.04em] group-hover:text-[#bafc0c]">
                    {name}
                  </h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[.16em] text-[#bafc0c]">
                    {role}
                  </p>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 border-0 bg-[#65891c] text-white shadow-lg hover:bg-[#bafc0c] hover:text-[#65891c] sm:-left-5" />
        <CarouselNext className="-right-4 border-0 bg-[#65891c] text-white shadow-lg hover:bg-[#bafc0c] hover:text-[#65891c] sm:-right-5" />
      </Carousel>
    </section>
  );
}
