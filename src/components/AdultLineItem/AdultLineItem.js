import React from "react";
import PropTypes from "prop-types";
import Counter from "components/counter";

const AdultLineItem = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="container" data-test="adult-line-item">
      <div className="columns is-mobile">
        <div className="column"></div>
        <div className="column line-item">
          <i className="fas fa-user-tag"></i>Adult
        </div>
        <div className="column">
          <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
        </div>
      </div>
    </div>
  );
};
AdultLineItem.propTypes = {
  count: PropTypes.number,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default AdultLineItem;
