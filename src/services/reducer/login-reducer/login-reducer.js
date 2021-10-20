import {
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILED,
} from "../../constant";

let initialState = {
  loading: false,
  loginData: [],
  errors: "",
};

export default function Login(state = initialState, action) {
  debugger
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      console.info("reducer", action);
      return { ...state, loading: true };
      break;
    case FETCH_LOGIN_SUCCESS:
      console.info("reducer", action);
      return { ...state, loading: false, loginData: action.payload };
      break;

    case FETCH_LOGIN_FAILED:
      console.info("reducer", action);
      return { ...state, loading: false, loginData: action.payload };
      break;
    default:
      return state;
  }
}
