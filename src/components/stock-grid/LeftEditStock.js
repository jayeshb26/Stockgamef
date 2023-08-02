import React from 'react'

const LeftEditStock = () => {
    const inputTagsArray = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <div>
        {inputTagsArray.map((index) => (
          <input key={index} type="text" className='bg_purpel'  />
        ))}
    </div>
  )
}

export default LeftEditStock