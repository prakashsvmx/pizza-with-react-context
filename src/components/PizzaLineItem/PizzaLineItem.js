import React from "react";
import PropTypes from "prop-types";
import PizzaIcon from "components/PizzaIcon";
import PizzaText from "components/PizzaText";
import Counter from "components/counter";

const PizzaLineItem = ({ iconSize, text, count, textStyle, onIncrement, onDecrement }) => {
  return (
    <div className="columns is-mobile">
      <div className="column is-1">
        <PizzaIcon size={iconSize} />
      </div>
      <div className="column is-3">
        <PizzaText value={text} className={textStyle} />
      </div>
      <div className="column is-4">
        <Counter onDecrement={onDecrement} onIncrement={onIncrement} count={count} />
      </div>
    </div>
  );
};
PizzaLineItem.propTypes = {
  iconSize: PropTypes.string,
  text: PropTypes.string,
  count: PropTypes.number,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  textStyle: PropTypes.string
};

export default PizzaLineItem;
