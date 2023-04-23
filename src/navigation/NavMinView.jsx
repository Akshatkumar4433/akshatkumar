import React, { useState } from 'react'
import {motion} from 'framer-motion';
import MenuButton from './MenuButton';

function NavMinView({links}) {
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
            >
                <MenuButton
                    isOpen = {openMenuBoolean}
                />
            </button>
        </div>
        {openMenuBoolean?<Menu links = {links}/>:false}
    </div>
    </>
  )
}



const Menu = ({sideVariants,links}) => {
    return (
        <div className='flex border flex-col w-screen ml-4 mr-4 text-center text-xl'>
            {links.map(({name, to, id}) => (
                  <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
               >
                <a key = {id} href = {to}>
                            {name}
                </a>
                </motion.div>
            ))}
        </div>
       
    );
}



export default NavMinView