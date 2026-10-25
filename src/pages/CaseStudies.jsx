import CaseStudiesHero from "../components/CaseStudies/CaseStudiesHero";
import CaseStudiesList from "../components/CaseStudies/CaseStudiesList";
import CaseStudiesTestimonials from "../components/CaseStudies/CaseStudiesTestimonials";
import CTABanner from "../components/CTABanner";

/**
 * Case Studies (Portfolio) Page
 * Clean, modular architecture (<200 lines per component):
 * 1. CaseStudiesHero         - Hero headline, strategic subtext & aggregate impact stats
 * 2. CaseStudiesList         - Featured detailed client case studies with metric badges
 * 3. CaseStudiesTestimonials - Methodological approach & verified founder testimonials
 * 4. CTABanner               - Strategic final conversion banner
 */
export default function CaseStudies() {
  return (
    <div className="page-section">
      <CaseStudiesHero />
      <CaseStudiesList />
      <CaseStudiesTestimonials />
      <CTABanner
        title="Ready to become our next documented growth story?"
        body="Tell us about your target pipeline, current marketing friction, and revenue objectives. We'll show you exactly how we can unlock compounding momentum."
        buttonLabel="Start Your Growth Journey"
      />
    </div>
  );
}