import { Background } from "@/components/landing/background";
import { CaseStudies } from "@/components/landing/case-studies";
import { Closing } from "@/components/landing/closing";
import { DevelopmentService } from "@/components/landing/development-service";
import { Footer } from "@/components/landing/footer";
import { Faq } from "@/components/landing/faq";
import { FormCta } from "@/components/landing/form-cta";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Process } from "@/components/landing/process";
import { Testimonials } from "@/components/landing/testimonials";
import { Team } from "@/components/landing/team";
import { Ticker } from "@/components/landing/ticker";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0c0d] text-[#f9faf9] selection:bg-[#bafc0c] selection:text-[#0a0c0d]">
      <Background />
      <div className="fixed inset-x-0 top-0 z-[60] bg-[#bafc0c] px-4 py-2 text-center font-mono text-[12px] font-bold tracking-[.14em] text-[#0a0c0d] sm:text-[14px]">
        Projets à partir de 10.000 DH
      </div>
      <Header />
      <Hero />
      <Ticker />
      <DevelopmentService />
      <Process />
      <FormCta />
      <CaseStudies />
      <Testimonials />
      <FormCta />
      <Team />
      <Faq />
      <Closing />
      <Footer />
    </main>
  );
}
