"use client";

import HeroSection from "@/components/hero";
import FeaturesSection from "@/components/features";
import StatsSection from "@/components/stats";
import CallToAction from "@/components/calltoaction";
import FooterSection from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CallToAction />
      <div>
        <div className="bg-amber-200 flex justify-center items-center gap-2 p-2">
          Acesse a versão beta do app{" "}
          <Button>
            <a href="/login">Teste já</a>
          </Button>
        </div>
        <div className="bg-amber-200 flex justify-center items-center gap-2 p-2">
          Olhe como vai ficar a organização da oficina{" "}
          <Button>
            <a href="/dashboard">Ver exemplo</a>
          </Button>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
