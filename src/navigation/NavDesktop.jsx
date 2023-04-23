import React from 'react'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import EmailIcon from '@mui/icons-material/Email';
import {motion} from 'framer-motion';


function NavDesktop({links}) {
  return (
    <div className='hidden desktop:flex flex-row  justify-around border '>
        <div className='grow  text-center'>
                <span className='text-2xl'>
                    <a href = '/'>Akshat Kumar</a>
                </span>
        </div>
        <div className='text-4xl grow  flex  gap-7 justify-center'>
                        <motion.div
                           whileHover={{ scale: 1.2 }}
                           whileTap={{ scale: 0.9 }}
                           transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <a href = 'projects'>
                            <ReceiptLongIcon
                                fontSize = 'inherit'
                            />
                            </a>
                        </motion.div>
                        <motion.div
                           whileHover={{ scale: 1.2 }}
                           whileTap={{ scale: 0.9 }}
                           transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                        <a href = 'contact'>
                        <EmailIcon
                            fontSize = 'inherit'
                        />
                        </a>
                        </motion.div>
                        

                
        </div>
    </div>
  )
}

export default NavDesktop