import AboutVoopify from "../components/About/AboutVoopify";
import AboutStory from "../components/About/AboutStory";
import AboutTeam from "../components/About/AboutTeam";
import AboutOffice from "../components/About/AboutOffice";
import AboutLast from "../components/About/AboutLast";
export default function About() {
  return (
    <div className="page-section">
      <AboutVoopify />
      <AboutStory/>
      <AboutTeam/>
      <AboutOffice/>
      <AboutLast/>
    </div>
  );
}
