import React from 'react'
import NavDesktop from './NavDesktop'
import NavMinView from './NavMinView'

function Navigation() {
  

  return (
      <div className = ' font-navigation font-semibold text-[#E8A0BF]'>
          <NavDesktop/>
          <NavMinView/>
     </div>
  )
}

export default Navigation