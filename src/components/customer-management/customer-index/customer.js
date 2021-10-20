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
import services from "../../../services/api";
import { GET_CUSTOMERS_API } from "../../../services/urls";
import NavSection from "../../layout/Navbar/nav";
import AddEditCustomer from "../add-edit/add-edit-customer";

function Customer(props) {
  console.log(props, "Customer props");
  // let { customerList, getCustomersList } = props;
  let [customerList, setCustomerList] = useState([]);
  let [isOpen, setIsOpen] = useState(false);

  const getCustomersList = async () => {
    let data = await services.get(GET_CUSTOMERS_API);
    let list = data["object"]["UserList"];
    setCustomerList(list);
  };

  useEffect(() => {
    getCustomersList();
  }, []);

  const openAddEditModal = () => {
    setIsOpen(true);
   
  };

  return (
    <Container fluid>
      <NavSection data={{ color: "#DCDCDC" }} />
      <br></br>
      <br></br>
      <button
        onClick={openAddEditModal}
        type="button"
        className="btn btn-success add-customer-btn"
      >
        + Add Customer
      </button>
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
            {customerList &&
              customerList.map((val, index) => {
                return (
                  <>
                    <tr key={index + 1}>
                      <td >{val._id}</td>
                      <td>{val.fullName}</td>
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

      {isOpen ? <AddEditCustomer /> : null}
    </Container>
  );
}

export default Customer;
