import React from "react";
import "./StockGrid.css";
import TopEditStock from "./TopEditStock";
import LeftEditStock from "./LeftEditStock";
const StockGrid = () => {
  const inputTagsArray = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <div className="d-flex stk_grid">
      <div className="left_side">
        <LeftEditStock />
      </div>
      <div className="right_side">
        <TopEditStock />
        {inputTagsArray.map((index) => (
          <input key={index} readOnly={true} type="text" value={index} />
        ))}
      </div>
    </div>
  );
};

export default StockGrid;
