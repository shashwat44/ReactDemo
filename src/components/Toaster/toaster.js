import "../../App.css";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function Toaster(props) {
  const [show, setShow] = useState(props.action);

  return (
    <Row>
      <Col xs={6}>
        <ToastContainer position="top-end" className="p-3">
          <Toast
            onClose={() => setShow(false)}
            className="d-inline-block m-1"
            bg={props.type}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Body className={"Dark" && "text-white"}>
              {props.msg}
            </Toast.Body>
          </Toast>
        </ToastContainer>
      </Col>
    </Row>
  );
}

export default Toaster;
