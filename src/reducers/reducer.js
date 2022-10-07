import { combineReducers } from "redux";

import { sort } from "./sort/index";
import { transfers } from "./transfers/index";
import { searchId } from "./search-id/index";
import { isLoading } from "./is-loading/index";
import { tickets } from "./tickets/index";
import { stop } from "./stop/index";
import { error } from "./error/index";
import { visible } from "./visible-items/index"

const reducer = combineReducers({
  sort,
  transfers,
  searchId,
  isLoading,
  error,
  tickets,
  stop,
  visible
});

export const getSort = (state) => state.sort;
export const getTransfers = (state) => state.transfers;
export const getSearchId = (state) => state.searchId;
export const getTickets = (state) => state.tickets;
export const getError = (state) => state.error;
export const getStop = (state) => state.stop;
export const getLoadingState = (state) => state.isLoading;
export const getVisibleItems = (state) => state.visible;

export default reducer;
