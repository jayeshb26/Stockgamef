import React from 'react';
import './CommonModal.css'
import { Modal, Button } from 'react-bootstrap';

const CommonModal = ({ show, onHide, title, body,footer }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        {footer}
      </Modal.Footer>
    </Modal>
  );
};

export default CommonModal;
