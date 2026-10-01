const principles = [
  ["Maîtrise du marketing", "Des stratégies fondées sur les données pour optimiser votre retour sur investissement et valoriser votre marque sur les canaux numériques."],
  ["Développement technique", "Des solutions web et logicielles robustes, conçues pour la rapidité, l’évolution et une expérience fluide."],
  ["Publicité créative", "Des campagnes percutantes qui captent l’attention et transforment votre audience en clientèle."],
];

export function Philosophy() {
  return <section id="about" className="relative z-1 mx-auto w-[min(100%-2.5rem,1180px)] py-20 text-center sm:py-32"><p className="font-mono text-[11px] uppercase tracking-[.2em] text-[#bafc0c]">NOTRE PHILOSOPHIE</p><h2 className="mx-auto mt-4 text-balance text-[clamp(2rem,5vw,4rem)] font-black leading-none tracking-[-.045em]">Le résultat nous guide, l’innovation nous anime</h2><p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#b6b9bb] sm:text-lg">Notre approche « satisfait ou non payé » vise des résultats concrets. Nous avançons à vos côtés avec énergie et précision.</p><div className="mt-12 grid gap-5 text-left md:grid-cols-3">{principles.map(([title, description], index) => <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-[#65891c] hover:shadow-[0_0_30px_rgba(186,252,12,0.2)]" key={title}><span className="mb-5 grid size-13 place-items-center rounded-xl bg-[#65891c] font-mono text-xs font-bold">0{index + 1}</span><h3 className="text-xl font-black tracking-[-.045em]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#b6b9bb]">{description}</p></article>)}</div></section>;
}
