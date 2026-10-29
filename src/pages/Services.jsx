import ServicesHero from "../components/Services/ServicesHero";
import ServicesList from "../components/Services/ServicesList";
import CTABanner from "../components/CTABanner";
 
export default function Services() {
  return (
    <div className="page-section">
      <ServicesHero />
      <ServicesList />
      <CTABanner
        title="Ready to turn marketing into predictable growth?"
        body="Tell us where your pipeline is stalling and we'll help identify the highest-impact lever to pull next."
        buttonLabel="Book a Free Strategy Call"
      />
    </div>
  );
}