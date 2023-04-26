import { Description } from '@mui/icons-material'
import React from 'react'
import Project from './Project'
import projectsData from './ProjectsData'



function Projects() {

  const projects = projectsData.map((project) => (
      <Project
          key = {project.id}
          project = {project}
     />
  ))
  return (
    <div className='h-screen desktop:mt-5 tablet:mt-2'>
      {projects}
    </div>
  )
}

export default Projects