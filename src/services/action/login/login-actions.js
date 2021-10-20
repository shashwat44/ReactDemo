import {
  FETCH_LOGIN_FAILED,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
} from "../../constant";
import axios from "axios";
import service from "../../api";
import { LOGIN_API } from "../../urls";

export const loginCustomer = (payload) => {
  return async(dispatch) => {
    service
      .post(LOGIN_API,payload)
      .then((response) => {
        console.log("login called res1", response);
        return dispatch(fetchLoginSuccess(response));
      })
      .catch((error) => {
        let errorMsg = error.message;
        return dispatch(fetchLoginFailure(errorMsg));
      });
  };
};

export const fetchLoginRequest = () => {
  return {
    type: FETCH_LOGIN_REQUEST,
  };
};

export const fetchLoginSuccess = (data) => {
  console.log(data, "data suc");
  return {
    type: FETCH_LOGIN_SUCCESS,
    payload: data.object,
  };
};

export const fetchLoginFailure = (error) => {
  return {
    type: FETCH_LOGIN_FAILED,
    payload: error,
  };
};
