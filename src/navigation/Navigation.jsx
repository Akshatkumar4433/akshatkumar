import React from 'react'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import EmailIcon from '@mui/icons-material/Email';

function Navigation() {
  return (
    <div className='flex flex-row  justify-around'>
        <div className='grow border text-center'>
                <span className='text-2xl'>
                    Akshat Kumar
                </span>
        </div>
        <div className='text-4xl grow w-20 border' >
                <ReceiptLongIcon
                    fontSize = 'inherit'
                />
        </div>
        <div className='text-4xl grow w-20 border'>
                <EmailIcon
                   fontSize = 'inherit'
                />
        </div>
        
    </div>
  )
}

export default Navigation