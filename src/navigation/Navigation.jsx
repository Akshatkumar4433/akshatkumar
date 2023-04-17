import React from 'react'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import EmailIcon from '@mui/icons-material/Email';

function Navigation() {
  return (
    <div className='flex flex-row  justify-around'>
        <div className='grow  text-center'>
                <span className='text-2xl'>
                    Akshat Kumar
                </span>
        </div>
        <div className='text-4xl grow  flex  gap-7 justify-center'>
                        <ReceiptLongIcon
                            fontSize = 'inherit'
                        />
                        <EmailIcon
                            fontSize = 'inherit'
                        />

                
        </div>
        
    </div>
  )
}

export default Navigation