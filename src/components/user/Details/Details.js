import React from "react";
import CommonModal from "../../common/common-modal/CommonModal";
import { useState } from "react";

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
        <p>Works</p>
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
