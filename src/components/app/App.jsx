import React from "react";

import TransferOptions from "../transferOptions/transferOptions";
import TicketList from "../ticketList/ticketList";
import Header from "../header/header";
import Sort from "../sort/sort";

import Logo from "../../../src/image/Logo.png";
import app_classes from "./app.module.scss";

export const App = () => {
  return (
    <div className={app_classes.container}>
      <Header />
      <div className={app_classes.wrapper}>
        <TransferOptions />
        <div className={app_classes["wrapper-ticket-filters"]}>
          <Sort />
          {/* <Spinner /> */}
          <TicketList />
        </div>
      </div>
    </div>
  );
};


