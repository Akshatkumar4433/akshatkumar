import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col  
                    gap-2 
                    mx-10
                    mt-10
                    border-4
                    border-dotted
                    '>
      <form method='post' action = "https://formspree.io/f/mdovyljj">
      <div className=' p-10'>
        <label className = 'block text-2xl'for = 'email'  >Email:</label>
        <input className='border-2 w-full text-lg' type= 'text' name = 'email' required/>
      </div>
      <div className=' mt-2 pr-10 pl-10  '>
      <label className = 'block text-2xl' for = 'message' >Message:</label>
        <textarea  className = 'border-2 w-full text-lg' rows='5' type= 'text' name = 'message' required/>
      </div>
       <div className=' desktop:pr-30 '>

       <button class=" w-full  mt-3  text-white font-bold py-2 px-4 border rounded">
        Send
        </button>
       </div>
      </form>
    </div>
  )
}

export default Contact