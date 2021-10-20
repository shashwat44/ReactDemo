import "../../App.css";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Toaster from "../Toaster/toaster";
import RcModal from "../Modal/modal";

function Product(props) {
  let [show, setShow] = useState(false);
  let [toastMsg, settoastMsg] = useState("");
  let [type, setToastType] = useState("success");
  let [isOpen, setOpenModal] = useState(false);

  let showAlert = (_action, msg, type) => {
    setShow(_action);
    settoastMsg(msg);
    setToastType(type);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  let openModal = (val) => {
    props.CartHandler({
      data: val,
    });
    // setOpenModal(true);
  };

  console.log(props, "Product props");

  let items = [
    {
      name: "Iphone",
      img:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000",
      price: 85400,
    },
    {
      name: "smasung",
      img:
        "https://images.samsung.com/is/image/samsung/p5/in/smartphones/galaxy-s9/images2/gallery/galaxy-s9_gallery-color_normal-c1-06.jpg?$ORIGIN_JPG$",
      price: 55000,
    },
  ];
  let [products, setProducts] = useState(items);
  return (
    <Container fluid>
      {products.map((val, index) => {
        return (
          <div key={index}>
            <img
              style={{
                height: 120 + "px",
                widows: 150 + "px",
              }}
              src={val.img}
            />
            <h5>{val.name}</h5>
            <button
              className="btn btn-primary"
              onClick={() => {
                showAlert(true, "Added to Cart", "success");
                openModal(val);
              }}
            >
              Add To Cart
            </button>
            <br></br>
            <br></br>
            <br></br>
          </div>
        );
      })}

      {show ? <Toaster action={show} msg={toastMsg} type={type} /> : null}
      {isOpen ? <RcModal action={true} /> : null}
    </Container>
  );
}

export default Product;
