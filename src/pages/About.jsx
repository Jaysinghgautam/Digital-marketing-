import AboutHero from "../components/About/AboutHero";
import AboutStory from "../components/About/AboutStory";
import AboutValues from "../components/About/AboutValues";
import AboutTeam from "../components/About/AboutTeam";
import CTABanner from "../components/CTABanner";

/**
 * About Page
 * Clean, modular structure where each section is isolated (<200 lines):
 * 1. AboutHero   - Hero header, stats counter and experience badge
 * 2. AboutStory  - Our origin, principles, and differentiation
 * 3. AboutValues - 6 core company tenets in glass cards
 * 4. AboutTeam   - Leadership squad profiles with hover interaction
 * 5. CTABanner   - Strategic conversion banner
 */
export default function About() {
  return (
    <div className="page-section">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <CTABanner
        title="Better marketing starts with a better partnership."
        body="Whether you're launching a new venture, scaling acquisition, or fixing an underperforming funnel — we're here to build the next stage of growth with you."
        buttonLabel="Schedule a Call"
      />
    </div>
  );
}
