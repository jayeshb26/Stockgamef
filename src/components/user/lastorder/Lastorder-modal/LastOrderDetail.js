import React from "react";
import CommonModal from "../../../common/common-modal/CommonModal";
import { useEffect } from "react";
import { useState } from "react";

const LastOrderDetail = ({ onHide }) => {
  const [lastOrder, setLastOrder] = useState([]);
  useEffect(() => {
    const lastOrderDetail = JSON.parse(localStorage.getItem("lastOrder"));
    setLastOrder(lastOrderDetail);
  }, []);
  console.log("lastOrderDetail", lastOrder);
  return (
    <CommonModal show={true} onHide={onHide} title="Last Order">
      <div className="lastorder_wapper">
        {lastOrder ? <div className="filed_wrapper">
          <div className="filed">
            <span>Player ID</span> : &nbsp; {lastOrder?.playerId}
          </div>
          <div className="filed">
            <span>Stock Name</span> : &nbsp; {lastOrder?.position?.[0].name}
          </div>
          <div className="filed">
            <span>Stock Symbol</span> : &nbsp; {lastOrder?.position?.[0].symbol}
          </div>
          <div className="filed">
            <span>Total Bid Price</span> : &nbsp;{" "}
            {lastOrder?.position?.[0].price}
          </div>
          <div className="filed">
            <span>Market</span> : &nbsp; {lastOrder?.position?.[0].market}
          </div>
        </div>:
        <div className="no_data">
          <p>There are no details of your last order.</p>
        </div>
        }
      </div>
      <div className="button_wrapper">
        <button
          className="btn btn-danger f_right"
          type="button"
          onClick={onHide}
        >
          Close
        </button>
      </div>
    </CommonModal>
  );
};

export default LastOrderDetail;
