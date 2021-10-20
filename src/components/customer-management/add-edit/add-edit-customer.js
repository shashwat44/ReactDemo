import React, { useEffect, useState } from "react";
import "../../../App.css";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Field } from "react-final-form";
import services from "../../../services/api";
import Toaster from "../../Toaster/toaster";
import { SAVE_CUSTOMERS_API } from "../../../services/urls";

function AddEditCustomer(props) {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(props.action);
  let [show, setShow] = useState(true);
  let [toastMsg, settoastMsg] = useState("");
  let [type, setToastType] = useState("success");

  useEffect(()=>{
    setShow(true);
  },[]);

  const handleClose = () => setShow(false);
  const onSubmit = async (values) => {
    console.log(values, "values");
    let payload = { ...values, ownerId: "5fdddea84bffe93a67885ed0" };
    let data = await services.post(SAVE_CUSTOMERS_API, payload);
    let apiMsg = data["object"]['msg'];
    settoastMsg(apiMsg);
    setShow(false)
  };

  return (
    <div>
      <Modal
        size="lg"
        keyboard={false}
        color={"success"}
        show={show}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header className="success" closeButton>
          <Modal.Title
            className="theme-bluid"
            id="example-modal-sizes-title-lg"
          >
            Add Customer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col></Col>
              <Col xs={6}>
                <Form
                  onSubmit={onSubmit}
                  validate={(values) => {
                    console.log(values, "values");
                    const errors = {};
                    if (!values.fullName) {
                      errors.fullName = "Required";
                    }
                    if (!values.mobile) {
                      errors.mobile = "Required";
                    }

                    if (values.mobile && values.mobile.toString().length < 10) {
                      errors.mobile = "Mobile must have 10 digit numbers";
                    }
                    return errors;
                  }}
                  render={({
                    submitError,
                    handleSubmit,
                    form,
                    submitting,
                    pristine,
                    values,
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <Field name="fullName">
                        {({ input, meta }) => (
                          <div>
                            <input
                              className="form-control"
                              {...input}
                              type="text"
                              placeholder="Name"
                            />
                            {(meta.error || meta.submitError) &&
                              meta.touched && (
                                <span style={{ color: "red" }}>
                                  {meta.error || meta.submitError}
                                </span>
                              )}
                          </div>
                        )}
                      </Field>
                      <Field name="mobile">
                        {({ input, meta }) => (
                          <div>
                            <input
                              className="form-control"
                              {...input}
                              type="number"
                              placeholder="Mobile"
                            />
                            {meta.error && meta.touched && (
                              <span style={{ color: "red" }}>{meta.error}</span>
                            )}
                          </div>
                        )}
                      </Field>
                      <Field name="email">
                        {({ input, meta }) => (
                          <div>
                            <input
                              className="form-control"
                              {...input}
                              type="email"
                              placeholder="Email (optional)"
                            />
                            {meta.error && meta.touched && (
                              <span style={{ color: "red" }}>{meta.error}</span>
                            )}
                          </div>
                        )}
                      </Field>
                      {submitError && (
                        <div className="error">{submitError}</div>
                      )}
                      <br></br>
                      <div className="buttons">
                        <button
                          className="form-control btn btn-success"
                          type="submit"
                          disabled={submitting}
                        >
                          Add
                        </button>
                        
                      </div>
                    </form>
                  )}
                />
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
      {show ? <Toaster action={show} msg={toastMsg} type={type} /> : null}
    </div>
  );
}

export default AddEditCustomer;
