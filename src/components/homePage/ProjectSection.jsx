import React from 'react';
import {ProjectCard} from './ProjectCard';

const ProjectSection = () => {
  const projects = [
    {
      title: 'UI/UX Design for banking platform',
      category: 'UX/UI design',
      date: 'May 2024',
      imageUrl:
        'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1f18/6501ddaa88c3e8498eab2069_mobile-app-banking-thumbnail-simplefolio-x-webflow-template.png',
      logoUrl:
        'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1f18/6501ddaa88c3e8498eab2068_bnkly-x-logo-web-simplefolio-x-webflow-template.svg',
      link: '/project/ui-ux-design-for-banking-platform',
    },
    {
      title: 'Website Design for CRM platform',
      category: 'Product design',
      date: 'May 2024',
      imageUrl:
        'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1f18/6501ddaa88c3e8498eab2091_crm-platform-analyst-simplefolio-x-webflow-template.png',
      logoUrl:
        'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1f18/6501ddaa88c3e8498eab2082_crm-platform-logo-icon-simplefolio-x-webflow-template.svg',
      link: '/project/website-design-for-crm-platform',
    },
    {
      title: 'Frontend development for remote HR App',
      category: 'Frontend development',
      date: 'May 2024',
      imageUrl:
        'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1f18/6501ddaa88c3e8498eab2092_development-hr-app-simplefolio-x-webflow-template.png',
      logoUrl:
        'https://cdn.prod.website-files.com/6501ddaa88c3e8498eab1f18/6501ddaa88c3e8498eab2085_hr-app-logo-icon-simplefolio-x-webflow-template.svg',
      link: '/project/frontend-development-for-remote-hr-app',
    }
  ];

  return (
    <section className="py-1">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
