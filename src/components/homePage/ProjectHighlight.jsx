import React from 'react'
import { ProjectCardBig, ProjectCardBigData } from './ProjectCard';



function ProjectHighlight() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-stretch gap-8 my-8">
        <ProjectCardBig />
        <ProjectCardBigData />
      </div>
  )
}

export default ProjectHighlight