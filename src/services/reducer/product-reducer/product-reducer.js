import { ActionType } from "redux-promise-middleware";
import { ADD_TO_CART } from "../../constant";

let init = {
  cartData: [],
};
export default function CartItem(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.info("reducer", action);
      return [...state, { cardData: action.data }];
      break;
    default:
      return state;
  }
}
