import {
  RECEIVE_SEARCH_ID,
  REQUEST_TICKETS,
  RECEIVE_TICKETS,
  RECEIVE_ERROR,
} from "../../action-types.js";

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case REQUEST_TICKETS:
      return true;
    case RECEIVE_SEARCH_ID:
    case RECEIVE_TICKETS:
    case RECEIVE_ERROR:
      return false;
    default:
      return state;
  }
};
