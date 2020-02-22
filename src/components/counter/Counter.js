import React from "react";
import IncrementButton from "components/IncrementButton";
import DecrementButton from "components/DecrementButton";
import CountDisplay from "components/CountDisplay";
import PropTypes from "prop-types";

const Counter = ({ count, onIncrement, onDecrement }) => {
  const isDisabled = !count;
  return (
    <div className="buttons has-addons">
      <DecrementButton onClick={onDecrement} isDisabled={isDisabled} />
      <CountDisplay value={count} />
      <IncrementButton onClick={onIncrement} />
    </div>
  );
};
Counter.propTypes = {
  count: PropTypes.number,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default Counter;
