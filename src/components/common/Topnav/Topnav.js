import React, { useEffect, useState } from 'react'
import './Topnav.css'
const Topnav = () => {
  const [date,setDate] = useState();
  const getCurrentTime = () =>{
    let nd;
    let utc;
    const d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000 * 5.5));
    var ist = nd.toLocaleTimeString();
    return setDate(ist);
  }
  useEffect(()=>{
    const interval = setInterval(()=>{
        getCurrentTime();
    },1000)
    return () => clearInterval(interval);
  },[])
  return (
    <div className='top-wrapper'>
        <ul className='top-ul'>
            <li className='top-li'>
                <span className='h5'>Welcome Online Matka (Demo ID)</span>
            </li>
            <li>
                <span className='h5'>Current Time {date} </span>
            </li>
            <li>
                <span>
                    <button className='btn btn-warning'>Back</button>
                </span>
                <span>
                    <button className='btn blue-btn'>Logout</button>
                </span>
            </li>
        </ul>
    </div>
  )
}

export default Topnav;