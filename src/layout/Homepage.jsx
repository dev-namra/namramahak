import ProfileCard from '../components/homePage/ProfileCard';
import ProjectsSection from '../components/homePage/ProjectsSections';
import Footer from '../components/common/Footer';
import ExperienceSection from '../components/homePage/ExperienceSection';
import ToolsSection from '../components/homePage/ToolsSection';

function Homepage() {
  return (
    <div className="pt-16 bg-[linear-gradient(to_bottom,_#d1c4e9,_#f8bbd0,_#fbe9e7,_#fff9c4)]">
        <ProfileCard />
        <ExperienceSection />
        <ProjectsSection />
        <ToolsSection />
        <Footer />
    </div>
  );
}

export default Homepage;
