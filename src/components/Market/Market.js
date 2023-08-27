import React from "react";
import MrkHeader from "../common/Navbar/MrkHeader";
import Marquee from "../common/Marquee/Marquee";
import STKGrid from "../stock-grid/STKGrid";
import { SocketProvider } from "../Context/SocketContext";

export const Market = () => {
  return (
    <div>
      <SocketProvider>
      <MrkHeader />
      <div className="main_wrapper">
        <Marquee />
        <STKGrid />
      </div>
      </SocketProvider>
    </div>
  );
};

