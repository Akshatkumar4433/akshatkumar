import React from 'react'
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';


function Navigation() {
  return (
    <div className='flex flex-row gap-2'>
        <div className='grow border text-lg'>
            <span className='text-lg'>
                Akshat Kumar
            </span>
        </div>
        <div className='border' >
            <span className='text-base'>
                <ReceiptLongIcon/>
            </span>
        </div>
        <div className='border'>
            <span className='text-base'>
                Contact
            </span>
        </div>
    </div>
  )
}

export default Navigation