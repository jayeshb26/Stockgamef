import React, { useState } from "react";
import MrkHeader from "../common/Navbar/MrkHeader";
import Marquee from "../common/Marquee/Marquee";
import Footer from "../common/Footer/Footer";
import STKGrid from "../stock-grid/STKGrid";
import { SocketProvider } from "../Context/SocketContext";

export const Market = () => {
  const [reset, setReset] = useState(false);
  return (
    <div>
      <SocketProvider>
      <MrkHeader />
      <div className="main_wrapper">
        <Marquee />
        <STKGrid reset={reset} setReset={setReset}/>
        <Footer  setReset={setReset}/>
      </div>
      </SocketProvider>
    </div>
  );
};

