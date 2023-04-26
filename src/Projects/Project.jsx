import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {motion} from 'framer-motion';

function Project({ key,project}) {
    
  return (
    <div className='border-dotted border-4   flex flex-col gap-1 text-center'>
            <img src={project.images[0]} 
            alt={project.name} 
               className ='mx-auto'/>
        <div className='flex mx-auto gap-2'>
            <h1 className=' text-xl'>{project.name}</h1>
            <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
               >
            <a href = {project.githubUrl} target = '_blank' rel='noreferrer'>
                <GitHubIcon/>
            </a>
            </motion.div>
            <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
               >
            <a href={project.liveUrl} target = '_blank' rel='noreferrer'>
                {project.isLive?
                    <OpenInNewIcon/>
                    :false}
            </a>
            </motion.div>
        </div>
        <p className='  text-lg tablet: mx-20 desktop:ml-40 desktop:mr-40'>{project.description}</p>
    </div>
  )
}

export default Project