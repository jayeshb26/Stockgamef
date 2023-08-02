import React from "react";

const STKCard = ({ data }) => {
  const transformKey = (key) => {
    return key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  return (
    <>
      {Object.entries(data).map(([key, value]) => (
        <div className="card" key={key}>
          {/* <div className={`card`} key={key}> */}
            <div class="card-header">{transformKey(key)}</div>
            <div className="card-body">
              <p>{value}</p>
            </div>
          {/* </div> */}
        </div>
      ))}
    </>
  );
};

export default STKCard;
//   {Object.entries(data).map(([key, value]) =>
//   <div className={`card`} key={key}>
//     <div class="card-header">
//       {transformKey(key)}
//     </div>
//     <div className="card-body">
//       <p>{value}</p>
//     </div>
//   </div>
// )}
