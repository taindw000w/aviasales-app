import React from 'react';
import classes from './ticketColumn.module.scss';

export const TicketColumn = ({ title, value }) => {
  return (
    <div className={classes["ticket-column"]}>
      <div className={classes.title}>{title}</div>
      <div className={classes.value}>{value}</div>
    </div>
  );
};