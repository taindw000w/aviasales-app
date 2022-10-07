import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { getError, getLoadingState, getTickets } from "../../reducers/reducer";

import "./header.scss";
import Logo from "../../../src/image/Logo.png";
import "antd/dist/antd.css";

import { Spinner } from "../spinner/spinner";
import { Alert } from "antd";

class Header extends React.Component {
  render() {
    const { error, ignoreError, tickets } = this.props;
    const spinner = !tickets.length ? <Spinner /> : null;
    const alert = error ? (
      <Alert
        cloasable
        closeText="Игнорировать ошибку"
        type="error"
        message={error}
        onClose={ignoreError}
      />
    ) : null;
    return (
      <div className="header">
        <img alt="logo" src={Logo} />
        <div className="subheader">
          {spinner}
          {alert}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: getError(state),
    isLoading: getLoadingState(state),
    tickets: getTickets(state),
  };
};

export default connect(mapStateToProps, actions)(Header);
