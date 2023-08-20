import React from "react";
import MrkHeader from "../common/Navbar/MrkHeader";
import Marquee from "../common/Marquee/Marquee";
// import STKGrid from "../stock-grid/STKGrid.txt(backup)";
import Footer from "../common/Footer/Footer";
import STKGrid from "../stock-grid/STKGrid";
// import ScreenNav from '../common/screenNav/ScreenNav'
// import StockScreen from '../stock-screen/StockScreen'

export const Market = () => {
  return (
    <div>
      <MrkHeader />
      <div className="main_wrapper">
        <Marquee />
        <STKGrid />
        <Footer />
      </div>
    </div>
  );
};

{
  /* <ScreenNav/>
<StockScreen/> */
}
