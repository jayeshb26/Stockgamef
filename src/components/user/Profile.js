import React, { useState } from "react";
import CommonModal from "../common/common-modal/CommonModal";
import ProfileDetails from "./profileDeatils/ProfileDetails";
import { Button, ButtonGroup } from "react-bootstrap";

const Profile = ({ showModal, setShowModal }) => {
  // console.log('showModal',showModal)
  //   const [showModal, setShowModal] = useState(false);
  //   const handleCloseModal = () => {
  //     setShowModal(false);
  //   };
  // const hideModalComp = () => {
  //     setShowModal(false);
  //   };
  const [modalShow, setModalShow] = useState(false);

  const openModal = () => {
    setModalShow(true);
  };

  const closeModal = () => {
    setModalShow(false);
  };

  return (
    <>
      {/* <CommonModal
        show={showModal}
        title="Profile"
        body={<ProfileDetails />}
        footer={<button className="btn btn-danger" onClick={hideModalComp}>Close</button> }
      />
      <span>Profile</span> */}
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
      <span onClick={openModal}>Profile</span>
    </>
  );
};

export default Profile;
