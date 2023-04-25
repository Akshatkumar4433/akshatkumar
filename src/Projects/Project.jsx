import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

function Project({ key,project}) {
    console.log(project)
  return (
    <div className='border-2  flex flex-col gap-1 text-center'>
            <img src={project.images[0]} 
            alt={project.name} 
               className ='mx-auto'/>
        <div className='flex mx-auto gap-2'>
            <h1 className=' text-xl'>{project.name}</h1>
            <GitHubIcon/>
        </div>
        <p className=' border text-lg'>{project.description}</p>
    </div>
  )
}

export default Project