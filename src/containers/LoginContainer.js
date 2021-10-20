import { loginCustomer } from "../services/action/login/login-actions";
import { connect } from "react-redux";
import Login from "../components/Login/login";

const mapStateToProps = (state) => ({
  loginData: state.Login,
});

const mapDispatchToProps = (dispatch) => ({
  login: (data) => dispatch(loginCustomer(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
