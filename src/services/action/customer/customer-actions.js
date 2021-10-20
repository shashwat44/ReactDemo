import {
  FETCH_CUSTOMER_FAILED,
  FETCH_CUSTOMER_REQUEST,
  FETCH_CUSTOMER_SUCCESS,
} from "../../constant";
import axios from "axios";

export const fetchCustomerList = () => {
  return async(dispatch) => {
    console.info("axios", axios);

    let url = "https://gorest.co.in/public/v1/users";
  
    axios
      .get(url)
      .then((response) => {
        console.log("called res1", response);
        return dispatch(fetchCustomerListSuccess(response.data.data));
      })
      .catch((error) => {
        let errorMsg = error.message;
        return dispatch(fetchCustomerListFailure(errorMsg));
      });
  };
};

export const fetchCustomerListRequest = () => {
  return {
    type: FETCH_CUSTOMER_REQUEST,
  };
};

export const fetchCustomerListSuccess = (customers) => {
  console.log(customers, "customers suc");
  return {
    type: FETCH_CUSTOMER_SUCCESS,
    payload: customers,
  };
};

export const fetchCustomerListFailure = (error) => {
  return {
    type: FETCH_CUSTOMER_FAILED,
    payload: error,
  };
};
