import React from 'react'

const TopEditStock = () => {
    const topArray = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <div>
        {topArray.map((index) => (
          <input key={index} type="text" className='bg_purpel'  />
        ))}
    </div>
  )
}

export default TopEditStock