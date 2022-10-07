import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { getTransfers } from "../../reducers/reducer";

import "./transferOptions.scss";
import Checkbox from "../checkbox/checkbox";

const TransferOptions = ({
  transfers,
  allTransfers,
  noneTransfers,
  oneTransfer,
  twoTransfers,
  threeTransfers,
}) => {
  return (
    <div className="transfer-options">
      <p className="transfer-options-title">Количество пересадок</p>
      <Checkbox
        isChecked={transfers.includes(-1)}
        caption="Все"
        onChange={allTransfers}
      />
      <Checkbox
        isChecked={transfers.includes(0)}
        caption="Без пересадок"
        onChange={noneTransfers}
      />
      <Checkbox
        isChecked={transfers.includes(1)}
        caption="1 пересадка"
        onChange={oneTransfer}
      />
      <Checkbox
        isChecked={transfers.includes(2)}
        caption="2 пересадки"
        onChange={twoTransfers}
      />
      <Checkbox
        isChecked={transfers.includes(3)}
        caption="3 пересадки"
        onChange={threeTransfers}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transfers: getTransfers(state),
  };
};

export default connect(mapStateToProps, actions)(TransferOptions);
