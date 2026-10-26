import Hero from "../components/Home/Hero";
import StatsBar from "../components/Home/StatsBar";
import VoopFramework from "../components/Home/VoopFramework";
import ServicesPreview from "../components/Home/ServicesPreview";
import WhyUs from "../components/Home/WhyUs";
import PricingSection from "../components/Home/PricingSection";
import Testimonials from "../components/Home/Testimonials";
import HomeCTA from "../components/Home/HomeCTA";

/**
 * Home Page Component
 * 
 * Clean, modular and easy to understand.
 * All individual sections are structured inside `src/components/Home/`:
 * 1. Hero             - Catchy headline, CTA buttons & live metrics preview
 * 2. StatsBar         - Key impact stats and social proof numbers
 * 3. VoopFramework    - Proprietary 4-pillar growth operating system (V-O-O-P)
 * 4. ServicesPreview  - 4 core services preview with direct links
 * 5. WhyUs            - Comparison table & agency vs freelancer advantages
 * 6. PricingSection   - 3 transparent monthly retainer packages
 * 7. Testimonials     - Verified founder quotes & client reviews
 * 8. HomeCTA          - High-converting final call-to-action
 */
export default function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen selection:bg-purple-200 selection:text-purple-900">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Key Metrics & Impact Numbers */}
      <StatsBar />

      {/* 3. The 4-Pillar VOOP Framework */}
      <VoopFramework />

      {/* 4. Core Services Showcase */}
      <ServicesPreview />

      {/* 5. Why Choose Voopify & Comparison */}
      <WhyUs />

      {/* 6. Transparent Retainer Pricing */}
      <PricingSection />

      {/* 7. Client Reviews & Testimonials */}
      <Testimonials />

      {/* 8. Final Call to Action */}
      <HomeCTA />
    </div>
  );
}