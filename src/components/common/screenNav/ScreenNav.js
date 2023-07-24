import React from 'react'
import './ScreenNav.css'
const ScreenNav = () => {
  return (
    <div>
        <ul className='screen_nav'>
            <li><span className='h3'>Market</span></li>
            <li><button className='btn inkcolor-bg'>Open</button></li>
            <li><button className='btn inkcolor-bg'>Close</button></li>
            <li><button className='btn inkcolor-bg'>Jodi</button></li>
            <li><button className='btn inkcolor-bg'>Panel</button></li>
            <li><button className='btn inkcolor-bg'>Qty</button></li>
        </ul>
    </div>
  )
}

export default ScreenNav