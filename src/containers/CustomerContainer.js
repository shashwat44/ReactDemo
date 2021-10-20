import Customer from "../components/customer-management/customer-index/customer";
import { fetchCustomerList } from "../services/action/customer/customer-actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  customerList: state.Customer,
});

const mapDispatchToProps = (dispatch) => ({
  getCustomersList: () => dispatch(fetchCustomerList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
