import { REQUEST_SEARCH_ID, RECEIVE_SEARCH_ID } from "../../action-types.js";

export const searchId = (state = "", action) => {
  switch (action.type) {
    case REQUEST_SEARCH_ID:
    case RECEIVE_SEARCH_ID:
      return action.searchId;
    default:
      return state;
  }
};
