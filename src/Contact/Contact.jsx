import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col  
                    content-center gap-2 
                    tablet:mx-10
                    tablet:mt-10
                    '>
      <div className='border p-10'>
        <label className = 'block text-2xl'for = 'email'  >Email:</label>
        <input className='border-2 w-full text-lg' type= 'text' name = 'email' />
      </div>
      <div className='border mt-2 pr-10 pl-10 '>
      <label className = 'block text-2xl' for = 'message' >Message:</label>
        <textarea  className = 'border-2 w-full text-lg' rows='5' type= 'text' name = 'message' />
      </div>
       <div className='border'>

       <button>Send</button>
       </div>
      
    </div>
  )
}

export default Contact