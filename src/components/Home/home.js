import "../../App.css";
import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Form, Field } from "react-final-form";
import NavSection from "../layout/Navbar/nav";
import ProductContainer from "../../containers/ProductContainer";

function Home(props) {
  return (
    <div>
      <NavSection data={{ color: "#DCDCDC" }} />

      <Container>
        <img
          style={{ width: 100 + "%", height: 243 + "px" }}
          src="https://img1.gadgetsnow.com/gd/imgbn/flash-sale-16july.jpg"
        ></img>
        <ProductContainer />
      </Container>
    </div>
  );
}

export default Home;
