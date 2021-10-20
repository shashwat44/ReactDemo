import "../../../App.css";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Toaster from "../../Toaster/toaster";
import Table from "react-bootstrap/Table";
import edit from "../../../public/icons/edit.png";
import deleteIcon from "../../../public/icons/delete.png";
import searchIcon from "../../../public/icons/search.png";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Customer(props) {
  console.log(props, "Customer props");
  let { customerList, getCustomersList } = props;

  useEffect(() => {
    getCustomersList();
  }, []);

  return (
    <Container fluid>
      <div className="">
        <br></br>
        <Row>
          <Col>
            {" "}
            <h4 className="theme-bluid">Customers List</h4>
          </Col>
          <Col></Col>
          <Col>
            <ButtonToolbar
              className="mb-3"
              aria-label="Toolbar with Button groups"
            >
              <InputGroup>
                <InputGroup.Text id="btnGroupAddon2">
                  <img src={searchIcon} />
                </InputGroup.Text>
                <input
                  className="search-box"
                  type="text"
                  placeholder="Search"
                />
              </InputGroup>
            </ButtonToolbar>
          </Col>
        </Row>
        <Table className="mx-top-set" striped bordered hover size="sm">
          <thead>
            <tr>
              <th className="mtabel-th">#</th>
              <th className="mtabel-th">Name</th>
              <th className="mtabel-th">Email</th>
              <th className="mtabel-th">Gender</th>
              <th className="mtabel-th">Action</th>
            </tr>
          </thead>
          <tbody>
            {customerList.customers &&
              customerList?.customers.map((val, index) => {
                return (
                  <>
                    <tr key={index + 1}>
                      <td>{val.id}</td>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.gender}</td>
                      <td>
                        <img className="mx-2" key={index} src={edit}></img>
                        <img
                          className="mx-2"
                          key={index - 21}
                          src={deleteIcon}
                        ></img>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Customer;
