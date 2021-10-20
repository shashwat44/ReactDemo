import Home from "../components/Home/home";
import { connect } from "react-redux";
import { AddToCart } from "../services/action/product/product-actions";

const mapStateToProps = (state) => ({
    cartData:state
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler : data => dispatch(AddToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);

