import React from "react";
import { connect } from "react-redux";
import { Alert } from "antd";

import * as actions from "../../actions";
import { SORT_CHEAPEST_FIRST, SORT_FASTEST_FIRST, SORT_OPTIMAL_FIRST } from "../../action-types.js";
import {
  getSearchId,
  getTickets,
  getSort,
  getTransfers,
  getStop,
  getVisibleItems
} from "../../reducers/reducer";

import "./ticketList.scss";
import "antd/dist/antd.css";

import { Ticket } from "../ticket/ticket";

class TicketList extends React.Component {
  sortTickets = (tickets, sort) => {
    switch (sort) {
      case SORT_CHEAPEST_FIRST:
        tickets.sort(
          (ticketPrev, ticketNext) => ticketPrev.price - ticketNext.price
        );
        break;
      case SORT_FASTEST_FIRST:
        tickets.sort(
          (ticketPrev, ticketNext) =>
            ticketPrev.segments.reduce((total, next) => ({
              duration: total.duration + next.duration,
            })).duration -
            ticketNext.segments.reduce((total, next) => ({
              duration: total.duration + next.duration,
            })).duration
        );
        break;
      case SORT_OPTIMAL_FIRST:
        tickets.sort((a, b) => {
          if (a.price + a.segments[0].stops.length +
              a.segments[0].duration +
              a.segments[1].duration >
            b.price + b.segments[0].stops.length +
              b.segments[0].duration +
              b.segments[1].duration
          ) {
            return 1;
          }
          if (
            a.price +
              a.segments[0].stops.length +
              a.segments[0].duration +
              a.segments[1].duration <
            b.price +
              b.segments[0].stops.length +
              b.segments[0].duration +
              b.segments[1].duration
          ) {
            return -1;
          }
          return 0;
        });
        break;
      default: 
        return tickets;
    }
  };

  filterTickets = (tickets, transfers) => {
    return tickets.filter((ticket) =>
      transfers.some((transfer) =>
        ticket.segments
          .map((direction) => direction.stops.length)
          .includes(transfer)
      )
    );
  };

  componentDidMount() {
    const { searchId, fetchSearchId } = this.props;

    if (!searchId) {
      fetchSearchId();
    }
  }

  componentDidUpdate() {
    const { searchId, stop, fetchSearchId, fetchTickets } = this.props;
    if (!searchId) {
      fetchSearchId();
    }

    if (!stop) {
      fetchTickets(searchId);
    }
  }
  

  render() {
    const { tickets, sort, transfers, moreItems, visibleItems } = this.props;
    if (!tickets) {
      return null;
    }

    let filteredTickets = this.filterTickets(tickets, transfers);
    if (!filteredTickets.length) {
      return (
        <Alert
          message="Рейсов, подходящих под заданные фильтры, не найдено"
          type="info"
        />
      );
    }
    this.sortTickets(filteredTickets, sort);
    

    const ticketsData = filteredTickets.slice(0, visibleItems).map((ticket, index) => {
      return <Ticket {...ticket} key={index} />;
    });

    return (
      <ul className="ticket-list">
        {ticketsData}
        <button className="show-tickets" onClick={() => moreItems()}>
          ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ !
        </button>
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tickets: getTickets(state),
    searchId: getSearchId(state),
    sort: getSort(state),
    transfers: getTransfers(state),
    stop: getStop(state),
    visibleItems: getVisibleItems(state),
  };
};

export default connect(mapStateToProps, actions)(TicketList);
