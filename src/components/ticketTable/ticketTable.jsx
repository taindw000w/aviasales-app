import React from 'react';
import { format, addMinutes, parseJSON } from 'date-fns';
import table_classes from './ticketTable.module.scss';

import { TicketColumn } from '../ticketColumn/ticketColumn';

export const TicketTable = ({
  carrier,
  destination,
  origin,
  date,
  duration,
  stops,
}) => {

  function formattedDuration(minutes) {
    const hours = Math.floor(minutes / 60);
    const mm = minutes - hours * 60;
    return `${hours}ч ${mm}м`;
  }

  function formatDate(dateToFormat) {
    return format(dateToFormat, "HH:mm");
  }

  function stopsCount(count) {
    switch (count) {
      case 0:
        return "Без пересадок";
      case 1:
        return `${count} пересадка`;
      case 2:
      case 3:
      case 4:
        return `${count} пересадки`;
      default:
        return `${count} пересадок`;
    }
  }

  const parsedDate = parseJSON(date);
  const timeStart = formatDate(parsedDate);
  const timeFinish = formatDate(addMinutes(parsedDate, duration));
  const humanDuration = formattedDuration(duration);

  return (
    <div className={table_classes["ticket-table"]}>
      <TicketColumn
        title={`${origin} – ${destination}`}
        value={`${timeStart} – ${timeFinish}`}
      />
      <TicketColumn title="В пути" value={humanDuration} />
      <TicketColumn
        title={stopsCount(stops.length)}
        value={stops.join(", ")}
      />
    </div>
  );
};

