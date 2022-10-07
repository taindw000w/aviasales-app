import {
  REQUEST_SEARCH_ID,
  RECEIVE_SEARCH_ID,
  REQUEST_TICKETS,
  RECEIVE_TICKETS,
  RECEIVE_ERROR,
  IGNORE_ERROR,
  SORT,
  SORT_CHEAPEST_FIRST,
  SORT_FASTEST_FIRST,
  SORT_OPTIMAL_FIRST,
  TRANSFERS,
  MORE_ITEMS,
} from "./action-types.js";

export function requestSearchId() {
  return {
    type: REQUEST_SEARCH_ID,
    searchId: "",
  };
}

export function receiveSearchId(result) {
  return {
    type: RECEIVE_SEARCH_ID,
    searchId: result.searchId,
  };
}

export function fetchSearchId() {
  return function (dispatch) {
    dispatch(requestSearchId());
    return fetch(`https://front-test.dev.aviasales.ru/search`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        // throw new Error("Статус ответа от сервера: " + response.status);
      })
      .then((result) => {
        dispatch(receiveSearchId(result));
        return result;
      })
      // .catch((error) => {
      //   return dispatch(receiveError(error.message));
      // });
  };
}

export function moreItems() {
  return {
    type: MORE_ITEMS,
  };
};


export function requestTickets() {
  return {
    type: REQUEST_TICKETS,
  };
}

export function receiveTickets(result) {
  return {
    type: RECEIVE_TICKETS,
    tickets: result.tickets,
    stop: result.stop,
  };
}

export function receiveError(error) {
  return {
    type: RECEIVE_ERROR,
    error,
  };
}

export function ignoreError() {
  return {
    type: IGNORE_ERROR,
  };
}

export function fetchTickets(searchId) {
  return function (dispatch) {
    dispatch(requestTickets());
    return fetch(
      `https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("Статус ответа от сервера: " + response.status);
      })
      .then((result) => {
        dispatch(receiveTickets(result));
        return result;
      })
      .catch((error) => {
        console.log(error)
        return dispatch(receiveError(error.message));
      });
  };
}

export function fetchTicketsTillStop(searchId) {
  return async function (dispatch) {
    let stop = false;
    while (!stop) {
      const result = await fetchTickets(searchId);
      stop = await result.stop;
    }
  };
}

export function sortCheap() {
  return {
    type: SORT,
    order: SORT_CHEAPEST_FIRST,
  };
}

export function sortFast() {
  return {
    type: SORT,
    order: SORT_FASTEST_FIRST,
  };
}

export function sortOptimal() {
  return {
    type: SORT,
    order: SORT_OPTIMAL_FIRST,
  };
}

export function allTransfers() {
  return {
    type: TRANSFERS,
    transfers: -1,
  };
}

export function noneTransfers() {
  return {
    type: TRANSFERS,
    transfers: 0,
  };
}

export function oneTransfer() {
  return {
    type: TRANSFERS,
    transfers: 1,
  };
}

export function twoTransfers() {
  return {
    type: TRANSFERS,
    transfers: 2,
  };
}

export function threeTransfers() {
  return {
    type: TRANSFERS,
    transfers: 3,
  };
}
