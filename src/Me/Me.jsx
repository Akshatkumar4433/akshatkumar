import React from 'react'
import blogs from './Blogs/blogList'

function Me() {
   

  const blogList = blogs.map((blog) => (
      <Blog
            key = {blog.id}
            blog = {blog}
      />
  ))
  //Research why list solution is not working
  return (
    <div className='mt-7 flex flex-col '>
        <ul className='list-disc'>
           {blogList} 
        </ul>
           
    </div>
  )
}


function Blog({blog}) {

    return (
        <>
        <a href = {blog.link} target = '_blank'>
         <div className = 'border-2 border-[#E8A0BF] p-2 mt-1 hover:bg-[#E8A0BF] '>
             <h1 className='text-xl'>{blog.name}</h1>
             <p>{blog.date}</p>   
        </div>
        </a>
       </>
    )
}
export default Me;