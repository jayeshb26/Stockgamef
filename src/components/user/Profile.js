import React, { useState } from "react";
import CommonModal from "../common/common-modal/CommonModal";
import ProfileDetails from "./profileDeatils/ProfileDetails";

const Profile = ({ showModal, setShowModal }) => {
  const [modalShow, setModalShow] = useState(false);

  const openModal = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <>
      <CommonModal show={modalShow} onHide={closeModal} title="Profile Details">
        <ProfileDetails />
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
      <div onClick={openModal}>Profile</div>
    </>
  );
};

export default Profile;
