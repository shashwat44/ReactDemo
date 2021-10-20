import {
  FETCH_CUSTOMER_REQUEST,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILED,
} from "../../constant";

let initialState = {
  loading: false,
  customers: [],
  errors: "",
};

export default function Customer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CUSTOMER_REQUEST:
      console.info("reducer", action);
      return { ...state, loading: true };
      break;
    case FETCH_CUSTOMER_SUCCESS:
      console.info("reducer", action);
      return { ...state, loading: false, customers: action.payload };
      break;

    case FETCH_CUSTOMER_FAILED:
      console.info("reducer", action);
      return { ...state, loading: false, customers: action.payload };
      break;
    default:
      return state;
  }
}
