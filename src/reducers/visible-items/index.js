import { MORE_ITEMS } from '../../action-types';

export const visible = (state = 5, action) => {
  switch (action.type) {
    case MORE_ITEMS:
      return state + 5;
    default:
      return state;
  }
}