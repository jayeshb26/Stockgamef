import React from "react";
import "./STKGrid.css";
const TopSTKGrid = () => {
const array = Array.from({ length: 10});
  return (
    <>
      <div className="d-flex">
        <div className="top_black_block"></div>
        <div className="TopSTKGrid">
            {array.map((item,index)=>{
                return <input type="text" placeholder={index} key={index} name="" id="" />
            })}
        </div>
      </div>
    </>
  );
};

export default TopSTKGrid;
