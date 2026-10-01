import Image from "next/image";

const logos = [
  "ChatGPT Image Sep 22, 2026, 08_05_43 PM.png",
  "ChatGPT Image Sep 22, 2026, 08_06_23 PM.png",
  "ChatGPT Image Sep 22, 2026, 08_07_16 PM.png",
  "ChatGPT Image Sep 22, 2026, 08_08_20 PM.png",
  "ChatGPT Image Sep 22, 2026, 08_09_06 PM.png",
  "ChatGPT Image Sep 22, 2026, 08_10_08 PM.png",
  "ChatGPT Image Sep 22, 2026, 08_10_57 PM.png",
  "ChatGPT Image Sep 22, 2026, 08_11_26 PM.png",
  "ChatGPT Image Sep 22, 2026, 08_11_58 PM.png",
  "ChatGPT Image Sep 22, 2026, 08_12_30 PM.png",
  "ChatGPT Image Sep 22, 2026, 08_13_09 PM.png",
  "ChatGPT Image Sep 22, 2026, 08_13_46 PM.png",
  "ChatGPT Image Sep 22, 2026, 08_17_37 PM.png",
];

export function Ticker() {
  return (
    <section
      aria-label="Clients et partenaires"
      className="relative z-1 overflow-hidden border-y border-white/10 bg-white/[.025] py-5"
    >
      <div className="flex w-max animate-[marquee_38s_linear_infinite] items-center">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex h-10 w-36 shrink-0 items-center justify-center sm:w-44"
          >
            <Image
              src={`/collab-logos/${logo}`}
              alt=""
              width={176}
              height={40}
              className="max-h-10 w-auto max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
