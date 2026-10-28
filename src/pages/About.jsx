import AboutVoopify from "../components/About/AboutVoopify";
import AboutStory from "../components/About/AboutStory";
import AboutTeam from "../components/About/AboutTeam";
import AboutOffice from "../components/About/AboutOffice";
export default function About() {
  return (
    <div className="page-section">
      <AboutVoopify />
      <AboutStory/>
      <AboutTeam/>
      <AboutOffice/>
    </div>
  );
}
