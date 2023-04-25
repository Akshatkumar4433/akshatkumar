import React from 'react'

function Project({ key,project}) {
    console.log(project)
  return (
    <div className='border-2  flex flex-col'>
        <figure>
            <img src={project.images[0]} 
            alt={project.name} 
            className = 'object-cover'
            />
        </figure>
        <h1>{project.name}</h1>
        <div>
            <p>{project.description}</p>
         </div> 
    </div>
  )
}

export default Project