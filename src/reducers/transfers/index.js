import { TRANSFERS } from "../../action-types.js";

const setAllTransfers = (isChecked) => {
  if (isChecked) {
    return [-1, 0, 1, 2, 3];
  }

  return [];
};

const initialTransfers = setAllTransfers(true);

const shouldAllTransfersBeChecked = (transfers) => {
  return (
    transfers.includes(0) &&
    transfers.includes(1) &&
    transfers.includes(2) &&
    transfers.includes(3)
  );
};

const controlAllCheckbox = (transfers) => {
  if (shouldAllTransfersBeChecked(transfers)) {
    return setAllTransfers(true);
  }

  return removeTransfer(transfers, -1);
};

const removeTransfer = (transfers, transfer) => {
  const index = transfers.indexOf(transfer);
  if (index > -1) {
    return [...transfers.slice(0, index), ...transfers.slice(index + 1)];
  }

  return transfers;
};

const changeTransfer = (transfers, transfer) => {
  if (transfers.includes(transfer)) {
    return removeTransfer(transfers, transfer);
  }

  return [...transfers, transfer];
};

export const transfers = (state = initialTransfers, action) => {
  switch (action.type) {
    case TRANSFERS:
      switch (action.transfers) {
        case -1:
          return setAllTransfers(!state.includes(-1));
        case 0:
        case 1:
        case 2:
        case 3:
          return controlAllCheckbox(changeTransfer(state, action.transfers));
        default:
          return state;
      }
    default:
      return state;
  }
};
