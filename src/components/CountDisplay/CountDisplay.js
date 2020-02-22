import React from "react";
import PropTypes from "prop-types";

const CountDisplay = ({ value }) => {
  return (
    <button className="button is-normal" data-test="btn-count-display">
      {value}
    </button>
  );
};
CountDisplay.propTypes = {
  value: PropTypes.number
};

export default CountDisplay;
