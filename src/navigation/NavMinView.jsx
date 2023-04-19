import React, { useState } from 'react'

function NavMinView() {
  const [openMenuBoolean,setOpenMenuBoolean] = useState(false);
  
  const openMenu = () => {
      setOpenMenuBoolean(!openMenuBoolean);
  }

  return (
      <>
    <div className='hidden tablet:flex flex-wrap border'>
        <div className='grow  text-left ml-4 border'>
                <span className='text-2xl'>
                    Akshat Kumar
                </span>
        </div>
        <div className='  border mr-4 box-border'>
            <button
                onClick={openMenu}
            >Menu</button>
        </div>
    </div>
     {openMenuBoolean?<Menu/>:false}
    </>
  )
}



const Menu = () => {
    return (
        <div className='hidden tablet:flex'>
            <ul>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    );
}



export default NavMinView