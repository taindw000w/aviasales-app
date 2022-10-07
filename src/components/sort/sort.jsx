import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { SORT_CHEAPEST_FIRST, SORT_FASTEST_FIRST, SORT_OPTIMAL_FIRST } from "../../action-types.js";
import classNames from "classnames";

import "./sort.scss";

const Sort = ({ sort, sortCheap, sortFast, sortOptimal }) => {
  const getButtonClassNames = (order) => ({
    "sort-button": true,
    "sort-button--focused": sort === order,
  });

  const btnCheapClassNames = classNames(
    getButtonClassNames(SORT_CHEAPEST_FIRST)
  );
  const btnFastClassNames = classNames(getButtonClassNames(SORT_FASTEST_FIRST));
  const btnOptimalClassNames = classNames(
    getButtonClassNames(SORT_OPTIMAL_FIRST)
  );

  return (
    <div className="sort">
      <button className={btnCheapClassNames} onClick={sortCheap}>
        самый дешевый
      </button>
      <button className={btnFastClassNames} onClick={sortFast}>
        самый быстрый
      </button>
      <button className={btnOptimalClassNames} onClick={sortOptimal}>
        самый оптимальный
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sort: state.sort,
  };
};

export default connect(mapStateToProps, actions)(Sort);
