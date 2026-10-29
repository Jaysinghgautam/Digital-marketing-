import Hero from "../components/Home/Hero";
import VoopFramework from "../components/Home/VoopFramework";
import ServicesPreview from "../components/Home/ServicesPreview";
import Testimonials from "../components/Home/Testimonials";
import FeaturedWork from "../components/Home/Featuredwork";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 min-h-screen selection:bg-purple-200 selection:text-purple-900">
      {/* 1. Hero Section */}
      <Hero />

      {/* Core Services Showcase */}
      <ServicesPreview />
      <FeaturedWork />
      {/* 5. Why Choose Voopify & Comparison */}

      {/* 3. The 4-Pillar VOOP Framework */}
      <VoopFramework />

      {/* 7. Client Reviews & Testimonials */}
      <Testimonials />

      {/* 8. Final Call to Action */}
      {/* <HomeCTA /> */}
    </div>
  );
}
