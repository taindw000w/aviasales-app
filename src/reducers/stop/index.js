import {
  REQUEST_SEARCH_ID,
  REQUEST_TICKETS,
  RECEIVE_TICKETS,
  RECEIVE_ERROR,
} from "../../action-types.js";

export const stop = (state = false, action) => {
  switch (action.type) {
    case REQUEST_SEARCH_ID:
    case REQUEST_TICKETS:
    case RECEIVE_ERROR:
      return false;
    case RECEIVE_TICKETS:
      return action.stop;
    default:
      return state;
  }
};
