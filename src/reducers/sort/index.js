import { SORT } from "../../action-types.js";

export const sort = (state = {}, action) => {
  switch (action.type) {
    case SORT:
      return action.order;
    default:
      return state;
  }
};
