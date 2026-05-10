import { LandingNav } from "@/components/landing/LandingNav";
import { LandingHero } from "@/components/landing/LandingHero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { InsightSection } from "@/components/landing/InsightSection";
import { FeatureSection } from "@/components/landing/FeatureSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { ImpactSection } from "@/components/landing/ImpactSection";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-black">
      <LandingNav />
      <LandingHero />
      <ProblemSection />
      <InsightSection />
      <FeatureSection />
      <HowItWorksSection />
      <ImpactSection />

      {/* Footer */}
      <footer className="border-t border-white/[0.08] py-12 px-8">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-sp-green" />
              <span className="text-white font-bold text-[15px]">DAYE</span>
              <span className="text-sp-muted text-[13px]">— A Spotify Core Experience Concept</span>
            </div>
            <p className="text-sp-muted text-[13px]">
              Presented by a candidate for the Core Experience Product Manager role.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/daye" className="text-sp-sub text-[14px] hover:text-white transition-colors">
              Prototype
            </Link>
            <Link href="/docs" className="text-sp-sub text-[14px] hover:text-white transition-colors">
              Documents
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
