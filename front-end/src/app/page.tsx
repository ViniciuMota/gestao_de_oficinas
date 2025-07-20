'use client'

import HeroSection from "@/components/hero";
import FeaturesSection from "@/components/features";
import StatsSection from "@/components/stats";
import CallToAction from "@/components/calltoaction";
import FooterSection from "@/components/footer";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CallToAction />
      <FooterSection />

    </main>
  );
}
