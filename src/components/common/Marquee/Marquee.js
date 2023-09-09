import React, { useEffect } from "react";
import './Marquee.css'
import { useSocket } from "../../Context/SocketContext";
import { useState } from "react";

const Marquee = () => {
  const { mainData } = useSocket();

  const [mrqResult,setMrqResult] = useState([])

  useEffect(()=>{
    if(mainData){
      setMrqResult(mainData?.data?.alstresult)
    }
  },[mainData])
  return (
    <>
      <marquee behavior="slide " direction="">
        {
          mrqResult?.length ? mrqResult.map((result)=>{
            return <span className="mrq_text">{result.symbol} {result.number}-{result.status}</span>
          })
          :null
        }
      </marquee>
    </>
  );
};

export default Marquee;
