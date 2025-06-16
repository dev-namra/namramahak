import ProfileCard from "../components/homePage/ProfileCard";
import ProjectsSection from "../components/homePage/ProjectsSections";
import Footer from "../components/common/Footer";
import ExperienceSection from "../components/homePage/ExperienceSection";
import ToolsSection from "../components/homePage/ToolsSection";
import Testimonials from "../components/homePage/Testimonials";

function Homepage() {
  return (
    <div className="pt-16">
      <ProfileCard />
      <Testimonials />
      <ExperienceSection />
      <ProjectsSection />
      <ToolsSection />
      <Footer />
    </div>
  );
}

export default Homepage;
