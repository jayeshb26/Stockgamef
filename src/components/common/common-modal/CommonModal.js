import React from 'react';
import './CommonModal.css'
import { Modal } from 'react-bootstrap';

const CommonModal = ({ show, onHide, title, body,footer,children }) => {
  // return (
  //   <Modal show={show} onHide={onHide}>
  //     <Modal.Header closeButton>
  //       <Modal.Title>{title}</Modal.Title>
  //     </Modal.Header>
  //     <Modal.Body>{body}</Modal.Body>
  //     <Modal.Footer>
  //       {footer}
  //     </Modal.Footer>
  //   </Modal>
  // );
    return <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
};

export default CommonModal;
