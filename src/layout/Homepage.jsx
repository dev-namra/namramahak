import React from 'react';
import HeroCard from '../components/homePage/HeroCard';
import PortfolioImage from '../components/homePage/PortfolioImage';
import AboutMeSection from '../components/homePage/AboutMeSection';
import ResumeSection from '../components/homePage/ResumeSection';
import ProjectSection from '../components/homePage/ProjectSection';
import ContactCard from '../components/homePage/ContactCard';
import ProjectHighlight from '../components/homePage/ProjectHighlight';

function Homepage() {
  return (
    <div className="container mx-auto flex flex-col gap-8">
      <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 my-8">
        <HeroCard />
        <PortfolioImage />
      </div>
      <AboutMeSection />
      <ResumeSection />
      <ProjectHighlight />
      <ProjectSection />
      <ContactCard />
    </div>
  );
}

export default Homepage;
