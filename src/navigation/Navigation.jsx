import React from 'react'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import EmailIcon from '@mui/icons-material/Email';

function Navigation() {
  return (
    <div className='flex flex-row gap-2'>
        <div className='grow  text-lg'>
            <span className='text-lg'>
                Akshat Kumar
            </span>
        </div>
        <div className='text-4xl' >
                <ReceiptLongIcon
                    fontSize = 'inherit'
                />
        </div>
        <div className='text-4xl'>
                <EmailIcon
                   fontSize = 'inherit'
                />
        </div>
        
    </div>
  )
}

export default Navigation