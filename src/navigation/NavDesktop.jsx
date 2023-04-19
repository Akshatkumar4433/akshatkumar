import React from 'react'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import EmailIcon from '@mui/icons-material/Email';
import {motion} from 'framer-motion';


function NavDesktop() {
  return (
    <div className='hidden desktop:flex flex-row  justify-around mt-7 '>
        <div className='grow  text-center'>
                <span className='text-2xl'>
                    Akshat Kumar
                </span>
        </div>
        <div className='text-4xl grow  flex  gap-7 justify-center'>
                        <motion.div
                           whileHover={{ scale: 1.2 }}
                           whileTap={{ scale: 0.9 }}
                           transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <ReceiptLongIcon
                                fontSize = 'inherit'
                            />
                        </motion.div>
                        <motion.div
                           whileHover={{ scale: 1.2 }}
                           whileTap={{ scale: 0.9 }}
                           transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                        <EmailIcon
                            fontSize = 'inherit'
                        />
                        </motion.div>
                        

                
        </div>
    </div>
  )
}

export default NavDesktop