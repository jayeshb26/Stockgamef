import React from 'react'
import './MrkHeader.css';
import Topnav from '../Topnav/Topnav';
const MrkHeader = () => {
  return (
    <div className='nav navbar'>
      <div className="navbar_wrapper">
        <div className="logo">
          <img src="/images/matka.png" alt="logo" />
        </div>
        <div className="flex_wrapper">
          <Topnav />
          <div className="user-screens">
            <ul>
              <li><button className='btn blue-btn'>Account</button></li>
              <li><button className='btn blue-btn'>Password</button></li>
              <li><button className='btn blue-btn'>Reprint</button></li>
              <li><button className='btn blue-btn'>Cancel</button></li>
              <li><button className='btn blue-btn'>Result</button></li>
            </ul>
          </div>
          <div className="market-list">
            <ul>
              <li className='orange-bg'>
                <p>Time Bazar</p>
                <p>146-19-270</p>
              </li>
              <li className='pinkShadow-bg'>
                <p>Time Bazar</p>
                <p>146-19-270</p>
              </li>
              <li className='darkpink-bg'>
                <p>Time Bazar</p>
                <p>146-19-270</p>
              </li>
              <li className='blue-bg'>
                <p>Time Bazar</p>
                <p>146-19-270</p>
              </li>
              <li className='lightchocolate-bg'>
                <p>Time Bazar</p>
                <p>146-19-270</p>
              </li>
              <li className='lavandercolor-bg'>
                <p>Time Bazar</p>
                <p>146-19-270</p>
              </li>
              <li className='greenshad-bg'>
                <p>Time Bazar</p>
                <p>146-19-270</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MrkHeader;
