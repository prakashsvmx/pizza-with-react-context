import React from "react";
import PropTypes from "prop-types";

const PizzaText = ({ value, className }) => {
  return <p className={`subtitle is-4 ${className}`}>{value}</p>;
};
PizzaText.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string
};

export default PizzaText;
