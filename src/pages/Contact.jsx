import ContactHero from "../components/Contact/ContactHero";
import ContactForm from "../components/Contact/ContactForm";
import ContactFAQ from "../components/Contact/ContactFAQ";
import CTABanner from "../components/CTABanner";

/**
 * Contact Page
 * Structured into modular components (<200 lines each):
 * 1. ContactHero - Dark navy hero banner with glowing accents
 * 2. ContactForm - Contact details, workflow steps & glassmorphic interactive form
 * 3. ContactFAQ  - Interactive accordion FAQ section
 * 4. CTABanner   - Final closing call to action
 */
export default function Contact() {
  return (
    <div className="page-section">
      <ContactHero />
      <ContactForm />
      <ContactFAQ />
      <CTABanner />
    </div>
  );
}