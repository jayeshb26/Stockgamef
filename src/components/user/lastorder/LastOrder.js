import React from "react";
import { useState } from "react";
import LastOrderDetail from "./Lastorder-modal/LastOrderDetail";

const LastOrder = () => {
  const [openOrderDetail, setOPenOrderDetail] = useState(false);

  const openModal = () => {
    setOPenOrderDetail(true);
  };

  const hideModal = () => {
    setOPenOrderDetail(false);
  };

  return (
    <>
      <span className="c_pointer" onClick={openModal}>Last Order</span>
      {openOrderDetail && <LastOrderDetail onHide={hideModal}/>}
    </>
  );
};

export default LastOrder;
