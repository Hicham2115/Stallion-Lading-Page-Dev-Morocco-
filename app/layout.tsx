import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://it.stallionadvertising.ma"),
  title: "Développement web au Maroc | Stallion Advertising",
  description:
    "Agence de développement web au Maroc : Stallion Advertising crée des sites web, applications et logiciels sur mesure pour les entreprises de Casablanca et de tout le royaume.",
  keywords: [
    "développement web Maroc",
    "développement logiciel Casablanca",
    "création application mobile Maroc",
    "agence digitale Casablanca",
    "développement SaaS Maroc",
    "sites web sur mesure",
    "Stallion Advertising",
  ],
  alternates: { canonical: "https://it.stallionadvertising.ma/" },
  openGraph: {
    title: "Développement web au Maroc | Stallion Advertising",
    description:
      "Sites web, applications et logiciels sur mesure créés au Maroc par l’équipe de développement de Stallion Advertising.",
    url: "https://it.stallionadvertising.ma/",
    siteName: "Stallion Advertising",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/unicorn.png",
        width: 512,
        height: 512,
        alt: "Stallion Advertising",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Développement web au Maroc | Stallion Advertising",
    description:
      "Sites web, applications et logiciels sur mesure créés au Maroc par l’équipe de développement de Stallion Advertising.",
    images: ["/unicorn.png"],
  },
  icons: {
    icon: "/unicorn.png",
    shortcut: "/unicorn.png",
    apple: "/unicorn.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;
n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;
s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');fbq('init','1080415321364828');fbq('track','PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1080415321364828&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
