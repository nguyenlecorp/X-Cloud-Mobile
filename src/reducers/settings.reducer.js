import { userActionTypes } from "../constants";

const initialState = {
  loading: false,
  plan_changed: false,
  error: ''
};

export function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case userActionTypes.PAYMENT_REQUEST:
      return {
        loading: true,
        ...state
      };
    case userActionTypes.PAYMENT_SUCCESS:
      return {
        loading: false,
        plan_changed: true
      };
    case userActionTypes.PAYMENT_FAILURE:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
