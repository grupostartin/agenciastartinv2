import { LightIntro } from "@/components/ui/light-intro";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Portfolio } from "@/components/sections/portfolio";
import { CTAFooter } from "@/components/sections/cta-footer";
import { FloatingWhatsapp } from "@/components/sections/floating-whatsapp";
import { ScrollProgress } from "@/components/sections/scroll-progress";

export default function Home() {
  return (
    <LightIntro>
      <ScrollProgress />
      <Navbar />
      <main className="flex flex-col bg-black">
        <Hero />
        <Manifesto />
        <Services />
        <Process />
        <Portfolio />
      </main>
      <CTAFooter />
      <FloatingWhatsapp />
    </LightIntro>
  );
}
