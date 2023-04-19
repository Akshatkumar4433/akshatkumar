import React from 'react'
import NavDesktop from './NavDesktop'
import NavMinView from './NavMinView'

function Navigation() {
   const links = [
       {name:'Projects', to : '#' , id: 1},
       {name: 'Contact', to: '#' , id: 2}
   ]

  return (
      <div className='mt-7'>
          <NavDesktop/>
          <NavMinView links = {links}/>
     </div>
  )
}

export default Navigation