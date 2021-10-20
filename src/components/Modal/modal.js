import "../../App.css";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function RcModal(props) {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(props.action);
  return (
    <div>
      <Modal
        size="lg"
        keyboard={false}
        show={props.action}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </div>
  );
}

export default RcModal;
