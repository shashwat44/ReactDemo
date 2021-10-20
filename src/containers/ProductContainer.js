import Product from "../components/product/Products";
import { connect } from "react-redux";
import { AddToCart } from "../services/action/product/product-actions";

const mapStateToProps = (state) => ({
  cartData: state,
});

const mapDispatchToProps = (dispatch) => ({
  CartHandler: (data) => dispatch(AddToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
