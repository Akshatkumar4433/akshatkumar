import React from 'react'
import NavDesktop from './NavDesktop'
import NavMinView from './NavMinView'

function Navigation() {
  

  return (
      <div className='desktop:mt-7 tablet:border  text-[#1D1D1]'>
          <NavDesktop/>
          <NavMinView/>
     </div>
  )
}

export default Navigation