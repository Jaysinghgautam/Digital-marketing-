import ServicesHero from "../components/Services/ServicesHero";
import ServicesList from "../components/Services/ServicesList";
import ServicesProcess from "../components/Services/ServicesProcess";
import CTABanner from "../components/CTABanner";

/**
 * Services Page
 * Modular architecture (<200 lines per component):
 * 1. ServicesHero    - Hero headline, live metric dashboard card & key stats
 * 2. ServicesList    - 6 core capability cards with taglines & deliverables
 * 3. ServicesProcess - 4-step execution methodology (Audit, Build, Optimize, Scale)
 * 4. CTABanner       - Call to action banner
 */
export default function Services() {
  return (
    <div className="page-section">
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <CTABanner
        title="Ready to turn marketing into predictable growth?"
        body="Tell us where your pipeline is stalling and we'll help identify the highest-impact lever to pull next."
        buttonLabel="Book a Free Strategy Call"
      />
    </div>
  );
}