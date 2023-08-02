import React from 'react'
import './QtyScreen.css'
const QtyScreen = () => {
    const inputTagsArray = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div className='qty_wrapper'>
        <h3 className='text-center'>Quantity</h3>
         {inputTagsArray.map((index) => (
          <input key={index} type="text" className='bg-success qty_screen' />
        ))}
    </div>
  )
}

export default QtyScreen