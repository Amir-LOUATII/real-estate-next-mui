import CtaSection from "@/components/home/cta-section";
import FeatureSection from "@/components/home/feature-section";
import FeaturedProperties from "@/components/home/featured-properties";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <div className="w-full ">
      <Hero />
      <FeaturedProperties />
      <FeatureSection />
      <CtaSection />
    </div>
  );
}
