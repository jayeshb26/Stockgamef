import React from "react";
import "./STKGrid.css";
const LeftSTKGrid = () => {
  const array = Array.from({ length: 10 });

  return (
    <div className="LeftSTKGrid">
      {array.map((item, index) => {
        return (
          <input type="text" placeholder={index} key={index} name="" id="" />
        );
      })}
    </div>
  );
};

export default LeftSTKGrid;
