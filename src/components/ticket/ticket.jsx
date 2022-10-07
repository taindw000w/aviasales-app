import React from "react";

import { TicketTable } from "../ticketTable/ticketTable";

import classes from "./ticket.module.scss";

export const Ticket = ({ price, carrier, segments }) => {
  return (
    <li className={classes.ticket}>
      <div className={classes["header"]}>
        <span className={classes.price}>{price} Р</span>
        <img
          alt="logo"
          src={`//pics.avs.io/99/36/${carrier}.png`}
          className={classes.logo}
        />
      </div>
      <TicketTable {...segments[0]} />
      <TicketTable {...segments[1]} />
    </li>
  );
};


