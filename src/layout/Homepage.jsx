import React from 'react';
import ProfileCard from '../components/homePage/ProfileCard';
import HeroSection from '../components/homePage/HeroSection';
import ProjectSection from '../components/homePage/ProjectSection';
import ExperienceSection from '../components/homePage/ExperienceSection';
import ContactSection from '../components/homePage/ContactSection';

function Homepage() {
  return (
    <div className="flex h-screen">
      {/* Fixed Profile Card - left 1/3 */}
      <div className="w-1/3 fixed top-0 left-0 h-screen p-6 flex items-center justify-center">
        <ProfileCard />
      </div>

      {/* Scrollable content - right 2/3 */}
      <div className="w-2/3 ml-[33.33%] overflow-y-scroll h-screen px-6 py-8 md:py-24 flex flex-col gap-8">
        <HeroSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default Homepage;
