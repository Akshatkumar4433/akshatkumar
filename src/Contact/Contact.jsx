import React from 'react'

function Contact() {
  return (
    <div className='flex flex-col border-2 
                    content-center gap-2 
                    tablet:mx-10
                    tablet:mt-10
                    '>
      <div className='border'>
        <label className = 'block text-xl'for = 'email'  >Email:</label>
        <input className='border-2' type= 'text' name = 'email' />
      </div>
      <div className='border'>
      <label className = 'block text-xl' for = 'message' >Message:</label>
        <textarea  className = 'border-2' type= 'text' name = 'message' />
      </div>
       <div className='border'>

       <button>Send</button>
       </div>
      
    </div>
  )
}

export default Contact