import React from "react";
import CommonModal from "../../common/common-modal/CommonModal";
import { useState } from "react";
import './Details.css';

const Details = () => {
  const [modalShow, setModalShow] = useState(false);
  const closeModal = () => {
    setModalShow(false);
  };
  const showModal = () => {
    setModalShow(true);
  };

  return (
    <>
      <span onClick={showModal}>Details</span>
      <CommonModal show={modalShow} onHide={closeModal} title="Details">
        <div className="_details">
            <div className="detail_wrapper">
              <div className="cell">
                <span className="head">Total Order Point</span>:<span className="description">100</span>
              </div>
              <div className="cell">
                <span  className="head">Total success point</span>:<span className="description">30</span>
              </div>
              <hr />
              <div className="cell">
                <span  className="head">Total</span>:<span className="description">70</span>
              </div>
            </div>
        </div>
        <div className="button_wrapper">
          <button
            className="btn btn-danger f_right"
            type="button"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </CommonModal>
    </>
  );
};

export default Details;
