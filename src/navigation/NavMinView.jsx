import React, { useState } from 'react'
import {motion} from 'framer-motion';
import MenuButton from './MenuButton';



function NavMinView() {
    const links = [
        {name:'Projects', to : 'projects' , id: 1},
        {name: 'Contact', to: 'contact' , id: 2}
    ]  
  const [openMenuBoolean,setOpenMenuBoolean] = useState(false);
  
  const openMenu = () => {
      setOpenMenuBoolean(!openMenuBoolean);
  }

  return (
      <>
    <div className='hidden tablet:flex flex-wrap '>
        <div className='grow  text-left ml-4 '>
                <span className='text-2xl'>
                    <a href = '/'>Akshat Kumar</a>
                </span>
        </div>
        <div className='   mr-4 box-border'>
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
        <div className='flex flex-col w-screen ml-4 mr-4 text-center text-xl '>
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