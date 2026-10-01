import { Blocks, Code2, Lightbulb, Rocket } from "lucide-react";

const steps = [
  [
    "01",
    "DÉCOUVRIR",
    "Parlez-nous de votre idée",
    "Dites-nous ce que vous souhaitez créer, à qui le produit s’adresse et à quoi ressemble la réussite.",
    Lightbulb,
  ],
  [
    "02",
    "DÉFINIR",
    "Définissons le MVP",
    "Nous transformons votre idée en un périmètre précis, des étapes claires et un échéancier de paiement adapté.",
    Blocks,
  ],
  [
    "03",
    "CRÉER",
    "Développons et ajustons",
    "Vous suivez l’avancement du développement et pouvez nous faire part de vos retours à chaque étape.",
    Code2,
  ],
  [
    "04",
    "LANCER",
    "Lancez et développez",
    "Nous livrons un produit fiable et restons à vos côtés pour accompagner sa croissance.",
    Rocket,
  ],
] as const;

export function Process() {
  return (
    <section
      id="process"
      className="relative z-1 mx-auto w-[min(100%-2.5rem,1180px)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]">
          Comment ça marche
        </p>
        <h2 className="mt-4 text-[40px] font-black leading-[.95] tracking-[-.045em] sm:text-[62px]">
          De l’idée au{" "}
          <em className="text-[#bafc0c]">produit concret.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-[#aeb3b6]">
          Un parcours clair, de notre premier échange jusqu’à un produit que vos
          clients peuvent utiliser.
        </p>
      </div>
      <div className="relative mt-14">
        <div className="absolute bottom-8 left-5 top-5 w-px bg-gradient-to-b from-[#bafc0c] via-[#65891c] to-transparent md:bottom-auto md:left-[10%] md:right-[10%] md:top-7 md:h-px md:w-auto md:bg-gradient-to-r" />
        <div className="grid gap-7 md:grid-cols-4 md:gap-4">
          {steps.map(([number, label, title, text, Icon]) => (
            <article
              key={number}
              className="group relative flex min-h-[238px] pl-14 md:pl-0 md:pt-14"
            >
              <div className="absolute left-0 top-0 grid size-10 place-items-center rounded-full border border-[#bafc0c] bg-[#111514] text-[#bafc0c] shadow-[0_0_0_7px_#111514] transition duration-300 group-hover:scale-110 md:left-1/2 md:-translate-x-1/2">
                <Icon size={17} />
              </div>
              <div className="flex h-full w-full flex-col rounded-2xl border border-white/10 bg-white/[.035] p-5 transition duration-300 group-hover:-translate-y-1 group-hover:border-[#bafc0c]/50 group-hover:bg-[#bafc0c]/[.06]">
                <div className="flex justify-between font-mono text-[11px] tracking-[.16em] text-[#bafc0c]">
                  <span>{label}</span>
                  <span className="text-white/35">{number}</span>
                </div>
                <h3 className="mt-8 text-[20px] font-black lg:whitespace-nowrap">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#b6b9bb]">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
