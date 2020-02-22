import React from "react";
import PropTypes from "prop-types";

const PizzaIcon = ({ size }) => {
  return (
    <span className="icon">
      <i className={`fas fa-pizza-slice ${size}`}></i>
    </span>
  );
};
PizzaIcon.propTypes = {
  size: PropTypes.oneOf(["is-small", "is-medium", "is-large"])
};

export default PizzaIcon;
