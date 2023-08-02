import React, { useState } from "react";
import "./ScreenNav.css";
import STKCard from "../STKCards/STKCard";
import { MRKRows } from "../../../Utilities";
const ScreenNav = () => {
  const [rows, setrows] = useState(MRKRows);
  useState(() => {}, [rows]);
  return (
    <div className="screen_wrapper">
      {rows && rows.map((dataObject, index) => (
        <STKCard data={dataObject} />
      ))}
    </div>
  );
};

export default ScreenNav;
