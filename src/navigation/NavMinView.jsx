import React, { useState } from 'react'
import {motion} from 'framer-motion';


function NavMinView({sideVariants}) {
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
     {openMenuBoolean?<Menu sideVariants = {sideVariants}/>:false}
    </>
  )
}



const Menu = ({sideVariants}) => {
    return (
        <motion.aside
         initial = {{width:0}}
         animate= {{width:700}}
        >
        <motion.div 
            initial = "closed"
            animate = "open"
            variants = {sideVariants}
        >
        <div className='hidden tablet:flex border flex-col'>
            <div>
                <p>Images</p>
            </div>
            <ul className='border text-center'>
            <motion.div
                           whileHover={{ scale: 1.2 }}
                           whileTap={{ scale: 0.9 }}
                           transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <li>
                    <motion.a href = {''}>
                        Projects
                    </motion.a>
                </li>
            </motion.div>
            <motion.div
                           whileHover={{ scale: 1.2 }}
                           whileTap={{ scale: 0.9 }}
                           transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
             <li>
                 <motion.a href = {''}>
                 Contact
                 </motion.a>
            </li>
            </motion.div>
                
            </ul>
        </div>
        </motion.div>
        </motion.aside>
    );
}



export default NavMinView